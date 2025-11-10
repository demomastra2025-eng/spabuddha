import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CertificateData } from "@/types/certificates";
import { formatCurrency } from "@/lib/currency";
import { calculateServicesTotal, getDiscountedPrice } from "@/lib/services";
import { MapPin, Gift } from "lucide-react";
import { TbMassage } from "react-icons/tb";
import { useCompanies } from "@/hooks/useCompanies";
import { useSpaProcedures, SpaProcedureOption } from "@/hooks/useSpaProcedures";
import { toast } from "sonner";

interface StepBranchProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
}

const presetAmounts = [30000, 50000, 70000, 100000];

export const StepBranch = ({ data, updateData, onNext }: StepBranchProps) => {
  const { companies, loading, error } = useCompanies();
  const selectedCompany = companies.find((company) => company.id === data.branch);
  const branchFilter = data.branch === "all" ? undefined : data.branch || undefined;
  const { services, loading: servicesLoading, error: servicesError } = useSpaProcedures({
    companyId: branchFilter,
    fallbackToDefaults: true,
    fallbackBranchId: data.branch || undefined,
    enabled: Boolean(data.branch),
  });
  const selectedServiceIds = new Set(data.selectedServices.map((service) => service.id));
  const servicesTotal = calculateServicesTotal(data.selectedServices);

  const handleNext = () => {
    if (!data.branch) {
      toast.error("Пожалуйста, выберите филиал");
      return;
    }
    if (data.type === "procedure" && data.selectedServices.length === 0) {
      toast.error("Выберите хотя бы одну услугу для процедурного сертификата");
      return;
    }
    if (data.type === "gift" && (!data.amount || data.amount < 10000)) {
      toast.error("Минимальный номинал сертификата 10 000 ₸");
      return;
    }
    onNext();
  };

  const handleBranchChange = (value: string) => {
    const nextServices =
      value === "all"
        ? data.selectedServices
        : data.selectedServices.filter((service) => service.branchId === value);
    updateData({
      branch: value,
      selectedServices: nextServices,
      amount: data.type === "procedure" ? calculateServicesTotal(nextServices) : data.amount,
    });
  };

  const handleTypeChange = (value: "gift" | "procedure") => {
    const nextData: Partial<CertificateData> = { type: value };
    if (value === "gift") {
      nextData.amount = data.amount || 50000;
      nextData.selectedServices = [];
    } else {
      nextData.amount = calculateServicesTotal(data.selectedServices);
    }
    updateData(nextData);
  };

  const handleToggleService = (service: SpaProcedureOption | undefined) => {
    if (!service) {
      return;
    }
    const isSelected = selectedServiceIds.has(service.id);
    let nextServices = data.selectedServices;

    if (isSelected) {
      nextServices = data.selectedServices.filter((item) => item.id !== service.id);
    } else {
      nextServices = [
        ...data.selectedServices,
        {
          id: service.id,
          name: service.name,
          price: service.price,
          discountPercent: service.discountPercent ?? 0,
          branchId: service.companyId ?? data.branch ?? "all",
          currency: service.currency ?? "KZT",
          durationMinutes: service.durationMinutes ?? null,
        },
      ];
    }

    updateData({
      selectedServices: nextServices,
      amount: calculateServicesTotal(nextServices),
    });
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
          <Select
            value={data.branch}
            onValueChange={handleBranchChange}
            disabled={loading || companies.length === 0}
          >
            <SelectTrigger className="min-h-[3.5rem] py-3 text-base text-left">
              <SelectValue placeholder={loading ? "Загружаем филиалы..." : "Выберите филиал"} asChild>
                <span className="truncate">
                  {selectedCompany
                    ? `${selectedCompany.label} — ${selectedCompany.address}`
                    : loading
                      ? "Загружаем филиалы..."
                      : "Выберите филиал"}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {companies.map((branch) => (
                <SelectItem key={branch.id} value={branch.id} className="py-3">
                  <span className="font-medium">
                    {branch.label} — <span className="text-muted-foreground font-normal">{branch.address}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <p className="text-sm text-amber-600">{error}</p>}
        </div>

        {/* Certificate Type */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <Gift className="w-5 h-5 text-primary" />
            Тип сертификата
          </Label>
          <RadioGroup
            value={data.type}
            onValueChange={handleTypeChange}
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
                <TbMassage className="w-8 h-8 mb-3 text-primary" />
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
          {data.type === "gift" ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
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
                  onChange={(e) => updateData({ amount: Number(e.target.value) || 0 })}
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
            </>
          ) : (
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-foreground">Сумма по выбранным услугам</p>
                  <p className="text-sm text-muted-foreground">
                    {data.selectedServices.length
                      ? `${data.selectedServices.length} усл. · скидки учтены`
                      : "Выберите услуги, чтобы рассчитать номинал"}
                  </p>
                </div>
                <span className="text-3xl font-bold text-primary">
                  {formatCurrency(servicesTotal)}
                </span>
              </div>
            </div>
          )}
        </div>

        {data.type === "procedure" && (
          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center gap-2">
              <TbMassage className="w-5 h-5 text-primary" />
              Услуги выбранного филиала
            </Label>
            {!data.branch && (
              <p className="text-sm text-muted-foreground">
                Сначала выберите филиал, чтобы увидеть доступные процедуры.
              </p>
            )}
            {data.branch && (
              <div className="space-y-3">
                {servicesLoading &&
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={`service-skeleton-${index}`} className="h-28 rounded-2xl bg-muted/40 animate-pulse" />
                  ))}

                {!servicesLoading && services.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-muted p-6 text-sm text-muted-foreground">
                    Для этого филиала пока нет услуг. Менеджер скоро добавит их в список.
                  </div>
                )}

                {!servicesLoading &&
                  services.map((service) => {
                    const isSelected = selectedServiceIds.has(service.id);
                    const finalPrice = getDiscountedPrice(service.price, service.discountPercent);

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleToggleService(service)}
                        className={`flex items-center gap-4 rounded-2xl border-2 px-4 py-3 text-left transition-all ${
                          isSelected ? "border-primary bg-primary/5 shadow-inner" : "border-muted hover:border-primary/40"
                        }`}
                        title={service.description ?? service.name}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => handleToggleService(service)}
                          onClick={(event) => event.stopPropagation()}
                          className="mt-1"
                          aria-label={`Выбрать услугу ${service.name}`}
                        />
                        <div className="flex-1 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-4">
                          <div className="flex items-center gap-2 min-w-0">
                            <p className="font-semibold text-foreground truncate">{service.name}</p>
                            {service.discountPercent ? (
                              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                                -{service.discountPercent}%
                              </Badge>
                            ) : null}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 sm:justify-end sm:flex-1">
                            {service.durationMinutes ? (
                              <span className="text-muted-foreground whitespace-nowrap">
                                {service.durationMinutes} мин.
                              </span>
                            ) : null}
                            {service.discountPercent ? (
                              <>
                                <span className="text-muted-foreground line-through whitespace-nowrap">
                                  {formatCurrency(service.price)}
                                </span>
                                <span className="text-base font-semibold text-foreground whitespace-nowrap">
                                  {formatCurrency(finalPrice)}
                                </span>
                              </>
                            ) : (
                              <span className="text-base font-semibold text-foreground whitespace-nowrap">
                                {formatCurrency(service.price)}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}

                {servicesError && (
                  <p className="text-sm text-amber-600">
                    {servicesError}. Подставили базовый список.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

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
