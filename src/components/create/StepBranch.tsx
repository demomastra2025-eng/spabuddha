import type { KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CertificateData } from "@/types/certificates";
import { formatCurrency } from "@/lib/currency";
import { MapPin } from "lucide-react";
import { useCompanies } from "@/hooks/useCompanies";
import { useAltegioGoods } from "@/hooks/useAltegioGoods";
import { toast } from "sonner";

interface StepBranchProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
}

export const StepBranch = ({ data, updateData, onNext }: StepBranchProps) => {
  const { companies, loading, error } = useCompanies();
  const selectedCompany = companies.find((company) => company.id === data.branch);
  const branchFilter = data.branch === "all" ? undefined : data.branch || undefined;
  const {
    goods,
    loading: goodsLoading,
    error: goodsError,
  } = useAltegioGoods({
    companyId: branchFilter,
    enabled: Boolean(data.branch),
  });

  const handleNext = () => {
    if (!data.branch) {
      toast.error("Пожалуйста, выберите филиал");
      return;
    }
    if (!data.selectedGood) {
      toast.error("Выберите сертификат из списка");
      return;
    }
    onNext();
  };

  const handleBranchChange = (value: string) => {
    updateData({
      branch: value,
      selectedGood: null,
      selectedServices: [],
      amount: 0,
    });
  };

  const handleSelectGood = (goodId: string | number) => {
    const good = goods.find((item) => item.goodId === goodId);
    if (!good) {
      return;
    }
    updateData({
      selectedGood: {
        goodId: good.goodId,
        title: good.title,
        cost: good.cost,
        categoryId: good.categoryId,
        salonId: good.companyId,
      },
      amount: good.cost,
      type: "gift",
    });
  };

  const selectedGoodId = data.selectedGood?.goodId;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-card rounded-2xl shadow-spa p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Выбор филиала и сертификата
          </h2>
          <p className="text-muted-foreground">
            Определите, где будет действовать сертификат, и выберите нужный вариант из Altegio
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

        {/* Certificate Goods */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Выберите сертификат</Label>
          {!data.branch && (
            <p className="text-sm text-muted-foreground">
              Сначала выберите филиал, чтобы загрузить доступные сертификаты.
            </p>
          )}

          {data.branch && (
            <div className="space-y-3">
              {goodsLoading &&
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={`good-skeleton-${index}`} className="h-24 rounded-2xl bg-muted/40 animate-pulse" />
                ))}

              {!goodsLoading && goods.length === 0 && (
                <div className="rounded-2xl border border-dashed border-muted p-6 text-sm text-muted-foreground">
                  Для этого филиала пока нет загруженных сертификатов в Altegio.
                </div>
              )}

              {!goodsLoading &&
                goods.map((good) => {
                  const isSelected = selectedGoodId === good.goodId;

                  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleSelectGood(good.goodId);
                    }
                  };

                  return (
                    <div
                      key={good.goodId}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectGood(good.goodId)}
                      onKeyDown={handleCardKeyDown}
                      className={`rounded-2xl border-2 px-4 py-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isSelected ? "border-primary bg-primary/5 shadow-inner" : "border-muted hover:border-primary/40"
                      }`}
                      title={good.title}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <p className="font-semibold text-foreground line-clamp-2">{good.title}</p>
                        <span className="sm:ml-auto text-lg font-bold text-primary whitespace-nowrap">
                          {formatCurrency(good.cost)}
                        </span>
                      </div>
                    </div>
                  );
                })}

              {goodsError && (
                <p className="text-sm text-amber-600">
                  {goodsError}
                </p>
              )}
            </div>
          )}
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
