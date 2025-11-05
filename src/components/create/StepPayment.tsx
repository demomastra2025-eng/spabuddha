import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CertificateData } from "@/pages/Create";
import { CertificatePreview } from "./CertificatePreview";
import { useState } from "react";
import { Check, Shield } from "lucide-react";
import { toast } from "sonner";

interface StepPaymentProps {
  data: CertificateData;
  onPrev: () => void;
}

export const StepPayment = ({ data, onPrev }: StepPaymentProps) => {
  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!agreed) {
      toast.error("Необходимо согласиться с условиями");
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success("Оплата прошла успешно! Сертификат отправлен.");
      setProcessing(false);
      // Here you would redirect to a success page or download the certificate
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl shadow-spa p-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Подтверждение заказа
            </h2>

            {/* Order Details */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Номинал:</span>
                <span className="font-semibold">{data.amount.toLocaleString("ru-RU")} ₽</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Получатель:</span>
                <span className="font-semibold">{data.recipientName || "—"}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Филиал:</span>
                <span className="font-semibold">{data.branch || "—"}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Доставка:</span>
                <span className="font-semibold">
                  {data.deliveryMethod === "email" && "Email"}
                  {data.deliveryMethod === "whatsapp" && "WhatsApp"}
                  {data.deliveryMethod === "download" && "Скачивание"}
                </span>
              </div>
              {data.deliveryContact && (
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Контакт:</span>
                  <span className="font-semibold">{data.deliveryContact}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-6 border-t-2 border-primary/20">
              <span className="text-xl font-semibold">Итого к оплате:</span>
              <span className="text-3xl font-bold text-primary">
                {data.amount.toLocaleString("ru-RU")} ₽
              </span>
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
                <a href="/terms" className="text-primary hover:underline">
                  офертой
                </a>
                ,{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>{" "}
                и{" "}
                <a href="/personal-data" className="text-primary hover:underline">
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
                  Оплатить и отправить
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

function Label({ children, htmlFor, className }: { children: React.ReactNode; htmlFor?: string; className?: string }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
