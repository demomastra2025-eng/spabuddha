import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock4, XCircle } from "lucide-react";

type ResultView = {
  title: string;
  description: string;
  variant: "success" | "error" | "processing";
};

const successDescriptions: Record<string, string> = {
  download: "Сертификат готов к скачиванию — ссылка появится ниже, а на почту мы тоже отправили подтверждение.",
  email: "Сертификат отправлен на указанный email — проверьте входящие и спам.",
  whatsapp: "Сертификат доставлен в WhatsApp, проверьте чат указанного номера.",
};

const getView = (status: string, deliveryMethod: string): ResultView => {
  switch (status) {
    case "success":
      return {
        title: "Оплата подтверждена",
        description:
          successDescriptions[deliveryMethod] ??
          "Сертификат доставлен по выбранному каналу, отправим также уведомление администратору.",
        variant: "success",
      };
    case "failed":
      return {
        title: "Оплата не завершена",
        description: "Платёж был отменён или отклонён. Вернитесь и попробуйте снова или свяжитесь с банком.",
        variant: "error",
      };
    default:
      return {
        title: "Платёж обрабатывается",
        description: "Мы получили ответ от банка и завершаем оформление сертификата. Это займёт не более минуты.",
        variant: "processing",
      };
  }
};

const iconByVariant = {
  success: <CheckCircle2 className="w-16 h-16 text-emerald-500" />,
  error: <XCircle className="w-16 h-16 text-rose-500" />,
  processing: <Clock4 className="w-16 h-16 text-amber-500 animate-pulse" />,
};

const accentByVariant = {
  success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  error: "bg-rose-50 border-rose-200 text-rose-900",
  processing: "bg-amber-50 border-amber-200 text-amber-900",
};

function getFileNameFromDisposition(disposition?: string | null) {
  if (!disposition) {
    return null;
  }

  const utfMatch = disposition.match(/filename\*=UTF-8''([^;]+)/i);
  if (utfMatch?.[1]) {
    try {
      return decodeURIComponent(utfMatch[1]);
    } catch {
      return utfMatch[1];
    }
  }

  const asciiMatch = disposition.match(/filename="?([^";]+)"?/i);
  return asciiMatch?.[1] ?? null;
}

const PaymentResult = () => {
  const [params] = useSearchParams();
  const status = (params.get("status") ?? "processing").toLowerCase();
  const orderNumber = params.get("orderNumber");
  const orderId = params.get("orderId");
  const certificateId = params.get("certificateId");
  const deliveryMethod = (params.get("deliveryMethod") ?? "").toLowerCase();

  const [autoTriggered, setAutoTriggered] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const view = useMemo(() => getView(status, deliveryMethod), [status, deliveryMethod]);
  const shouldOfferDownload = view.variant === "success" && deliveryMethod === "download" && Boolean(certificateId);

  const triggerDownload = useCallback(async () => {
    if (!certificateId) {
      setDownloadError("Не удалось определить идентификатор сертификата.");
      return;
    }

    try {
      setDownloading(true);
      setDownloadError(null);
      const response = await fetch(`/api/certificates/${certificateId}/download`);
      if (!response.ok) {
        const fallbackMessage = "Не удалось скачать сертификат. Попробуйте ещё раз.";
        let message = fallbackMessage;
        try {
          const body = await response.json();
          if (body?.message) {
            message = body.message;
          }
        } catch {
          message = await response.text().catch(() => fallbackMessage);
        }
        throw new Error(message || fallbackMessage);
      }
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const fileName =
        getFileNameFromDisposition(response.headers.get("Content-Disposition")) ??
        `certificate-${certificateId}.pdf`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("[payment/result] certificate download failed", error);
      const message = error instanceof Error ? error.message : "Не удалось скачать сертификат. Попробуйте ещё раз.";
      setDownloadError(message);
    } finally {
      setDownloading(false);
    }
  }, [certificateId]);

  useEffect(() => {
    if (shouldOfferDownload && !autoTriggered) {
      setAutoTriggered(true);
      void triggerDownload();
    }
  }, [autoTriggered, shouldOfferDownload, triggerDownload]);

  return (
    <div className="bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-3xl border p-10 text-center shadow-spa ${accentByVariant[view.variant]}`}>
          <div className="flex justify-center mb-6">{iconByVariant[view.variant]}</div>
          <h1 className="text-3xl font-serif font-semibold mb-3">{view.title}</h1>
          <p className="text-base">{view.description}</p>

          {(orderNumber || orderId) && (
            <div className="mt-6 text-sm rounded-2xl border bg-white/70 text-foreground px-5 py-3 text-left">
              {orderNumber && (
                <p>
                  <span className="text-muted-foreground">Номер заказа:</span>{" "}
                  <span className="font-semibold">{orderNumber}</span>
                </p>
              )}
              {orderId && (
                <p>
                  <span className="text-muted-foreground">ID заказа:</span>{" "}
                  <span className="font-semibold break-all">{orderId}</span>
                </p>
              )}
            </div>
          )}

          <div className="mt-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Если письмо или сообщение не пришло в течение 5 минут, проверьте папку «Спам» или свяжитесь с администратором Buddha Spa. 
              Все детали платежа сохранены в системе для вашего филиала.
            </p>
          </div>

          {shouldOfferDownload && (
            <div className="mt-8 rounded-2xl border border-primary/30 bg-white/80 text-left p-6 space-y-3">
              <div>
                <p className="text-lg font-semibold text-foreground">Сертификат готов к скачиванию</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Мы уже запустили загрузку файла. Используйте кнопку ниже, если загрузка не началась автоматически.
                </p>
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                disabled={downloading}
                onClick={triggerDownload}
              >
                {downloading ? "Скачиваем..." : "Скачать сертификат"}
              </Button>
              {downloadError && <p className="text-sm text-rose-600">{downloadError}</p>}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="default" className="px-8">
              <Link to="/create">Оформить ещё один сертификат</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
