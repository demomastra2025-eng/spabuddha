import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { formatCurrency } from "@/lib/currency";

export type DashboardOrder = {
    id: string;
    orderNumber: string;
    amount: number;
    status: string;
    paymentStatus: string;
    companyId: string;
    createdAt: string;
    recipientName?: string | null;
};

interface OrdersTableProps {
    orders: DashboardOrder[];
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
    companies: { id: string; label: string; address: string }[];
}

export const OrdersTable = ({ orders, loading, error, onRefresh, companies }: OrdersTableProps) => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");

    const filteredOrders = useMemo(() => {
        let result = orders;

        if (statusFilter !== "all") {
            result = result.filter((order) => order.paymentStatus === statusFilter);
        }

        const searchTerm = search.trim().toLowerCase();
        if (searchTerm) {
            result = result.filter(
                (order) =>
                    order.orderNumber.toLowerCase().includes(searchTerm) ||
                    (order.recipientName && order.recipientName.toLowerCase().includes(searchTerm)),
            );
        }

        return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [orders, search, statusFilter]);

    return (
        <Card className="border border-border/60 bg-card shadow-sm">
            <CardHeader className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <CardTitle>Заказы</CardTitle>
                        <CardDescription>История покупок</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
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
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <Input
                        placeholder="Поиск по номеру или имени..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="md:max-w-sm"
                    />
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Статус оплаты" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Все статусы</SelectItem>
                            <SelectItem value="paid">Оплачен</SelectItem>
                            <SelectItem value="pending">Ожидает</SelectItem>
                            <SelectItem value="failed">Ошибка</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {loading && <p className="text-sm text-muted-foreground">Загружаем данные...</p>}
                {error && <p className="text-sm text-destructive">{error}</p>}
                {!filteredOrders.length && !loading && <p className="text-sm text-muted-foreground">Заказы не найдены.</p>}
                {filteredOrders.map((order) => {
                    const company = companies.find((c) => c.id === order.companyId);
                    const branchTitle = company ? `${company.label} — ${company.address}` : "Филиал";
                    const created = new Date(order.createdAt);
                    const paymentLabel =
                        order.paymentStatus === "paid"
                            ? "Оплачен"
                            : order.paymentStatus === "failed"
                                ? "Ошибка оплаты"
                                : "Ожидает";
                    const paymentColor =
                        order.paymentStatus === "paid"
                            ? "text-emerald-600"
                            : order.paymentStatus === "failed"
                                ? "text-destructive"
                                : "text-amber-500";
                    return (
                        <div key={order.id} className="p-4 rounded-xl border border-border/60 space-y-1">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>#{order.orderNumber}</span>
                                <span>
                                    {created.toLocaleString("ru-RU", {
                                        day: "2-digit",
                                        month: "short",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>
                            <p className="text-base font-semibold text-foreground">{order.recipientName ?? "Получатель"}</p>
                            <p className="text-sm text-muted-foreground">{branchTitle}</p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-primary">{formatCurrency(order.amount)}</span>
                                <span className={paymentColor}>{paymentLabel}</span>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};
