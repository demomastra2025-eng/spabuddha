import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency";
import { CalendarDays, Mail, Users, LogOut, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";

const GiftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="8" width="18" height="13" rx="2" ry="2" strokeWidth="1.5" />
    <path d="M12 8v13" strokeWidth="1.5" />
    <path d="M3 12h18" strokeWidth="1.5" />
    <path d="M12 8C9.5 8 8 6.5 8 5s1.5-3 4-3" strokeWidth="1.5" />
    <path d="M12 8c2.5 0 4-1.5 4-3s-1.5-3-4-3" strokeWidth="1.5" />
  </svg>
);

const mockStats = [
  { label: "Сертификатов создано", value: 48, icon: GiftIcon },
  { label: "Активных клиентов", value: 126, icon: Users },
  { label: "Отправлено email", value: 93, icon: Mail },
  { label: "Выручка за неделю", value: formatCurrency(1850000), icon: TrendingUp },
];

const mockDrafts = [
  { id: "draft-1", recipient: "Айгуль", amount: formatCurrency(70000), branch: "Buddha Spa Шымкент, Кунаева 13" },
  { id: "draft-2", recipient: "Ильяс", amount: formatCurrency(50000), branch: "Buddha Spa Тараз, Толе Би 93Б" },
  { id: "draft-3", recipient: "Мария", amount: formatCurrency(100000), branch: "Buddha Spa Астана, Туран 54" },
];

const mockSchedule = [
  { id: 1, title: "Отправка email", time: "10:30", recipient: "Жанель", branch: "Шымкент, Нурсат 173Б" },
  { id: 2, title: "Подготовка печатных сертификатов", time: "12:00", recipient: "Корпоративный заказ", branch: "Все филиалы" },
  { id: 3, title: "WhatsApp рассылка", time: "15:00", recipient: "Айару", branch: "Тараз, Толе Би 93Б" },
];

export const AdminDashboard = () => {
  const { session, logout } = useAuth();

  const managerName = useMemo(() => {
    if (session?.user?.name) {
      return session.user.name;
    }
    return session?.user?.email?.split("@")[0] ?? "менеджер";
  }, [session]);

  const handleSignOut = async () => {
    await logout();
    toast.success("Вы вышли из аккаунта");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="container px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Панель Buddha Spa</h1>
            <p className="text-muted-foreground">
              Добро пожаловать, {managerName}! Управляйте сертификатами и отслеживайте активность.
            </p>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="inline-flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Выйти
          </Button>
        </div>
      </header>

      <main className="container px-4 py-10 space-y-10">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {mockStats.map((stat) => (
            <Card key={stat.label} className="border border-border/60 bg-card shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border border-border/60 bg-card shadow-sm">
            <CardHeader>
              <CardTitle>Последние черновики</CardTitle>
              <CardDescription>Отслеживайте незавершённые сертификаты менеджеров.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockDrafts.map((draft) => (
                <div key={draft.id} className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/30">
                  <div>
                    <div className="font-semibold text-foreground">{draft.recipient}</div>
                    <div className="text-sm text-muted-foreground">{draft.branch}</div>
                  </div>
                  <div className="text-sm font-medium text-primary">{draft.amount}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-card shadow-sm">
            <CardHeader>
              <CardTitle>На сегодня</CardTitle>
              <CardDescription>Запланированные действия по сертификатам.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockSchedule.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-border/60">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      {item.time}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <div className="text-foreground font-medium">{item.recipient}</div>
                  <div className="text-sm text-muted-foreground">{item.branch}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
