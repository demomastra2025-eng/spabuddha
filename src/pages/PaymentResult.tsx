import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock4, XCircle } from "lucide-react";

type ResultView = {
  title: string;
  description: string;
  variant: "success" | "error" | "processing";
};

const getView = (status: string): ResultView => {
  switch (status) {
    case "success":
      return {
        title: "Оплата подтверждена",
        description: "Мы отправили сертификат на выбранный канал доставки и уведомили администратора филиала.",
        variant: "success",
      };
    case "failed":
      return {
        title: "Оплата не завершена",
        description: "Платёж был отменён или отклонён. Вы можете вернуться и попробовать снова.",
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

const PaymentResult = () => {
  const [params] = useSearchParams();
  const status = (params.get("status") ?? "processing").toLowerCase();
  const orderNumber = params.get("orderNumber");
  const orderId = params.get("orderId");

  const view = useMemo(() => getView(status), [status]);

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
