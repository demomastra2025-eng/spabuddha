import { forwardRef } from "react";
import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";
import { Calendar, MapPin } from "lucide-react";
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
  const textColor = data.templateTextColor ?? "#ffffff";
  const fontFamily = data.templateFontFamily ?? "Playfair Display, serif";
  let backgroundImage = data.templateBackgroundUrl ?? null;
  if (backgroundImage && backgroundImage.includes("dummyimage.com") && !backgroundImage.includes("&text=")) {
    backgroundImage = `${backgroundImage}&text=+`;
  }
  const { companies } = useCompanies();
  const selectedBranch = companies.find((branch) => branch.id === data.branch);
  const servicesTotal = calculateServicesTotal(data.selectedServices);
  const amountToShow = data.type === "procedure" && servicesTotal > 0 ? servicesTotal : data.amount;
  const hasServices = data.selectedServices.length > 0;
  const certificateNumber = data.code?.trim() ? data.code.trim() : "XXXX-XXXX";

  const cardBaseClasses =
    "w-full max-w-[640px] rounded-[28px] shadow-2xl p-4 sm:p-6 flex flex-col relative overflow-hidden transition-all duration-500 mx-auto";
  const heightClasses = hasServices ? "min-h-[360px] sm:min-h-[420px]" : "min-h-[360px] sm:min-h-[360px]";

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
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
          <img src="/logo.png" alt="Buddha Spa" className="h-6 w-auto" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.35em] opacity-80 text-right whitespace-nowrap flex-1 text-right">
          № {certificateNumber}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col gap-4 py-2">
        {/* Title */}
        <div className="text-center space-y-1">
          <p className="text-[14px] uppercase tracking-[0.65em] opacity-80">Сертификат</p>
        </div>

        {/* Amount & Services */}
        <div className="rounded-2xl bg-black/30 backdrop-blur-lg px-5 py-5 border border-white/10 space-y-5">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 text-center md:text-left space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] opacity-70">Для</p>
              <p className="text-4xl font-black tracking-wide">
                {data.recipientName?.trim() || "Получатель"}
              </p>
            </div>
            <div className="flex-1 text-center md:text-right space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] opacity-70">Сумма</p>
              <p className="text-4xl font-black tracking-wide">{formatCurrency(amountToShow)}</p>
            </div>
          </div>
          {hasServices && (
            <div>
              <p className="text-xs uppercase tracking-[0.35em] opacity-70 mb-2">Услуги</p>
              <div className="space-y-1 text-sm leading-snug">
                {data.selectedServices.map((service) => (
                  <p key={service.id}>{service.name}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between text-xs opacity-85 pt-4">
          {selectedBranch && (
            <div className="flex items-center gap-2 text-left">
              <MapPin className="w-3 h-3" />
              <span>{selectedBranch.label} — {selectedBranch.address}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>до {format(validUntilDate, "d MMM yyyy", { locale: ru })}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

CertificatePreview.displayName = "CertificatePreview";
