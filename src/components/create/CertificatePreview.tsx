import { forwardRef } from "react";
import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";
import { CERTIFICATE_DISPLAY_FONT } from "@/shared/certificate";
import { addMonths, format } from "date-fns";
import { ru } from "date-fns/locale";
import { formatCurrency } from "@/lib/currency";
import { useCompanies } from "@/hooks/useCompanies";
import { calculateServicesTotal } from "@/lib/services";

interface CertificatePreviewProps {
  data: CertificateData;
}

export const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(({ data }, ref) => {
  const fallbackValidUntil = addMonths(new Date(), DEFAULT_VALIDITY_MONTHS);
  const validUntilDate = data.validUntil || fallbackValidUntil;
  const formattedValidUntil = format(validUntilDate, "d.MM.yy", { locale: ru });
  const textColor = data.templateTextColor ?? "#ffffff";
  const fontFamily = CERTIFICATE_DISPLAY_FONT;
  let backgroundImage = data.templateBackgroundUrl ?? null;
  if (backgroundImage && backgroundImage.includes("dummyimage.com") && !backgroundImage.includes("&text=")) {
    backgroundImage = `${backgroundImage}&text=+`;
  }
  const { companies } = useCompanies();
  const selectedBranch = companies.find((branch) => branch.id === data.branch);
  const branchAddress = selectedBranch?.address ?? "—";
  const formattedBranchAddress = branchAddress.includes(",") ? branchAddress.replace(",", ",\n") : branchAddress;
  const servicesTotal = calculateServicesTotal(data.selectedServices);
  const amountToShow = data.type === "procedure" && servicesTotal > 0 ? servicesTotal : data.amount;
  const certificateNumber = data.code?.trim() ? data.code.trim() : "XXXX-XXXX";

  const cardBaseClasses =
    "w-full max-w-[640px] rounded-[28px] shadow-2xl p-4 sm:p-4 py-6 flex flex-col relative overflow-hidden transition-all duration-500 mx-auto";
  const heightClasses = "min-h-[360px] sm:min-h-[420px]";

  return (
    <div
      ref={ref}
      className={`${cardBaseClasses} ${heightClasses}`}
      style={{
        fontFamily,
        color: textColor,
        backgroundColor: backgroundImage ? "transparent" : "#1f1f1f",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/10" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 py-4 sm:py-4 px-2 border-b border-white/10">
        <p className="text-sm sm:text-base font-semibold leading-snug max-w-[65%] whitespace-pre-line">
          {formattedBranchAddress}
        </p>
        <div className="text-sm sm:text-base font-semibold leading-snug max-w-[100%] whitespace-pre-line text-right">
          <p>№ {certificateNumber}</p>
          <p className="text-sm sm:text-base font-semibold leading-snug max-w-[100%] whitespace-pre-line text-right">До {formattedValidUntil}</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col py-1">
        <div className="mt-auto flex flex-row items-end gap-4 sm:flex-row">
          <div className="flex-1  px-3 py-3 text-left">
            <p className="text-2xl sm:text-3xl font-black tracking-tight">{data.recipientName?.trim() || "Получатель"}</p>
          </div>

          <div className="flex-1  px-3 py-3 text-right">
            <p className="text-3xl sm:text-4xl font-black tracking-tight">{formatCurrency(amountToShow)}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

CertificatePreview.displayName = "CertificatePreview";
