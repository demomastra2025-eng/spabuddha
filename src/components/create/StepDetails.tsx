import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CertificateData } from "@/pages/Create";
import { CalendarIcon, User, Heart, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface StepDetailsProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepDetails = ({ data, updateData, onNext, onPrev }: StepDetailsProps) => {
  const handleNext = () => {
    if (!data.recipientName || !data.email) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }
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
              От кого
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

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Персональное поздравление</Label>
          <Textarea
            id="message"
            placeholder="Напишите тёплые слова для получателя..."
            value={data.message}
            onChange={(e) => updateData({ message: e.target.value })}
            className="min-h-[120px] resize-none"
            maxLength={300}
          />
          <p className="text-sm text-muted-foreground text-right">
            {data.message.length}/300
          </p>
        </div>

        {/* Valid Until */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            Срок действия
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !data.validUntil && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {data.validUntil ? (
                  format(data.validUntil, "d MMMM yyyy", { locale: ru })
                ) : (
                  <span>Выберите дату (по умолчанию 6 месяцев)</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={data.validUntil}
                onSelect={(date) => updateData({ validUntil: date })}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Телефон
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={data.phone}
              onChange={(e) => updateData({ phone: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className="h-12"
              required
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
