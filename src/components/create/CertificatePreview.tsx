import { CertificateData } from "@/pages/Create";
import { Gift, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface CertificatePreviewProps {
  data: CertificateData;
}

export const CertificatePreview = ({ data }: CertificatePreviewProps) => {
  const validUntilDate = data.validUntil || new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000);

  return (
    <div
      className="w-full aspect-[3/4] rounded-2xl shadow-2xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500"
      style={{
        backgroundColor: data.backgroundColor,
        fontFamily: data.fontFamily,
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10">
        <div className="text-center mb-6">
          <Gift className="w-12 h-12 mx-auto mb-4 opacity-70" />
          <h3 className="text-2xl font-bold opacity-90">SPA Сертификат</h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Recipient */}
        {data.recipientName && (
          <div className="text-center">
            <p className="text-sm opacity-60 mb-1">для</p>
            <p className="text-3xl font-bold">{data.recipientName}</p>
          </div>
        )}

        {/* Amount */}
        <div className="text-center py-6">
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-sm">
            <p className="text-4xl font-bold">
              {data.amount.toLocaleString("ru-RU")} ₽
            </p>
          </div>
        </div>

        {/* Message */}
        {data.message && (
          <div className="text-center px-4">
            <p className="text-sm italic opacity-80 leading-relaxed">
              "{data.message}"
            </p>
          </div>
        )}

        {/* Sender */}
        {data.senderName && (
          <div className="text-center">
            <p className="text-sm opacity-60 mb-1">от</p>
            <p className="text-lg font-semibold">{data.senderName}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-current/20 pt-4">
        <div className="flex items-center justify-center gap-2 text-sm opacity-70">
          <Calendar className="w-4 h-4" />
          <span>Действителен до {format(validUntilDate, "d MMMM yyyy", { locale: ru })}</span>
        </div>
      </div>
    </div>
  );
};
