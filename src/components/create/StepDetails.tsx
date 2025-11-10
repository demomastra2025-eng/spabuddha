import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";
import { CalendarIcon, User, Heart, Phone, Mail } from "lucide-react";
import { addMonths, format } from "date-fns";
import { ru } from "date-fns/locale";
import { toast } from "sonner";

interface StepDetailsProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const getRecommendedValidityMonths = (date: Date) => {
  const month = date.getMonth(); // 0-based
  const day = date.getDate();
  const isInternationalWomensDay = month === 2 && day === 8;
  const daysUntilNewYear = month === 11 ? 31 - day : Number.POSITIVE_INFINITY;
  const isPreNewYear = month === 11 && daysUntilNewYear < 7;
  return isInternationalWomensDay || isPreNewYear ? 9 : DEFAULT_VALIDITY_MONTHS;
};

export const StepDetails = ({ data, updateData, onNext, onPrev }: StepDetailsProps) => {
  const purchaseDate = data.purchaseDate ?? new Date();
  const recommendedMonths = getRecommendedValidityMonths(purchaseDate);
  const recommendedUntil = addMonths(purchaseDate, recommendedMonths);
  const adminUntil = data.validUntil ?? recommendedUntil;
  const isExtended = recommendedMonths > DEFAULT_VALIDITY_MONTHS;

  const handleNext = () => {
    if (!data.recipientName || !data.phone) {
      toast.error("Укажите получателя и телефон для связи");
      return;
    }
    updateData({ validUntil: adminUntil });
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Данные и получатель
          </h2>
          <p className="text-muted-foreground">
            Заполните информацию для персонализации сертификата
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sender Name */}
          <div className="space-y-2">
            <Label htmlFor="senderName" className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Ваше имя
            </Label>
            <Input
              id="senderName"
              placeholder="Ваше имя"
              value={data.senderName}
              onChange={(e) => updateData({ senderName: e.target.value })}
              className="h-12"
            />
          </div>

          {/* Recipient Name */}
          <div className="space-y-2">
            <Label htmlFor="recipientName" className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              Кому <span className="text-destructive">*</span>
            </Label>
            <Input
              id="recipientName"
              placeholder="Имя получателя"
              value={data.recipientName}
              onChange={(e) => updateData({ recipientName: e.target.value })}
              className="h-12"
              required
            />
          </div>
        </div>

        {/* Valid Until */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            Срок действия
          </Label>
          <div className="rounded-xl border border-muted bg-muted/20 px-4 py-3 space-y-2">
            {(() => {
              return (
                <>
                  <p className="font-semibold text-foreground">
                    С {format(purchaseDate, "d MMMM yyyy", { locale: ru })} по{" "}
                    {format(adminUntil, "d MMMM yyyy", { locale: ru })} ·{" "}
                    {isExtended ? "6 месяцев (праздничное продление)" : `${DEFAULT_VALIDITY_MONTHS} месяцев`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Дату при необходимости продлевает администратор или менеджер филиала.
                    {isExtended && " Для покупок 8 марта и за 7 дней до Нового года действуют расширенные сроки."}
                  </p>
                </>
              );
            })()}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Ваш телефон <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={data.phone}
              onChange={(e) => updateData({ phone: e.target.value })}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Ваш Email{" "}
              <span className="text-xs text-muted-foreground">(по желанию)</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className="h-12"
            />
          </div>
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-xl"
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};
