import type { KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CertificateData } from "@/types/certificates";
import { formatCurrency } from "@/lib/currency";
import { MapPin, Gift } from "lucide-react";
import { useCompanies, type CompanyOption } from "@/hooks/useCompanies";
import { useAltegioGoods } from "@/hooks/useAltegioGoods";
import { toast } from "sonner";

interface StepBranchProps {
  data: CertificateData;
  updateData: (data: Partial<CertificateData>) => void;
  onNext: () => void;
  companiesOverride?: CompanyOption[];
}

export const StepBranch = ({ data, updateData, onNext, companiesOverride }: StepBranchProps) => {
  const { companies: fetchedCompanies, loading: fetchedLoading, error: fetchedError } = useCompanies();
  const companies = companiesOverride ?? fetchedCompanies;
  const loading = companiesOverride ? false : fetchedLoading;
  const error = companiesOverride ? null : fetchedError;
  const selectedCompany = companies.find((company) => company.id === data.branch);
  const branchFilter = data.branch === "all" ? undefined : data.branch || undefined;
  const {
    goods,
    loading: goodsLoading,
    error: goodsError,
    page: goodsPage,
    pageSize: goodsPageSize,
    nextPage: nextGoodsPage,
    prevPage: prevGoodsPage,
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
                      className={`rounded-2xl px-4 py-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                        isSelected
                          ? "border-2 border-secondary bg-secondary/10 shadow-glow"
                          : "border border-border bg-card hover:border-secondary/50 hover:shadow-spa"
                      }`}
                      title={good.title}
                    >
                      <div className="flex items-start gap-3 sm:items-center">
                        <div
                          className={`p-3 rounded-xl ${
                            isSelected ? "bg-secondary text-secondary-foreground" : "bg-muted/20 text-muted-foreground"
                          }`}
                        >
                          <Gift className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 flex-1">
                          <p className="font-semibold text-foreground line-clamp-2">{good.title}</p>
                          <span className="sm:ml-auto text-lg font-bold text-secondary whitespace-nowrap">
                            {formatCurrency(good.cost)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {goodsError && (
                <p className="text-sm text-amber-600">
                  {goodsError}
                </p>
              )}

              {data.branch && (
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <div className="text-sm text-muted-foreground">
                    Страница {goodsPage}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevGoodsPage}
                      disabled={goodsLoading || goodsPage <= 1}
                    >
                      Назад
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextGoodsPage}
                      disabled={goodsLoading || (!goodsLoading && goods.length < goodsPageSize)}
                    >
                      Далее
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-end pt-4">
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
