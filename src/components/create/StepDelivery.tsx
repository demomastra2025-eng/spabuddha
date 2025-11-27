import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CertificateData, DeliveryMethod } from "@/types/certificates";
import { Mail, Smartphone, Download } from "lucide-react";
import { toast } from "sonner";
import { formatPhoneDisplay, normalizePhoneInput } from "@/lib/phone";

interface StepDeliveryProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepDelivery = ({ data, updateData, onNext, onPrev }: StepDeliveryProps) => {
  const handleDeliveryMethodChange = (value: DeliveryMethod) => {
    if (value === "email") {
      const nextContact = data.deliveryMethod === "email" ? data.deliveryContact : "";
      updateData({ deliveryMethod: value, deliveryContact: nextContact });
      return;
    }

    updateData({ deliveryMethod: value });
  };



  const handleNext = () => {
    if (data.deliveryMethod !== "download" && !data.deliveryContact) {
      toast.error("Пожалуйста, укажите контакт для доставки");
      return;
    }
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Способ доставки
          </h2>
          <p className="text-muted-foreground">
            Выберите, как вы хотите получить или отправить сертификат
          </p>
        </div>

        {/* Delivery Method */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Способ доставки</Label>
          <RadioGroup
            value={data.deliveryMethod}
            onValueChange={handleDeliveryMethodChange}
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <RadioGroupItem value="email" id="email-delivery" className="peer sr-only" />
              <Label
                htmlFor="email-delivery"
                className="flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-secondary/40 hover:shadow-spa peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10 peer-data-[state=checked]:shadow-glow transition-all cursor-pointer"
              >
                <div
                  className="p-3 rounded-xl bg-muted/20 text-muted-foreground peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-secondary-foreground transition-colors flex-shrink-0"
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Email</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Отправим красивый PDF-сертификат на электронную почту получателя
                  </p>
                  {data.deliveryMethod === "email" && (
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={data.deliveryContact}
                      onChange={(e) => updateData({ deliveryContact: e.target.value })}
                      className="h-12"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              </Label>
            </div>

            {/* WhatsApp */}
            <div>
              <RadioGroupItem value="whatsapp" id="whatsapp-delivery" className="peer sr-only" />
              <Label
                htmlFor="whatsapp-delivery"
                className="flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-secondary/40 hover:shadow-spa peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10 peer-data-[state=checked]:shadow-glow transition-all cursor-pointer"
              >
                <div
                  className="p-3 rounded-xl bg-muted/20 text-muted-foreground peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-secondary-foreground transition-colors flex-shrink-0"
                >
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">WhatsApp</div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Отправьте сертификат напрямую в WhatsApp с персональным сообщением
                  </p>
                  {data.deliveryMethod === "whatsapp" && (
                    <Input
                      type="tel"
                      placeholder="+77001234567"
                      value={formatPhoneDisplay(data.deliveryContact)}
                      onChange={(e) => updateData({ deliveryContact: normalizePhoneInput(e.target.value) })}
                      className="h-12"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              </Label>
            </div>

            {/* Download */}
            <div>
              <RadioGroupItem value="download" id="download-delivery" className="peer sr-only" />
              <Label
                htmlFor="download-delivery"
                className="flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-secondary/40 hover:shadow-spa peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/10 peer-data-[state=checked]:shadow-glow transition-all cursor-pointer"
              >
                <div
                  className="p-3 rounded-xl bg-muted/20 text-muted-foreground peer-data-[state=checked]:bg-secondary peer-data-[state=checked]:text-secondary-foreground transition-colors flex-shrink-0"
                >
                  <Download className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg mb-1">Скачать</div>
                  <p className="text-sm text-muted-foreground">
                    Сразу после оплаты скачайте сертификат в формате PDF или PNG. После перехода в платёжный банк вернитесь на эту страницу, чтобы забрать файл.
                  </p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Info Box */}
        <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/30">
          <p className="text-sm text-foreground/80 leading-relaxed">
            <strong>Совет:</strong>{" "}
            {data.deliveryMethod === "download"
              ? "После оплаты система вернёт вас на страницу подтверждения — именно там появится кнопка для скачивания файла. Не закрывайте вкладку после оплаты."
              : "Если вы выбираете email или WhatsApp, сертификат будет отправлен сразу после оплаты. При выборе \"Скачать\" вы сможете самостоятельно распечатать или переслать сертификат получателю."}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <Button
            size="lg"
            variant="outline"
            onClick={onPrev}
            className="px-8 h-14 text-base rounded-xl"
          >
            Назад
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base rounded-xl"
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};
