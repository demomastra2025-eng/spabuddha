import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const branchFormDefaults = {
    label: "",
    address: "",
    phone: "",
    nameCompany: "",
    binCompany: "",
    bikCompany: "",
    officialAddress: "",
    companyOneVisionId: "",
    passOneVision: "",
    keyOneVision: "",
    companyNameOneVisionId: "",
    email: "",
    managerName: "",
    timezone: "",
    status: "active" as "active" | "inactive",
    wazzupApiToken: "",
    wazzupChannelId: "",
    wazzupNumber: "",
    altegioCompanyId: "",
    altegioCategoryId: "",
    storageId: "",
    goodIds: "",
};

interface BranchEditorProps {
    companies: { id: string; label: string; address: string }[];
    token: string | undefined;
    onRefresh: () => void;
}

export const BranchEditor = ({ companies, token, onRefresh }: BranchEditorProps) => {
    const [selectedBranchId, setSelectedBranchId] = useState("");
    const [branchForm, setBranchForm] = useState(branchFormDefaults);
    const [branchLoading, setBranchLoading] = useState(false);
    const [branchSaving, setBranchSaving] = useState(false);
    const [branchError, setBranchError] = useState<string | null>(null);

    useEffect(() => {
        if (!selectedBranchId && companies.length) {
            setSelectedBranchId(companies[0].id);
        }
    }, [companies, selectedBranchId]);

    useEffect(() => {
        const loadBranchDetails = async (companyId: string) => {
            if (!token || !companyId) return;
            setBranchLoading(true);
            try {
                const response = await fetch(`/api/companies/${companyId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.message ?? "Не удалось загрузить данные филиала");
                }

                const data = await response.json();

                setBranchForm({
                    label: data.label ?? "",
                    address: data.address ?? "",
                    phone: data.phone ?? "",
                    nameCompany: data.nameCompany ?? "",
                    binCompany: data.binCompany ?? "",
                    bikCompany: data.bikCompany ?? "",
                    officialAddress: data.officialAddress ?? "",
                    companyOneVisionId: data.companyOneVisionId ?? "",
                    passOneVision: data.passOneVision ?? "",
                    keyOneVision: data.keyOneVision ?? "",
                    companyNameOneVisionId: data.companyNameOneVisionId ?? "",
                    email: data.email ?? "",
                    managerName: data.managerName ?? "",
                    timezone: data.timezone ?? "",
                    status: data.status ?? "active",
                    wazzupApiToken: data.wazzupApiToken ?? "",
                    wazzupChannelId: data.wazzupChannelId ?? "",
                    wazzupNumber: data.wazzupNumber ?? "",
                    altegioCompanyId: data.altegioCompanyId ?? "",
                    altegioCategoryId: data.altegioCategoryId ?? "",
                    storageId: data.storageId ?? "",
                    goodIds: data.goodIds?.join(", ") ?? "",
                });
                setBranchError(null);
            } catch (error) {
                console.error(error);
                setBranchError(error instanceof Error ? error.message : "Не удалось загрузить данные филиала");
            } finally {
                setBranchLoading(false);
            }
        };

        if (selectedBranchId && selectedBranchId !== "all") {
            void loadBranchDetails(selectedBranchId);
        }
    }, [selectedBranchId, token]);

    const handleBranchFieldChange = (field: keyof typeof branchFormDefaults) => (value: string) => {
        setBranchForm((prev) => ({ ...prev, [field]: value }));
    };

    const submitBranchForm: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!selectedBranchId) {
            toast.error("Выберите филиал");
            return;
        }
        if (!branchForm.label.trim() || !branchForm.address.trim()) {
            toast.error("Название и адрес обязательны");
            return;
        }
        if (!token) {
            toast.error("Сессия истекла. Перезайдите.");
            return;
        }

        setBranchSaving(true);
        try {
            const payload = {
                label: branchForm.label.trim(),
                address: branchForm.address.trim(),
                phone: branchForm.phone.trim() || undefined,
                nameCompany: branchForm.nameCompany.trim() || undefined,
                binCompany: branchForm.binCompany.trim() || undefined,
                bikCompany: branchForm.bikCompany.trim() || undefined,
                officialAddress: branchForm.officialAddress.trim() || undefined,
                companyOneVisionId: branchForm.companyOneVisionId.trim() || undefined,
                passOneVision: branchForm.passOneVision.trim() || undefined,
                keyOneVision: branchForm.keyOneVision.trim() || undefined,
                companyNameOneVisionId: branchForm.companyNameOneVisionId.trim() || undefined,
                email: branchForm.email.trim() || undefined,
                status: branchForm.status,
                managerName: branchForm.managerName.trim() || undefined,
                timezone: branchForm.timezone.trim() || undefined,
                wazzupApiToken: branchForm.wazzupApiToken.trim() || undefined,
                wazzupChannelId: branchForm.wazzupChannelId.trim() || undefined,
                wazzupNumber: branchForm.wazzupNumber.trim() || undefined,
                altegioCompanyId: branchForm.altegioCompanyId.trim() || undefined,
                altegioCategoryId: branchForm.altegioCategoryId.trim() || undefined,
                storageId: branchForm.storageId.trim() || undefined,
                goodIds: branchForm.goodIds
                    ? branchForm.goodIds
                        .split(",")
                        .map((id) => id.trim())
                        .filter(Boolean)
                    : undefined,
            };

            const response = await fetch(`/api/companies/${selectedBranchId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message ?? "Не удалось сохранить изменения");
            }

            toast.success("Данные филиала обновлены");
            onRefresh();
        } catch (error) {
            console.error(error);
            toast.error(error instanceof Error ? error.message : "Не удалось обновить филиал");
        } finally {
            setBranchSaving(false);
        }
    };

    return (
        <Card className="border border-border/60 bg-card shadow-sm">
            <CardHeader>
                <CardTitle>Редактор филиала</CardTitle>
                <CardDescription>
                    Суперадмин может обновить любой филиал, менеджер — только свой.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {!companies.length ? (
                    <p className="text-sm text-muted-foreground">Нет доступных филиалов для редактирования.</p>
                ) : (
                    <form className="space-y-6" onSubmit={submitBranchForm}>
                        {companies.length > 1 && (
                            <div className="space-y-2">
                                <Label>Выберите филиал</Label>
                                <Select
                                    value={selectedBranchId}
                                    onValueChange={setSelectedBranchId}
                                    disabled={branchLoading}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Выберите филиал" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {companies.map((company) => (
                                            <SelectItem key={company.id} value={company.id}>
                                                {company.label} — {company.address}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        {branchError && <p className="text-sm text-destructive">{branchError}</p>}

                        {branchLoading && (
                            <div className="space-y-3">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={`branch-skeleton-${index}`} className="h-14 rounded-xl bg-muted/30 animate-pulse" />
                                ))}
                            </div>
                        )}

                        {!branchLoading && selectedBranchId !== "all" ? (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Название</Label>
                                        <Input
                                            value={branchForm.label}
                                            onChange={(event) => handleBranchFieldChange("label")(event.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Телефон</Label>
                                        <Input
                                            value={branchForm.phone}
                                            onChange={(event) => handleBranchFieldChange("phone")(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Адрес</Label>
                                    <Input
                                        value={branchForm.address}
                                        onChange={(event) => handleBranchFieldChange("address")(event.target.value)}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Email</Label>
                                        <Input
                                            type="email"
                                            value={branchForm.email}
                                            onChange={(event) => handleBranchFieldChange("email")(event.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Менеджер филиала</Label>
                                        <Input
                                            value={branchForm.managerName}
                                            onChange={(event) => handleBranchFieldChange("managerName")(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 rounded-xl border border-border/60 p-4">
                                    <div>
                                        <Label className="text-base font-semibold">Настройки WhatsApp (Wazzup)</Label>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Значения используются для отправки сертификатов через WhatsApp. Оставьте пустыми, если для
                                            филиала интеграция не нужна.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>API Token</Label>
                                            <Input
                                                value={branchForm.wazzupApiToken}
                                                onChange={(event) => handleBranchFieldChange("wazzupApiToken")(event.target.value)}
                                                placeholder="sk_live_..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Channel ID</Label>
                                            <Input
                                                value={branchForm.wazzupChannelId}
                                                onChange={(event) => handleBranchFieldChange("wazzupChannelId")(event.target.value)}
                                                placeholder="uuid канала"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Номер отправителя</Label>
                                        <Input
                                            value={branchForm.wazzupNumber}
                                            onChange={(event) => handleBranchFieldChange("wazzupNumber")(event.target.value)}
                                            placeholder="+7..."
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Для справки отображается в админке и договорах. Сам канал определяется по Channel ID.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 rounded-xl border border-border/60 p-4">
                                    <div>
                                        <Label className="text-base font-semibold">Altegio</Label>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Используется для загрузки сертификатов и списания продаж.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label>Altegio company_id</Label>
                                            <Input
                                                value={branchForm.altegioCompanyId}
                                                onChange={(event) => handleBranchFieldChange("altegioCompanyId")(event.target.value)}
                                                placeholder="например, 1266617"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Altegio category_id</Label>
                                            <Input
                                                value={branchForm.altegioCategoryId}
                                                onChange={(event) => handleBranchFieldChange("altegioCategoryId")(event.target.value)}
                                                placeholder="например, 1005340"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Altegio storage_id</Label>
                                            <Input
                                                value={branchForm.storageId}
                                                onChange={(event) => handleBranchFieldChange("storageId")(event.target.value)}
                                                placeholder="например, 1569453"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <Label>Список ID товаров (good_ids)</Label>
                                        <p className="text-xs text-muted-foreground">
                                            Укажите ID товаров через запятую, чтобы фильтровать список сертификатов.
                                            Если пусто — показываются все.
                                        </p>
                                        <Textarea
                                            value={branchForm.goodIds}
                                            onChange={(event) => handleBranchFieldChange("goodIds")(event.target.value)}
                                            placeholder="12345, 67890"
                                            className="min-h-[80px]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Юр. наименование</Label>
                                    <Input
                                        value={branchForm.nameCompany}
                                        onChange={(event) => handleBranchFieldChange("nameCompany")(event.target.value)}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>БИН</Label>
                                        <Input
                                            value={branchForm.binCompany}
                                            onChange={(event) => handleBranchFieldChange("binCompany")(event.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>БИК</Label>
                                        <Input
                                            value={branchForm.bikCompany}
                                            onChange={(event) => handleBranchFieldChange("bikCompany")(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Юридический адрес</Label>
                                    <Input
                                        value={branchForm.officialAddress}
                                        onChange={(event) => handleBranchFieldChange("officialAddress")(event.target.value)}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>OneVision Merchant ID (MID)</Label>
                                        <Input
                                            value={branchForm.companyOneVisionId}
                                            onChange={(event) => handleBranchFieldChange("companyOneVisionId")(event.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Значение из личного кабинета OneVision, используется как <code>merchant_id</code>.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>OneVision API Key</Label>
                                        <Input
                                            value={branchForm.keyOneVision}
                                            onChange={(event) => handleBranchFieldChange("keyOneVision")(event.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Ключ магазина для формирования токена авторизации (Bearer).
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>OneVision Secret (Pass)</Label>
                                        <Input
                                            value={branchForm.passOneVision}
                                            onChange={(event) => handleBranchFieldChange("passOneVision")(event.target.value)}
                                            type="password"
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Секретный ключ для подписи запросов.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>OneVision Service ID</Label>
                                        <Input
                                            value={branchForm.companyNameOneVisionId}
                                            onChange={(event) => handleBranchFieldChange("companyNameOneVisionId")(event.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Идентификатор сервиса (service_id).
                                        </p>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full" disabled={branchSaving}>
                                    {branchSaving ? "Сохраняем..." : "Сохранить изменения"}
                                </Button>
                            </div>
                        ) : null}
                    </form>
                )}
            </CardContent>
        </Card>
    );
};
