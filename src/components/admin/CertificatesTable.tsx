import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { formatCurrency } from "@/lib/currency";

export type DashboardCertificate = {
    id: string;
    code: string;
    status: string;
    companyId: string;
    recipientName: string | null;
    senderName: string | null;
    createdAt: string;
    price: number;
    orderNumber: string | null;
    paymentStatus: string | null;
    buyerPhone: string | null;
    buyerEmail: string | null;
    utmTag: {
        id: string;
        name: string | null;
        utmSource: string | null;
        utmCampaign: string | null;
        utmMedium: string | null;
    } | null;
};

interface CertificatesTableProps {
    certificates: DashboardCertificate[];
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
    companies: { id: string; label: string; address: string }[];
    onUseCertificate: (id: string) => Promise<void>;
    usingCertificateId: string | null;
}

export const CertificatesTable = ({
    certificates,
    loading,
    error,
    onRefresh,
    companies,
    onUseCertificate,
    usingCertificateId,
}: CertificatesTableProps) => {
    const [search, setSearch] = useState("");
    const [showArchive, setShowArchive] = useState(false);

    const filteredCertificates = useMemo(() => {
        // Archive logic:
        // unchecked (false) -> show ONLY active
        // checked (true) -> show ONLY used/expired (status !== 'active')
        const byStatus = certificates.filter((cert) => {
            if (showArchive) {
                return cert.status !== "active";
            }
            return cert.status === "active";
        });

        const searchTerm = search.trim().toLowerCase();
        let result = byStatus;

        if (searchTerm) {
            const searchDigits = searchTerm.replace(/\D+/g, "");
            result = byStatus.filter((cert) => {
                const codeMatch = cert.code.toLowerCase().includes(searchTerm);
                const orderMatch = cert.orderNumber?.toLowerCase().includes(searchTerm) ?? false;
                if (!searchDigits && (codeMatch || orderMatch)) {
                    return true;
                }
                const phoneNormalized = cert.buyerPhone?.toLowerCase() ?? "";
                const phoneDigits = cert.buyerPhone?.replace(/\D+/g, "") ?? "";
                const phoneMatch = searchDigits
                    ? searchDigits.length > 0 && phoneDigits.includes(searchDigits)
                    : phoneNormalized.includes(searchTerm);
                return codeMatch || orderMatch || phoneMatch;
            });
        }

        // Sort by newest first
        return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [certificates, showArchive, search]);

    return (
        <Card className="border border-border/60 bg-card shadow-sm">
            <CardHeader className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <CardTitle>Сертификаты</CardTitle>
                        <CardDescription>Активные и завершённые покупки</CardDescription>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onRefresh}
                        disabled={loading}
                        className="inline-flex items-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        {loading ? "Обновляем..." : "Обновить"}
                    </Button>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <Input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="ID сертификата или номеру покупателя"
                        className="md:max-w-sm"
                    />
                    <label htmlFor="show-all-certificates" className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Checkbox
                            id="show-all-certificates"
                            checked={showArchive}
                            onCheckedChange={(checked) => setShowArchive(checked === true)}
                        />
                        <span>Архив</span>
                    </label>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {error && <p className="text-sm text-destructive">{error}</p>}
                {loading && <p className="text-sm text-muted-foreground">Загружаем список сертификатов...</p>}
                {!loading && !filteredCertificates.length && (
                    <p className="text-sm text-muted-foreground">Сертификатов пока нет.</p>
                )}
                {!loading && filteredCertificates.length > 0 && (
                    <div className="space-y-3 h-[calc(100vh-300px)] overflow-y-auto pr-1">
                        {filteredCertificates.map((certificate) => {
                            const company = companies.find((item) => item.id === certificate.companyId);
                            const branchTitle = company ? `${company.label} — ${company.address}` : "Филиал";
                            const createdAt = new Date(certificate.createdAt);
                            const statusText =
                                certificate.status === "active"
                                    ? "Активен"
                                    : certificate.status === "used"
                                        ? "Использован"
                                        : "Закрыт";
                            const statusColor =
                                certificate.status === "active"
                                    ? "text-emerald-600"
                                    : certificate.status === "used"
                                        ? "text-muted-foreground"
                                        : "text-muted-foreground";
                            const paymentLabel =
                                certificate.paymentStatus === "paid"
                                    ? null
                                    : certificate.paymentStatus === "failed"
                                        ? "Ошибка оплаты"
                                        : "Ожидание оплаты";
                            const paymentColor =
                                certificate.paymentStatus === "paid"
                                    ? "hidden"
                                    : certificate.paymentStatus === "failed"
                                        ? "text-destructive"
                                        : "text-amber-500";
                            const utmLabel =
                                certificate.utmTag?.name ??
                                certificate.utmTag?.utmCampaign ??
                                certificate.utmTag?.utmSource ??
                                null;
                            return (
                                <div key={certificate.id} className="border border-border/60 rounded-2xl p-4 space-y-2">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>#{certificate.code}</span>
                                        <span>
                                            {createdAt.toLocaleDateString("ru-RU", {
                                                day: "2-digit",
                                                month: "short",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>Заказ: {certificate.orderNumber ?? "—"}</span>
                                        <span className={paymentColor}>{paymentLabel}</span>
                                    </div>
                                    <p className="text-base font-semibold text-foreground">
                                        {certificate.recipientName ?? "Получатель"}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{branchTitle}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Телефон: <span className="font-medium text-foreground">{certificate.buyerPhone ?? "—"}</span>
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        {utmLabel ? (
                                            <div className="flex items-center gap-2">
                                                <span className="uppercase tracking-wide text-[10px] text-muted-foreground/80">UTM</span>
                                                <Badge variant="secondary" className="text-xs font-medium">
                                                    {utmLabel}
                                                </Badge>
                                            </div>
                                        ) : (
                                            <span>UTM-метка не зафиксирована</span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium text-primary">{formatCurrency(certificate.price)}</span>
                                        <span className={statusColor}>{statusText}</span>
                                    </div>
                                    {certificate.status === "active" && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            disabled={usingCertificateId === certificate.id}
                                            onClick={() => void onUseCertificate(certificate.id)}
                                        >
                                            {usingCertificateId === certificate.id ? "Отмечаем..." : "Использовать"}
                                        </Button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
