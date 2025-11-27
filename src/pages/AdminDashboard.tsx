import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, Gift, Users, TrendingUp, Mail } from "lucide-react";
import { toast } from "sonner";
import { useCompanies } from "@/hooks/useCompanies";
import { useTemplates } from "@/hooks/useTemplates";
import { formatCurrency } from "@/lib/currency";
import { UtmManagement } from "@/components/admin/UtmManagement";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { OrdersTable, DashboardOrder } from "@/components/admin/OrdersTable";
import { CertificatesTable, DashboardCertificate } from "@/components/admin/CertificatesTable";
import { BranchEditor } from "@/components/admin/BranchEditor";
import { TemplateEditor } from "@/components/admin/TemplateEditor";
import { CertificateAdminWizard } from "@/components/admin/CertificateAdminWizard";

type AdminTab = "dashboard" | "certificate" | "templates" | "branches" | "utm";

export const AdminDashboard = () => {
  const { session, logout } = useAuth();
  const { companies, loading: companiesLoading } = useCompanies();
  const { templates, loading: templatesLoading, reload: reloadTemplates } = useTemplates();

  const [orders, setOrders] = useState<DashboardOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState<string | null>(null);

  const [certificates, setCertificates] = useState<DashboardCertificate[]>([]);
  const [certificatesLoading, setCertificatesLoading] = useState(false);
  const [certificatesError, setCertificatesError] = useState<string | null>(null);
  const [certificateView, setCertificateView] = useState<"list" | "create">("list");
  const [certificateSearch, setCertificateSearch] = useState("");

  const [usingCertificateId, setUsingCertificateId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [selectedBranchId, setSelectedBranchId] = useState<string>("");

  const isGlobalManager = session?.user?.role === "superadmin";
  const userCompanyId = session?.user?.companyId ?? null;

  const allowedCompanies = useMemo(() => {
    if (isGlobalManager) {
      return companies;
    }
    return companies.filter((company) => company.id === userCompanyId);
  }, [companies, isGlobalManager, userCompanyId]);

  // Initialize selectedBranchId
  useEffect(() => {
    if (selectedBranchId) return; // Already set

    if (isGlobalManager) {
      if (companies.length > 0) {
        setSelectedBranchId(companies[0].id);
      }
    } else if (userCompanyId) {
      setSelectedBranchId(userCompanyId);
    }
  }, [isGlobalManager, userCompanyId, companies, selectedBranchId]);

  const loadOrders = useCallback(async () => {
    if (!session?.token) return;
    setOrdersLoading(true);
    setOrdersError(null);
    try {
      const queryParams = new URLSearchParams();
      if (selectedBranchId && selectedBranchId !== "all") {
        queryParams.append("companyId", selectedBranchId);
      }

      const response = await fetch(`/api/orders?${queryParams.toString()}`, {
        headers: { Authorization: `Bearer ${session.token}` },
      });

      if (!response.ok) {
        throw new Error("Не удалось загрузить заказы");
      }

      const payload = (await response.json()) as {
        id: string;
        orderNumber: string;
        totalAmount: number;
        status: string;
        paymentStatus: string;
        companyId: string;
        createdAt: string;
        recipientName?: string | null;
      }[];
      const mapped: DashboardOrder[] = payload.map((order) => ({
        id: order.id,
        orderNumber: order.orderNumber,
        amount: order.totalAmount,
        status: order.status,
        paymentStatus: order.paymentStatus,
        companyId: order.companyId,
        createdAt: order.createdAt,
        recipientName: order.recipientName ?? null,
      }));

      setOrders(mapped);
    } catch (error) {
      console.error(error);
      setOrdersError(error instanceof Error ? error.message : "Ошибка загрузки заказов");
    } finally {
      setOrdersLoading(false);
    }
  }, [session?.token, selectedBranchId]);

  const loadCertificates = useCallback(async () => {
    if (!session?.token) return;
    setCertificatesLoading(true);
    setCertificatesError(null);
    try {
      const queryParams = new URLSearchParams();
      if (selectedBranchId && selectedBranchId !== "all") {
        queryParams.append("companyId", selectedBranchId);
      }
      if (certificateSearch.trim()) {
        queryParams.append("search", certificateSearch.trim());
      }

      const response = await fetch(`/api/certificates?${queryParams.toString()}`, {
        headers: { Authorization: `Bearer ${session.token}` },
      });

      if (!response.ok) {
        throw new Error("Не удалось загрузить сертификаты");
      }

      const payload = (await response.json()) as {
        id: string;
        code: string;
        status: string;
        companyId: string;
        recipientName?: string | null;
        senderName?: string | null;
        createdAt: string;
        price: number;
        orderNumber?: string | null;
        paymentStatus?: string | null;
        buyerPhone?: string | null;
        buyerEmail?: string | null;
        utmTag?: string | null;
      }[];
      const mapped: DashboardCertificate[] = payload.map((cert) => ({
        id: cert.id,
        code: cert.code,
        status: cert.status,
        companyId: cert.companyId,
        recipientName: cert.recipientName ?? null,
        senderName: cert.senderName ?? null,
        createdAt: cert.createdAt,
        price: cert.price,
        orderNumber: cert.orderNumber ?? null,
        paymentStatus: cert.paymentStatus ?? null,
        buyerPhone: cert.buyerPhone ?? null,
        buyerEmail: cert.buyerEmail ?? null,
        utmTag: cert.utmTag ?? null,
      }));

      setCertificates(mapped);
    } catch (error) {
      console.error(error);
      setCertificatesError(error instanceof Error ? error.message : "Ошибка загрузки сертификатов");
    } finally {
      setCertificatesLoading(false);
    }
  }, [session?.token, selectedBranchId, certificateSearch]);

  useEffect(() => {
    if (session?.token && selectedBranchId) {
      void loadOrders();
      void loadCertificates();
    }
  }, [session?.token, selectedBranchId, certificateSearch, loadOrders, loadCertificates]);

  const handleUseCertificate = useCallback(
    async (certificateId: string) => {
      if (!session?.token) return;
      setUsingCertificateId(certificateId);
      try {
        const response = await fetch(`/api/certificates/${certificateId}/use`, {
          method: "POST",
          headers: { Authorization: `Bearer ${session.token}` },
        });
        if (!response.ok) throw new Error("Ошибка при использовании сертификата");
        toast.success("Сертификат использован");
        await loadCertificates();
      } catch (error) {
        toast.error("Не удалось обновить статус сертификата");
      } finally {
        setUsingCertificateId(null);
      }
    },
    [session?.token, loadCertificates],
  );

  const handleSignOut = async () => {
    await logout();
    toast.success("Вы вышли из аккаунта");
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
  const paidOrders = orders.filter((order) => order.paymentStatus === "paid").length;
  const dashboardStats = [
    { label: "Создано сертификатов", value: orders.length, icon: Gift },
    { label: "Оплачено", value: paidOrders, icon: Users },
    { label: "Выручка", value: formatCurrency(totalRevenue), icon: TrendingUp },
    { label: "Активных шаблонов", value: templates.length, icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground shadow-md sticky top-0 z-50">
        <div className="container px-4 py-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src="/logo.png" alt="Buddha Spa" className="h-10 w-auto" />
              </Link>
              {isGlobalManager && (
                <div className="hidden md:block">
                  <Select value={selectedBranchId} onValueChange={setSelectedBranchId}>
                    <SelectTrigger className="min-w-[320px] max-w-[520px] bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground">
                      <SelectValue placeholder="Выберите филиал" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies.map((company) => (
                        <SelectItem key={company.id} value={company.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{company.label}</span>
                            <span className="text-xs text-muted-foreground">{company.address}</span>
                          </div>
                        </SelectItem>
                      ))}
                      <SelectItem value="all">Все филиалы</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <nav className="flex items-center gap-4 text-sm">
              <Link to="/" className="hover:underline">
                Главная
              </Link>
              <Link to="/create" className="hover:underline">
                Создать сертификат
              </Link>
            </nav>
            <Button variant="secondary" onClick={handleSignOut} className="inline-flex items-center gap-2 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20">
              <LogOut className="w-4 h-4" />
              Выйти
            </Button>
          </div>
          {isGlobalManager && (
            <div className="md:hidden">
              <Select value={selectedBranchId} onValueChange={setSelectedBranchId}>
                <SelectTrigger className="w-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground">
                  <SelectValue placeholder="Выберите филиал" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{company.label}</span>
                        <span className="text-xs text-muted-foreground">{company.address}</span>
                      </div>
                    </SelectItem>
                  ))}
                  <SelectItem value="all">Все филиалы</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </header>

      <main className="container px-4 py-10 space-y-10">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as AdminTab)} className="space-y-8">
          <TabsList className="w-full flex-wrap justify-start gap-2 bg-card border border-border/60 rounded-2xl p-2 shadow-sm">
            <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
            <TabsTrigger value="certificate">Сертификаты</TabsTrigger>
            <TabsTrigger value="templates">Шаблоны</TabsTrigger>
            <TabsTrigger value="branches">Филиалы</TabsTrigger>
            <TabsTrigger value="utm">UTM-метки</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <DashboardStats stats={dashboardStats} />
            <OrdersTable
              orders={orders}
              loading={ordersLoading}
              error={ordersError}
              onRefresh={loadOrders}
              companies={companies}
            />
          </TabsContent>

          <TabsContent value="certificate" className="space-y-8">
            <Tabs value={certificateView} onValueChange={(value) => setCertificateView(value as "list" | "create")} className="space-y-6">
              <TabsList>
                <TabsTrigger value="list">Список сертификатов</TabsTrigger>
                <TabsTrigger value="create">Создать сертификат</TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="space-y-6">
                <CertificatesTable
                  certificates={certificates}
                  loading={certificatesLoading}
                  error={certificatesError}
                  onRefresh={loadCertificates}
                  companies={companies}
                  onUseCertificate={handleUseCertificate}
                  usingCertificateId={usingCertificateId}
                  search={certificateSearch}
                  onSearchChange={(value) => {
                    setCertificateSearch(value);
                    void loadCertificates();
                  }}
                />
              </TabsContent>

              <TabsContent value="create">
                <CertificateAdminWizard
                  companies={allowedCompanies}
                  onCreated={() => {
                    void loadCertificates();
                    void loadOrders();
                    setCertificateView("list");
                  }}
                />
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="templates" className="space-y-8">
            <TemplateEditor
              templates={templates}
              loading={templatesLoading}
              onRefresh={reloadTemplates}
              token={session?.token}
              isGlobalManager={isGlobalManager}
            />
          </TabsContent>

          <TabsContent value="branches" className="space-y-8">
            <BranchEditor
              companies={allowedCompanies} // Managers only see their own
              token={session?.token}
              onRefresh={() => window.location.reload()} // Simple reload for now
            />
          </TabsContent>

          <TabsContent value="utm" className="space-y-8">
            <UtmManagement token={session?.token} canManage={isGlobalManager} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
