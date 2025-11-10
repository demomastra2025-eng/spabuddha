import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CertificateData } from "@/types/certificates";
import { CertificatePreview } from "./CertificatePreview";
import { useState } from "react";
import { Check, Shield } from "lucide-react";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/currency";
import { calculateServicesTotal, getDiscountedPrice } from "@/lib/services";
import { useCompanies } from "@/hooks/useCompanies";

interface StepPaymentProps {
  data: CertificateData;
  onPrev: () => void;
}

export const StepPayment = ({ data, onPrev }: StepPaymentProps) => {
  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const { companies } = useCompanies();
  const selectedBranch = companies.find((branch) => branch.id === data.branch);
  const branchLabel = selectedBranch?.label ?? "—";
  const branchAddress = selectedBranch?.address ?? "—";
  const hasServices = data.selectedServices.length > 0;
  const orderTotal =
    data.type === "procedure" && hasServices ? calculateServicesTotal(data.selectedServices) : data.amount;

  const buildOrderPayload = () => {
    const deliveryContact = data.deliveryContact?.trim() ?? "";
    const clientEmail =
      data.email?.trim() ||
      (data.deliveryMethod === "email" ? deliveryContact : "") ||
      "";
    const clientPhone =
      data.deliveryMethod === "whatsapp"
        ? deliveryContact || data.phone?.trim() || ""
        : data.phone?.trim() || "";

    return {
      companyId: data.branch,
      amount: orderTotal,
      type: data.type,
      templateId: data.templateId,
      senderName: data.senderName || undefined,
      recipientName: data.recipientName,
      message: data.message || undefined,
      validUntil: data.validUntil ? data.validUntil.toISOString() : undefined,
      delivery: {
        method: data.deliveryMethod,
        contact: data.deliveryMethod === "download" ? null : deliveryContact || null,
      },
      client: {
        name: data.recipientName,
        firstName: data.recipientName,
        email: clientEmail || undefined,
        phone: clientPhone || undefined,
      },
      services:
        data.type === "procedure"
          ? data.selectedServices.map((service) => ({
              id: service.id,
              name: service.name,
              price: service.price,
              discountPercent: service.discountPercent ?? 0,
              branchId: service.branchId,
              currency: service.currency ?? "KZT",
            }))
          : undefined,
    };
  };

  const handlePayment = async () => {
    if (!agreed) {
      toast.error("Необходимо согласиться с условиями");
      return;
    }
    if (!data.branch) {
      toast.error("Выберите филиал");
      return;
    }

    setProcessing(true);
    setPaymentError(null);

    try {
      const payload = buildOrderPayload();

      if (!payload.client.email) {
        toast.error("Для онлайн-оплаты укажите email адрес получателя на предыдущем шаге.");
        return;
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message =
          errorData?.message ??
          "Не удалось создать заказ для оплаты. Проверьте введённые данные и повторите попытку.";
        setPaymentError(message);
        toast.error(message);
        return;
      }

      const dataResponse: {
        paymentPageUrl?: string;
      } = await response.json();

      if (!dataResponse.paymentPageUrl) {
        const message = "Ссылка на оплату не получена. Повторите попытку позже.";
        setPaymentError(message);
        toast.error(message);
        return;
      }

      toast.success("Переходим на защищённую платёжную страницу OneVision");
      window.location.href = dataResponse.paymentPageUrl;
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "Не удалось запустить оплату. Попробуйте снова.";
      setPaymentError(message);
      toast.error(message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl shadow-spa p-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Подтверждение заказа
            </h2>

            {/* Contact Summary */}
            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="rounded-2xl border border-border bg-muted/15 p-4 space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Отправитель</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Имя:</span>
                    <span className="font-semibold">{data.senderName || "—"}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Телефон:</span>
                    <span className="font-semibold truncate">{data.phone || "—"}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-semibold truncate">{data.email || "—"}</span>
                  </div>
                  {data.deliveryMethod === "download" && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Формат:</span>
                      <span className="font-semibold text-right max-w-[60%]">
                        Скачать файл
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted/15 p-4 space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Получатель</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Имя:</span>
                    <span className="font-semibold">{data.recipientName || "—"}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Поздравление:</span>
                    <span className="font-semibold text-right line-clamp-2 max-w-[70%]">{data.message || "—"}</span>
                  </div>
                  {data.deliveryMethod !== "download" && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Доставка:</span>
                      <span className="font-semibold">
                        {data.deliveryMethod === "email" && "Email"}
                        {data.deliveryMethod === "whatsapp" && "WhatsApp"}
                      </span>
                    </div>
                  )}
                  {data.deliveryMethod === "whatsapp" && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">WhatsApp:</span>
                      <span className="font-semibold truncate">
                        {data.deliveryContact || data.phone || "—"}
                      </span>
                    </div>
                  )}
                  {data.deliveryMethod === "email" && (
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-semibold truncate">
                        {data.deliveryContact || data.email || "—"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Номинал:</span>
                <span className="font-semibold">{formatCurrency(orderTotal)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Филиал:</span>
                <span className="font-semibold">{branchLabel} - {branchAddress}</span>
              </div>
            </div>

            {hasServices && (
              <div className="mb-8 rounded-2xl border border-border bg-muted/20 p-4 space-y-3">
                <p className="font-semibold text-foreground">Выбранные услуги</p>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {data.selectedServices.map((service) => {
                    const discounted = getDiscountedPrice(service.price, service.discountPercent);
                    return (
                      <div key={service.id} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium leading-tight">{service.name}</p>
                          {service.discountPercent ? (
                            <p className="text-xs text-muted-foreground">
                              Скидка {service.discountPercent}% учтена
                            </p>
                          ) : null}
                        </div>
                        <div className="text-right">
                          {service.discountPercent ? (
                            <>
                              <span className="text-xs text-muted-foreground line-through block">
                                {formatCurrency(service.price)}
                              </span>
                              <span className="font-semibold">{formatCurrency(discounted)}</span>
                            </>
                          ) : (
                            <span className="font-semibold">{formatCurrency(service.price)}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center py-6 border-t-2 border-primary/20">
              <span className="text-xl font-semibold">Итого к оплате:</span>
              <span className="text-3xl font-bold text-primary">
                {formatCurrency(orderTotal)}
              </span>
            </div>

            {paymentError && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 text-rose-900 p-4 text-sm">
                {paymentError}
              </div>
            )}

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
              После подтверждения вы будете перенаправлены на защищённую платёжную страницу OneVision для выбранного
              филиала. Ссылка действительна ограниченное время, поэтому держите данные карты под рукой.
            </div>

            {/* Agreement */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="agreement"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="agreement" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Я согласен с{" "}
                <a href="/offer-certificate" className="text-primary hover:underline">
                  офертой
                </a>
                ,{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>{" "}
                и{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  обработкой персональных данных
                </a>
              </Label>
            </div>

            {/* Payment Button */}
            <Button
              size="lg"
              onClick={handlePayment}
              disabled={!agreed || processing}
              className="w-full h-14 text-lg rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                  Обработка платежа...
                </>
              ) : (
              <>
                <Check className="w-5 h-5 mr-2" />
                Оплатить через OneVision
              </>
            )}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Безопасная оплата</span>
            </div>
          </div>

          {/* Back Button */}
          <Button
            size="lg"
            variant="outline"
            onClick={onPrev}
            className="w-full px-8 h-14 text-base rounded-xl"
          >
            Назад к выбору доставки
          </Button>
        </div>

        {/* Certificate Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-card rounded-2xl shadow-spa p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Финальный предпросмотр
            </h3>
            <CertificatePreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
