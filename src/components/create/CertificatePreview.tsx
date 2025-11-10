import { CertificateData, DEFAULT_VALIDITY_MONTHS } from "@/types/certificates";
import { Calendar, MapPin } from "lucide-react";
import { addMonths, format } from "date-fns";
import { ru } from "date-fns/locale";
import { formatCurrency } from "@/lib/currency";
import { useCompanies } from "@/hooks/useCompanies";
import { calculateServicesTotal, getDiscountedPrice } from "@/lib/services";

interface CertificatePreviewProps {
  data: CertificateData;
}

export const CertificatePreview = ({ data }: CertificatePreviewProps) => {
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
  const servicesToDisplay = data.selectedServices.slice(0, 2);
  const extraServices = Math.max(0, data.selectedServices.length - servicesToDisplay.length);

  const formatExtraLabel = (count: number) => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return "процедура";
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "процедуры";
    return "процедур";
  };

  return (
    <div
      className="w-full aspect-[86/60] rounded-[28px] shadow-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-500"
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
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
          <img src="/logo.png" alt="Buddha Spa" className="h-6 w-auto" />
        </div>
        <div className="text-xl font-semibold uppercase tracking-[0.6em] px-2 py-1 text-left flex-1 ">
          Сертификат
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 py-2">
        {/* Recipient */}
        {data.recipientName && (
          <div className="text-center space-y-1">
            <p className="text-[11px] text-bold opacity-70 tracking-[0.4em] uppercase">для</p>
            <p className="text-3xl font-bold tracking-wide">{data.recipientName}</p>
          </div>
        )}

        {/* Amount & Services */}
        <div className="rounded-2xl bg-black/30 backdrop-blur-lg px-5 py-4 border border-white/10 space-y-3">
          <div className={`flex ${servicesToDisplay.length > 0 ? "flex-col md:flex-row gap-4" : "flex-col text-center"} `}>
            {servicesToDisplay.length > 0 && (
              <div className="flex-1 text-[10px] uppercase tracking-[0.3em] space-y-1 text-left">
                <p className="text-xs text-semibold uppercase tracking-[0.35em] opacity-70 mb-2">Услуги</p>
                {servicesToDisplay.map((service) => (
                  <p key={service.id} className="truncate">
                    {service.name}
                  </p>
                ))}
                {extraServices > 0 && (
                  <p>+ ещё {extraServices} {formatExtraLabel(extraServices)}</p>
                )}
              </div>
            )}
            <div className={`flex-1 ${servicesToDisplay.length > 0 ? "text-right" : "text-center"} space-y-2`}>
              <p className="text-xs uppercase tracking-[0.35em] opacity-70 mb-1">Номинал</p>
              <p className="text-4xl font-black tracking-wide">{formatCurrency(amountToShow)}</p>
            </div>
          </div>
        </div>

        {/* Message & Sender */}
        {data.message && (
          <p className="text-center px-4 text-sm italic opacity-90 leading-relaxed">
            “{data.message}” {data.senderName && <span className="not-italic font-medium opacity-80">— {data.senderName}</span>}
          </p>
        )}
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs opacity-85">
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
  );
};
