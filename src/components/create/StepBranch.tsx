import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CertificateData } from "@/pages/Create";
import { formatCurrency } from "@/lib/currency";
import { MapPin, Gift, Sparkles } from "lucide-react";
import { branches } from "@/data/branches";
import { toast } from "sonner";

interface StepBranchProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
}

const presetAmounts = [30000, 50000, 70000, 100000];

export const StepBranch = ({ data, updateData, onNext }: StepBranchProps) => {
  const handleNext = () => {
    if (!data.branch) {
      toast.error("Пожалуйста, выберите филиал");
      return;
    }
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Выбор филиала и типа
          </h2>
          <p className="text-muted-foreground">
            Определите, где будет действовать сертификат и его номинал
          </p>
        </div>

        {/* Branch Selection */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Филиал салона
          </Label>
          <Select value={data.branch} onValueChange={(value) => updateData({ branch: value })}>
            <SelectTrigger className="h-14 text-base">
              <SelectValue placeholder="Выберите филиал" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((branch) => (
                <SelectItem key={branch.id} value={branch.id} className="py-3">
                  <div>
                    <div className="font-medium">{branch.label}</div>
                    <div className="text-sm text-muted-foreground">{branch.address}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Certificate Type */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <Gift className="w-5 h-5 text-primary" />
            Тип сертификата
          </Label>
          <RadioGroup
            value={data.type}
            onValueChange={(value: "gift" | "procedure") => updateData({ type: value })}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="gift" id="gift" className="peer sr-only" />
              <Label
                htmlFor="gift"
                className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all cursor-pointer"
              >
                <Gift className="w-8 h-8 mb-3 text-primary" />
                <span className="text-base font-semibold">Подарочный</span>
                <span className="text-sm text-muted-foreground text-center mt-2">
                  На любую сумму
                </span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="procedure" id="procedure" className="peer sr-only" />
              <Label
                htmlFor="procedure"
                className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-card p-6 hover:bg-accent/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all cursor-pointer"
              >
                <Sparkles className="w-8 h-8 mb-3 text-primary" />
                <span className="text-base font-semibold">Процедурный</span>
                <span className="text-sm text-muted-foreground text-center mt-2">
                  На конкретную услугу
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Amount */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Номинал сертификата</Label>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={data.amount === amount ? "default" : "outline"}
                className="h-14 text-base"
                onClick={() => updateData({ amount })}
              >
                {formatCurrency(amount)}
              </Button>
            ))}
          </div>
          <div className="relative">
            <Input
              type="number"
              placeholder="Или введите свою сумму"
              value={data.amount}
              onChange={(e) => updateData({ amount: parseInt(e.target.value) || 0 })}
              className="h-14 text-base pr-12"
              min={10000}
              max={500000}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₸
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Минимальная сумма: 10 000 ₸, максимальная: 500 000 ₸
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-end pt-4">
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
