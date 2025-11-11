import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, LogOut, Mail, PenSquare, RefreshCw, Trash2, TrendingUp, Users } from "lucide-react";
import { TbMassage } from "react-icons/tb";
import { toast } from "sonner";
import { useCompanies } from "@/hooks/useCompanies";
import { useTemplates } from "@/hooks/useTemplates";
import { useSpaProcedures, type SpaProcedureOption } from "@/hooks/useSpaProcedures";
import { formatCurrency } from "@/lib/currency";
import { calculateServicesTotal, getDiscountedPrice } from "@/lib/services";
import { UtmManagement } from "@/components/admin/UtmManagement";

type DashboardOrder = {
  id: string;
  orderNumber: string;
  amount: number;
  status: string;
  paymentStatus: string;
  companyId: string;
  createdAt: string;
  recipientName?: string | null;
};

type DashboardCertificate = {
  id: string;
  code: string;
  status: string;
  companyId: string;
  recipientName: string | null;
  senderName: string | null;
  createdAt: string;
  price: number;
};

type CertificateServiceSelection = {
  id: string;
  name: string;
  price: number;
  discountPercent?: number;
  branchId: string;
  currency?: string;
  durationMinutes?: number | null;
};

const certificateFormDefaults = {
  companyId: "",
  templateId: "",
  type: "gift" as "gift" | "procedure",
  amount: 50000,
  senderName: "",
  recipientName: "",
  recipientEmail: "",
  recipientPhone: "",
  message: "",
  deliveryMethod: "email" as "email" | "whatsapp" | "download",
  deliveryContact: "",
  validUntil: "",
  services: [] as CertificateServiceSelection[],
};

const templateFormDefaults = {
  name: "",
  description: "",
  backgroundUrl: "",
  previewUrl: "",
  fontFamily: "Playfair Display",
  textColor: "#FFFFFF",
};

const serviceFormDefaults = {
  companyId: "",
  name: "",
  description: "",
  durationMinutes: "",
  price: "",
  discountPercent: "",
  hasDiscount: false,
};

const branchFormDefaults = {
  label: "",
  address: "",
  phone: "",
  nameCompany: "",
  binCompany: "",
  bikCompany: "",
  officialAddress: "",
  companyOneVisionId: "",
  passOneVision: "",
  keyOneVision: "",
  companyNameOneVisionId: "",
  email: "",
  managerName: "",
  timezone: "",
  status: "active" as "active" | "inactive",
};

type AdminTab = "dashboard" | "certificate" | "templates" | "services" | "branches" | "utm";

export const AdminDashboard = () => {
  const { session, logout } = useAuth();
  const { companies, loading: companiesLoading } = useCompanies();
  const { templates, loading: templatesLoading, reload: reloadTemplates } = useTemplates();

  const [certificateForm, setCertificateForm] = useState(certificateFormDefaults);
  const [templateForm, setTemplateForm] = useState(templateFormDefaults);
  const [serviceForm, setServiceForm] = useState(serviceFormDefaults);
  const [submittingCertificate, setSubmittingCertificate] = useState(false);
  const [submittingTemplate, setSubmittingTemplate] = useState(false);
  const [serviceSubmitting, setServiceSubmitting] = useState(false);
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [orders, setOrders] = useState<DashboardOrder[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState<string | null>(null);
  const [certificates, setCertificates] = useState<DashboardCertificate[]>([]);
  const [certificatesLoading, setCertificatesLoading] = useState(false);
  const [certificatesError, setCertificatesError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [selectedServiceCompanyId, setSelectedServiceCompanyId] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [branchForm, setBranchForm] = useState(branchFormDefaults);
  const [branchLoading, setBranchLoading] = useState(false);
  const [branchSaving, setBranchSaving] = useState(false);
  const [branchError, setBranchError] = useState<string | null>(null);

  const isGlobalManager = session?.user?.role === "superadmin" || session?.user?.role === "admin";
  const userCompanyId = session?.user?.companyId ?? null;

  const allowedCompanies = useMemo(() => {
    if (isGlobalManager) {
      return companies;
    }
    return companies.filter((company) => company.id === userCompanyId);
  }, [companies, isGlobalManager, userCompanyId]);

  const {
    services: managedServices,
    loading: managedServicesLoading,
    reload: reloadManagedServices,
  } = useSpaProcedures({
    companyId: selectedServiceCompanyId,
    includeInactive: true,
    enabled: Boolean(selectedServiceCompanyId),
  });

  const {
    services: certificateProcedures,
    loading: certificateProceduresLoading,
    error: certificateProceduresError,
    reload: reloadCertificateProcedures,
  } = useSpaProcedures({
    companyId: certificateForm.companyId || undefined,
    includeInactive: false,
    enabled: Boolean(certificateForm.companyId && certificateForm.type === "procedure"),
  });

  const selectedProcedureIds = useMemo(
    () => new Set(certificateForm.services.map((service) => service.id)),
    [certificateForm.services],
  );
  const procedureTotal = useMemo(
    () => calculateServicesTotal(certificateForm.services),
    [certificateForm.services],
  );

  const filteredCertificates = useMemo(() => {
    if (!certificateForm.companyId || certificateForm.companyId === "all") {
      return certificates;
    }
    return certificates.filter((cert) => cert.companyId === certificateForm.companyId);
  }, [certificates, certificateForm.companyId]);

  useEffect(() => {
    if (!certificateForm.companyId && allowedCompanies.length) {
      setCertificateForm((prev) => ({ ...prev, companyId: allowedCompanies[0].id }));
    }
  }, [allowedCompanies, certificateForm.companyId]);

  useEffect(() => {
    if (!certificateForm.templateId && templates.length) {
      setCertificateForm((prev) => ({ ...prev, templateId: templates[0].id }));
    }
  }, [templates, certificateForm.templateId]);

  useEffect(() => {
    if (!selectedServiceCompanyId && allowedCompanies.length) {
      const fallbackCompanyId = allowedCompanies[0].id;
      setSelectedServiceCompanyId(fallbackCompanyId);
      setServiceForm((prev) => ({ ...prev, companyId: fallbackCompanyId }));
    }
  }, [allowedCompanies, selectedServiceCompanyId]);

  const loadOrders = useCallback(async () => {
    if (!session?.token) {
      return;
    }
    setOrdersLoading(true);
    setOrdersError(null);
    try {
      const response = await fetch("/api/orders", {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось загрузить заказы");
      }

      const payload = (await response.json()) as Array<{
        id: string;
        orderNumber: string;
        totalAmount: number;
        status: string;
        paymentStatus: string;
        companyId: string;
        createdAt: string;
        recipientName?: string | null;
      }>;

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
      setOrdersError(error instanceof Error ? error.message : "Не удалось загрузить заказы");
    } finally {
      setOrdersLoading(false);
    }
  }, [session?.token]);

  const loadCertificates = useCallback(async () => {
    if (!session?.token) {
      return;
    }
    setCertificatesLoading(true);
    setCertificatesError(null);
    try {
      const response = await fetch("/api/certificates", {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось загрузить сертификаты");
      }

      const payload = (await response.json()) as Array<{
        id: string;
        code: string;
        status: string;
        companyId: string;
        recipientName?: string | null;
        senderName?: string | null;
        createdAt: string;
        price: number;
      }>;

      const mapped: DashboardCertificate[] = payload.map((certificate) => ({
        id: certificate.id,
        code: certificate.code,
        status: certificate.status,
        companyId: certificate.companyId,
        recipientName: certificate.recipientName ?? null,
        senderName: certificate.senderName ?? null,
        createdAt: certificate.createdAt,
        price: certificate.price,
      }));

      setCertificates(mapped);
    } catch (error) {
      console.error(error);
      setCertificatesError(error instanceof Error ? error.message : "Не удалось загрузить сертификаты");
    } finally {
      setCertificatesLoading(false);
    }
  }, [session?.token]);

  useEffect(() => {
    if (session?.token) {
      void loadOrders();
      void loadCertificates();
    }
  }, [session?.token, loadOrders, loadCertificates]);

  const handleSignOut = async () => {
    await logout();
    toast.success("Вы вышли из аккаунта");
  };

  const handleCertificateChange = (field: keyof typeof certificateForm) => (value: string) => {
    if (field === "amount" && certificateForm.type === "procedure") {
      return;
    }
    setCertificateForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleTemplateChange = (field: keyof typeof templateForm) => (value: string) => {
    setTemplateForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceFieldChange = (field: keyof typeof serviceForm) => (value: string) => {
    setServiceForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleServiceDiscount = (enabled: boolean) => {
    setServiceForm((prev) => ({
      ...prev,
      hasDiscount: enabled,
      discountPercent: enabled ? prev.discountPercent || "10" : "",
    }));
  };

  const handleCompanyChange = (value: string) => {
    setCertificateForm((prev) => ({
      ...prev,
      companyId: value,
      services: [],
      amount: prev.type === "procedure" ? 0 : prev.amount,
    }));
    if (certificateForm.type === "procedure") {
      reloadCertificateProcedures();
    }
  };

  const handleCertificateTypeChange = (value: "gift" | "procedure") => {
    setCertificateForm((prev) => {
      const services = value === "gift" ? [] : prev.services;
      const amount = value === "procedure" ? calculateServicesTotal(services) : prev.amount || 50000;
      return {
        ...prev,
        type: value,
        services,
        amount: value === "procedure" ? amount : prev.amount,
      };
    });

    if (value === "procedure") {
      reloadCertificateProcedures();
    }
  };

  const toggleProcedureSelection = (service: SpaProcedureOption) => {
    setCertificateForm((prev) => {
      const isSelected = prev.services.some((item) => item.id === service.id);
      const nextServices = isSelected
        ? prev.services.filter((item) => item.id !== service.id)
        : [
            ...prev.services,
            {
              id: service.id,
              name: service.name,
              price: service.price,
              discountPercent: service.discountPercent ?? 0,
              branchId: service.companyId ?? prev.companyId ?? "",
              currency: service.currency ?? "KZT",
              durationMinutes: service.durationMinutes ?? null,
            },
          ];

      return {
        ...prev,
        services: nextServices,
        amount: prev.type === "procedure" ? calculateServicesTotal(nextServices) : prev.amount,
      };
    });
  };

  const clearProcedureSelection = () => {
    setCertificateForm((prev) => ({
      ...prev,
      services: [],
      amount: prev.type === "procedure" ? 0 : prev.amount,
    }));
  };

  const handleBranchSelect = (value: string) => {
    setSelectedBranchId(value);
    setBranchForm(branchFormDefaults);
    setBranchError(null);
  };

  const loadBranchDetails = useCallback(
    async (companyId: string) => {
      if (!session?.token || !companyId) {
        return;
      }
      setBranchLoading(true);
      try {
        const response = await fetch(`/api/companies/${companyId}`, {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.message ?? "Не удалось загрузить данные филиала");
        }

        const data = (await response.json()) as {
          label: string;
          address: string;
          phone?: string | null;
          nameCompany?: string | null;
          binCompany?: string | null;
          bikCompany?: string | null;
          officialAddress?: string | null;
          companyOneVisionId?: string | null;
          passOneVision?: string | null;
          keyOneVision?: string | null;
          companyNameOneVisionId?: string | null;
          email?: string | null;
          managerName?: string | null;
          timezone?: string | null;
          status?: "active" | "inactive";
        };

        setBranchForm({
          label: data.label ?? "",
          address: data.address ?? "",
          phone: data.phone ?? "",
          nameCompany: data.nameCompany ?? "",
          binCompany: data.binCompany ?? "",
          bikCompany: data.bikCompany ?? "",
          officialAddress: data.officialAddress ?? "",
          companyOneVisionId: data.companyOneVisionId ?? "",
          passOneVision: data.passOneVision ?? "",
          keyOneVision: data.keyOneVision ?? "",
          companyNameOneVisionId: data.companyNameOneVisionId ?? "",
          email: data.email ?? "",
          managerName: data.managerName ?? "",
          timezone: data.timezone ?? "",
          status: data.status ?? "active",
        });
        setBranchError(null);
      } catch (error) {
        console.error(error);
        setBranchError(error instanceof Error ? error.message : "Не удалось загрузить данные филиала");
      } finally {
        setBranchLoading(false);
      }
    },
    [session?.token],
  );

  useEffect(() => {
    if (!selectedBranchId && allowedCompanies.length) {
      setSelectedBranchId(allowedCompanies[0].id);
    }
  }, [allowedCompanies, selectedBranchId]);

  useEffect(() => {
    if (selectedBranchId && selectedBranchId !== "all") {
      void loadBranchDetails(selectedBranchId);
    }
  }, [selectedBranchId, loadBranchDetails]);

  const handleBranchFieldChange = (field: keyof typeof branchFormDefaults) => (value: string) => {
    setBranchForm((prev) => ({ ...prev, [field]: value }));
  };

  const submitBranchForm: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!selectedBranchId) {
      toast.error("Выберите филиал");
      return;
    }
    if (!branchForm.label.trim() || !branchForm.address.trim()) {
      toast.error("Название и адрес обязательны");
      return;
    }
    if (!session?.token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }

    setBranchSaving(true);
    try {
      const payload = {
        label: branchForm.label.trim(),
        address: branchForm.address.trim(),
        phone: branchForm.phone.trim() || undefined,
        nameCompany: branchForm.nameCompany.trim() || undefined,
        binCompany: branchForm.binCompany.trim() || undefined,
        bikCompany: branchForm.bikCompany.trim() || undefined,
        officialAddress: branchForm.officialAddress.trim() || undefined,
        companyOneVisionId: branchForm.companyOneVisionId.trim() || undefined,
        passOneVision: branchForm.passOneVision.trim() || undefined,
        keyOneVision: branchForm.keyOneVision.trim() || undefined,
        companyNameOneVisionId: branchForm.companyNameOneVisionId.trim() || undefined,
        email: branchForm.email.trim() || undefined,
        status: branchForm.status,
        managerName: branchForm.managerName.trim() || undefined,
        timezone: branchForm.timezone.trim() || undefined,
      };

      const response = await fetch(`/api/companies/${selectedBranchId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось сохранить изменения");
      }

      toast.success("Данные филиала обновлены");
      await loadBranchDetails(selectedBranchId);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Не удалось обновить филиал");
    } finally {
      setBranchSaving(false);
    }
  };

  const handleServiceCompanyChange = (value: string) => {
    setSelectedServiceCompanyId(value);
    setServiceForm((prev) => ({ ...prev, companyId: value }));
    setEditingServiceId(null);
  };

  const resetServiceForm = () => {
    setServiceForm((prev) => ({ ...serviceFormDefaults, companyId: selectedServiceCompanyId }));
    setEditingServiceId(null);
  };

  const startServiceEdit = (service: SpaProcedureOption) => {
    const companyId = service.companyId ?? selectedServiceCompanyId;
    if (companyId && companyId !== selectedServiceCompanyId) {
      setSelectedServiceCompanyId(companyId);
    }
    setEditingServiceId(service.id);
    setServiceForm({
      companyId: companyId ?? "",
      name: service.name,
      description: service.description ?? "",
      durationMinutes: service.durationMinutes ? String(service.durationMinutes) : "",
      price: String(service.price),
      discountPercent: service.discountPercent && service.discountPercent > 0 ? String(service.discountPercent) : "",
      hasDiscount: (service.discountPercent ?? 0) > 0,
    });
  };

  const startTemplateEdit = (templateId: string) => {
    const template = templates.find((item) => item.id === templateId);
    if (!template) {
      toast.error("Шаблон не найден");
      return;
    }
    setEditingTemplateId(templateId);
    setTemplateForm({
      name: template.name,
      description: template.description ?? "",
      backgroundUrl: template.backgroundUrl ?? "",
      previewUrl: template.previewUrl ?? "",
      fontFamily: template.fontFamily ?? "Playfair Display",
      textColor: template.textColor ?? "#FFFFFF",
    });
  };

  const cancelTemplateEdit = () => {
    setEditingTemplateId(null);
    setTemplateForm(templateFormDefaults);
  };

  const submitCertificate: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!certificateForm.companyId || certificateForm.companyId === "all") {
      toast.error("Выберите филиал");
      return;
    }
    if (!certificateForm.templateId) {
      toast.error("Выберите шаблон");
      return;
    }
    if (!certificateForm.recipientName.trim()) {
      toast.error("Укажите получателя");
      return;
    }
    const isProcedureCertificate = certificateForm.type === "procedure";
    const amount = Number(certificateForm.amount);
    if (!isProcedureCertificate && (Number.isNaN(amount) || amount <= 0)) {
      toast.error("Некорректный номинал");
      return;
    }
    if (isProcedureCertificate && certificateForm.services.length === 0) {
      toast.error("Добавьте хотя бы одну услугу");
      return;
    }
    if (!session?.token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }

    setSubmittingCertificate(true);
    try {
      const payload = {
        companyId: certificateForm.companyId,
        amount: isProcedureCertificate ? undefined : amount,
        type: certificateForm.type,
        templateId: certificateForm.templateId,
        senderName: certificateForm.senderName || undefined,
        recipientName: certificateForm.recipientName.trim(),
        message: certificateForm.message || undefined,
        validUntil: certificateForm.validUntil ? new Date(certificateForm.validUntil).toISOString() : undefined,
        delivery: {
          method: certificateForm.deliveryMethod,
          contact: certificateForm.deliveryContact || undefined,
        },
        client: {
          name: certificateForm.recipientName.trim(),
          email: certificateForm.recipientEmail || undefined,
          phone: certificateForm.recipientPhone || undefined,
        },
        services:
          isProcedureCertificate && certificateForm.services.length
            ? certificateForm.services.map((service) => ({
                id: service.id,
                name: service.name,
                price: service.price,
                discountPercent: service.discountPercent ?? 0,
                branchId: service.branchId ?? certificateForm.companyId,
                currency: service.currency ?? "KZT",
              }))
            : undefined,
      };

      const response = await fetch("/api/orders/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось создать сертификат");
      }

      toast.success("Сертификат создан");
      setCertificateForm((prev) => ({
        ...certificateFormDefaults,
        companyId: prev.companyId,
        templateId: prev.templateId,
      }));
      void loadOrders();
      void loadCertificates();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Не удалось создать сертификат");
    } finally {
      setSubmittingCertificate(false);
    }
  };

  const submitTemplate: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!isGlobalManager) {
      toast.error("Создавать шаблоны может только админ");
      return;
    }
    if (!templateForm.name.trim()) {
      toast.error("Введите название шаблона");
      return;
    }
    if (!templateForm.backgroundUrl.trim()) {
      toast.error("Укажите фон (URL)");
      return;
    }
    if (!templateForm.previewUrl.trim()) {
      toast.error("Укажите превью (URL)");
      return;
    }
    if (!session?.token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }

    setSubmittingTemplate(true);
    try {
      const payload = {
        name: templateForm.name.trim(),
        description: templateForm.description.trim() || undefined,
        backgroundUrl: templateForm.backgroundUrl.trim(),
        previewUrl: templateForm.previewUrl.trim(),
        layoutConfig: {
          fontFamily: templateForm.fontFamily.trim() || undefined,
          textColor: templateForm.textColor.trim() || undefined,
        },
      };

      const endpoint = editingTemplateId ? `/api/templates/${editingTemplateId}` : "/api/templates";
      const response = await fetch(endpoint, {
        method: editingTemplateId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось создать шаблон");
      }

      toast.success(editingTemplateId ? "Шаблон обновлён" : "Шаблон добавлен");
      cancelTemplateEdit();
      reloadTemplates();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Не удалось создать шаблон");
    } finally {
      setSubmittingTemplate(false);
    }
  };

  const submitService: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!serviceForm.companyId || serviceForm.companyId === "all") {
      toast.error("Выберите филиал для услуги");
      return;
    }
    if (!serviceForm.name.trim()) {
      toast.error("Введите название услуги");
      return;
    }
    const priceValue = Number(serviceForm.price);
    if (!Number.isFinite(priceValue) || priceValue <= 0) {
      toast.error("Укажите корректную стоимость");
      return;
    }
    const discountEnabled = serviceForm.hasDiscount;
    const discountValue = discountEnabled ? Number(serviceForm.discountPercent || 0) : 0;
    if (discountEnabled && (discountValue < 0 || discountValue > 100)) {
      toast.error("Скидка должна быть от 0% до 100%");
      return;
    }
    const durationValue = serviceForm.durationMinutes ? Number(serviceForm.durationMinutes) : undefined;
    if (serviceForm.durationMinutes && (!Number.isFinite(durationValue) || (durationValue ?? 0) <= 0)) {
      toast.error("Длительность указывается в минутах");
      return;
    }
    if (!session?.token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }

    setServiceSubmitting(true);
    try {
      const payload = {
        name: serviceForm.name.trim(),
        description: serviceForm.description.trim() || undefined,
        durationMinutes: durationValue,
        price: priceValue,
        discountPercent: discountEnabled ? discountValue : 0,
        companyId: serviceForm.companyId,
        isActive: true,
      };

      const response = await fetch(
        editingServiceId ? `/api/spa-procedures/${editingServiceId}` : "/api/spa-procedures",
        {
          method: editingServiceId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось сохранить услугу");
      }

      toast.success(editingServiceId ? "Услуга обновлена" : "Услуга добавлена");
      resetServiceForm();
      reloadManagedServices();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Не удалось сохранить услугу");
    } finally {
      setServiceSubmitting(false);
    }
  };

  const handleRemoveService = async (serviceId: string) => {
    if (!session?.token) {
      toast.error("Сессия истекла. Перезайдите.");
      return;
    }
    if (!window.confirm("Удалить услугу из списка?")) {
      return;
    }
    try {
      const response = await fetch(`/api/spa-procedures/${serviceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message ?? "Не удалось удалить услугу");
      }
      toast.success("Услуга отключена");
      if (editingServiceId === serviceId) {
        resetServiceForm();
      }
      reloadManagedServices();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Не удалось удалить услугу");
    }
  };

  const managerName = useMemo(() => {
    if (session?.user?.name) {
      return session.user.name;
    }
    return session?.user?.email?.split("@")[0] ?? "менеджер";
  }, [session]);

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
  const paidOrders = orders.filter((order) => order.paymentStatus === "paid").length;
  const dashboardStats = [
    { label: "Создано сертификатов", value: orders.length, icon: Gift },
    { label: "Оплачено", value: paidOrders, icon: Users },
    { label: "Выручка", value: formatCurrency(totalRevenue), icon: TrendingUp },
    { label: "Активных шаблонов", value: templates.length, icon: Mail },
  ];
  const recentOrders = orders.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container px-4 py-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src="/logo.png" alt="Buddha Spa" className="h-10 w-auto" />
              </Link>
            </div>
            <nav className="flex items-center gap-4 text-sm">
              <Link to="/" className="hover:underline">
                Главная
              </Link>
              <Link to="/create" className="hover:underline">
                Создать сертификат
              </Link>
            </nav>
            <Button variant="secondary" onClick={handleSignOut} className="inline-flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-10 space-y-10">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as AdminTab)} className="space-y-8">
        <TabsList className="w-full flex-wrap justify-start gap-2">
          <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
          <TabsTrigger value="certificate">Сертификаты</TabsTrigger>
          <TabsTrigger value="templates">Шаблоны</TabsTrigger>
          <TabsTrigger value="services">Услуги</TabsTrigger>
          <TabsTrigger value="branches">Филиалы</TabsTrigger>
          <TabsTrigger value="utm">UTM-метки</TabsTrigger>
        </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground">Ключевые показатели</h2>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => loadOrders()}
                  disabled={ordersLoading}
                  className="inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  {ordersLoading ? "Обновляем..." : "Обновить цифры"}
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map(({ label, value, icon: Icon }) => (
                  <Card key={label} className="border border-border/60 bg-card shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">{label}</CardTitle>
                      <Icon className="w-4 h-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-semibold text-foreground">{value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="grid gap-6">
              <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between gap-4">
                  <div>
                    <CardTitle>Последние заказы</CardTitle>
                    <CardDescription>Сертификаты, созданные за смену</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {ordersLoading && <p className="text-sm text-muted-foreground">Загружаем данные...</p>}
                  {ordersError && <p className="text-sm text-destructive">{ordersError}</p>}
                  {!recentOrders.length && !ordersLoading && (
                    <p className="text-sm text-muted-foreground">Ещё нет заказов. Создайте первый сертификат.</p>
                  )}
                  {recentOrders.map((order) => {
                    const company = companies.find((c) => c.id === order.companyId);
                    const branchTitle = company ? `${company.label} — ${company.address}` : "Филиал";
                    const created = new Date(order.createdAt);
                    return (
                      <div key={order.id} className="p-4 rounded-xl border border-border/60 space-y-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>#{order.orderNumber}</span>
                          <span>{created.toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
                        </div>
                        <p className="text-base font-semibold text-foreground">{order.recipientName ?? "Получатель"}</p>
                        <p className="text-sm text-muted-foreground">{branchTitle}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-primary">{formatCurrency(order.amount)}</span>
                          <span className={order.paymentStatus === "paid" ? "text-emerald-600" : "text-amber-500"}>
                            {order.paymentStatus === "paid" ? "Оплачен" : "Ожидает"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </section>
        </TabsContent>
        <TabsContent value="utm" className="space-y-8">
          <UtmManagement token={session?.token} canManage={isGlobalManager} />
        </TabsContent>

          <TabsContent value="certificate" className="space-y-8">
            <section className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2 border border-border/60 bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Создание сертификата</CardTitle>
                  <CardDescription>
                    {isGlobalManager ? "Суперадмин может выбирать любой филиал." : "Менеджер работает только со своим филиалом."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={submitCertificate}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Филиал</Label>
                        <Select
                          value={certificateForm.companyId}
                          onValueChange={handleCompanyChange}
                          disabled={companiesLoading || allowedCompanies.length <= 1}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={companiesLoading ? "Загрузка..." : "Выберите филиал"} />
                          </SelectTrigger>
                          <SelectContent>
                            {allowedCompanies.map((company) => (
                              <SelectItem key={company.id} value={company.id}>
                                {company.label} — {company.address}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Шаблон</Label>
                        <Select
                          value={certificateForm.templateId}
                          onValueChange={handleCertificateChange("templateId")}
                          disabled={templatesLoading || templates.length === 0}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={templatesLoading ? "Загрузка..." : "Выберите шаблон"} />
                          </SelectTrigger>
                          <SelectContent>
                            {templates.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Тип сертификата</Label>
                        <RadioGroup
                          value={certificateForm.type}
                          onValueChange={(value) => handleCertificateTypeChange(value as "gift" | "procedure")}
                          className="grid grid-cols-2 gap-3"
                        >
                          <Label
                            htmlFor="type-gift"
                            className={`block w-full cursor-pointer space-y-1 rounded-xl border p-3 transition-colors ${
                              certificateForm.type === "gift" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                          >
                            <RadioGroupItem value="gift" id="type-gift" className="sr-only" />
                            <span className="font-semibold block">Подарочный</span>
                            <span className="text-xs text-muted-foreground">Свободный номинал</span>
                          </Label>
                          <Label
                            htmlFor="type-procedure"
                            className={`flex w-full cursor-pointer items-center gap-2 rounded-xl border p-3 transition-colors ${
                              certificateForm.type === "procedure" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                          >
                            <RadioGroupItem value="procedure" id="type-procedure" className="sr-only" />
                            <TbMassage className="w-4 h-4 text-primary" />
                            <span>
                              <span className="font-semibold block">Процедурный</span>
                              <span className="text-xs text-muted-foreground block">Конкретная услуга</span>
                            </span>
                          </Label>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label>Номинал, ₸</Label>
                        <Input
                          type="number"
                          min={10000}
                          max={500000}
                          value={certificateForm.type === "procedure" ? procedureTotal : certificateForm.amount}
                          disabled={certificateForm.type === "procedure"}
                          onChange={(event) => handleCertificateChange("amount")(event.target.value)}
                        />
                        {certificateForm.type === "procedure" && (
                          <p className="text-xs text-muted-foreground">
                            Сумма рассчитывается по выбранным услугам.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Получатель</Label>
                        <Input
                          placeholder="Айгуль"
                          value={certificateForm.recipientName}
                          onChange={(event) => handleCertificateChange("recipientName")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Отправитель</Label>
                        <Input
                          placeholder="Ваш менеджер"
                          value={certificateForm.senderName}
                          onChange={(event) => handleCertificateChange("senderName")(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Email получателя</Label>
                        <Input
                          type="email"
                          placeholder="client@example.com"
                          value={certificateForm.recipientEmail}
                          onChange={(event) => handleCertificateChange("recipientEmail")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Телефон WhatsApp</Label>
                        <Input
                          placeholder="+7701..."
                          value={certificateForm.recipientPhone}
                          onChange={(event) => handleCertificateChange("recipientPhone")(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Поздравление</Label>
                      <Textarea
                        rows={3}
                        placeholder="С юбилеем! Наслаждайся отдыхом."
                        value={certificateForm.message}
                        onChange={(event) => handleCertificateChange("message")(event.target.value)}
                      />
                    </div>

                    {certificateForm.type === "procedure" && (
                      <div className="space-y-4 rounded-2xl border border-border p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <Label className="font-semibold">Процедуры филиала</Label>
                            <p className="text-sm text-muted-foreground">
                              Добавьте услуги. Итоговая сумма подставится автоматически.
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => reloadCertificateProcedures()}
                              disabled={certificateProceduresLoading}
                            >
                              <RefreshCw className="w-4 h-4 mr-1" />
                              Обновить
                            </Button>
                            {certificateForm.services.length > 0 && (
                              <Button type="button" variant="ghost" size="sm" onClick={clearProcedureSelection}>
                                Очистить
                              </Button>
                            )}
                          </div>
                        </div>

                        {certificateProceduresError && (
                          <p className="text-sm text-destructive">{certificateProceduresError}</p>
                        )}

                        {certificateProceduresLoading && (
                          <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, index) => (
                              <div key={`certificate-service-skeleton-${index}`} className="h-20 rounded-xl bg-muted/30 animate-pulse" />
                            ))}
                          </div>
                        )}

                        {!certificateProceduresLoading && certificateProcedures.length === 0 && (
                          <p className="text-sm text-muted-foreground">
                            Для этого филиала ещё нет услуг. Добавьте их во вкладке «Услуги».
                          </p>
                        )}

                        {!certificateProceduresLoading && certificateProcedures.length > 0 && (
                          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                            {certificateProcedures.map((procedure) => {
                              const checked = selectedProcedureIds.has(procedure.id);
                              const hasDiscount =
                                typeof procedure.discountPercent === "number" && procedure.discountPercent > 0;
                              const finalPrice = hasDiscount
                                ? getDiscountedPrice(procedure.price, procedure.discountPercent)
                                : procedure.price;
                              return (
                                <label
                                  key={procedure.id}
                                  htmlFor={`procedure-${procedure.id}`}
                                  className={`w-full rounded-2xl border px-3 py-2 text-left transition cursor-pointer ${
                                    checked ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <Checkbox
                                      id={`procedure-${procedure.id}`}
                                      checked={checked}
                                      onCheckedChange={() => toggleProcedureSelection(procedure)}
                                      className="mt-1"
                                      aria-label={`Добавить услугу ${procedure.name}`}
                                    />
                                    <div className="flex-1 space-y-1">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <p className="font-semibold text-foreground">{procedure.name}</p>
                                        {hasDiscount && (
                                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                            -{procedure.discountPercent}%
                                          </span>
                                        )}
                                      </div>
                                      {procedure.description && (
                                        <p className="text-xs text-muted-foreground">{procedure.description}</p>
                                      )}
                                    </div>
                                    <div className="text-right text-sm min-w-[120px]">
                                      {hasDiscount && (
                                        <span className="block text-muted-foreground line-through">
                                          {formatCurrency(procedure.price)}
                                        </span>
                                      )}
                                      <span className="block font-semibold">{formatCurrency(finalPrice)}</span>
                                      {procedure.durationMinutes ? (
                                        <span className="text-xs text-muted-foreground">{procedure.durationMinutes} мин.</span>
                                      ) : null}
                                    </div>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Метод доставки</Label>
                        <Select value={certificateForm.deliveryMethod} onValueChange={handleCertificateChange("deliveryMethod")}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="download">Скачивание</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Контакт для доставки</Label>
                        <Input
                          placeholder="Введите email или WhatsApp"
                          value={certificateForm.deliveryContact}
                          onChange={(event) => handleCertificateChange("deliveryContact")(event.target.value)}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={submittingCertificate}>
                      {submittingCertificate ? "Сохраняем..." : "Создать сертификат"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between gap-4">
                  <div>
                    <CardTitle>Сертификаты</CardTitle>
                    <CardDescription>Активные и завершённые покупки</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => loadCertificates()}
                    disabled={certificatesLoading}
                    className="inline-flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    {certificatesLoading ? "Обновляем..." : "Обновить"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificatesError && <p className="text-sm text-destructive">{certificatesError}</p>}
                  {certificatesLoading && <p className="text-sm text-muted-foreground">Загружаем список сертификатов...</p>}
                  {!certificatesLoading && !filteredCertificates.length && (
                    <p className="text-sm text-muted-foreground">Сертификатов пока нет. Создайте первый заказ.</p>
                  )}
                  {!certificatesLoading && filteredCertificates.length > 0 && (
                    <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                      {filteredCertificates.map((certificate) => {
                        const company = companies.find((item) => item.id === certificate.companyId);
                        const branchTitle = company ? `${company.label} — ${company.address}` : "Филиал";
                        const createdAt = new Date(certificate.createdAt);
                        const statusText = certificate.status === "active" ? "Активен" : "Закрыт";
                        const statusColor =
                          certificate.status === "active" ? "text-emerald-600" : "text-muted-foreground";
                        return (
                          <div key={certificate.id} className="border border-border/60 rounded-2xl p-4 space-y-2">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>#{certificate.code}</span>
                              <span>
                                {createdAt.toLocaleDateString("ru-RU", {
                                  day: "2-digit",
                                  month: "short",
                                })}
                              </span>
                            </div>
                            <p className="text-base font-semibold text-foreground">
                              {certificate.recipientName ?? "Получатель"}
                            </p>
                            <p className="text-sm text-muted-foreground">{branchTitle}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-primary">{formatCurrency(certificate.price)}</span>
                              <span className={statusColor}>{statusText}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="templates" className="space-y-8">
            <section className="grid gap-6 lg:grid-cols-2">
              <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>{editingTemplateId ? "Редактирование шаблона" : "Создание шаблона"}</CardTitle>
                  <CardDescription>Добавьте новый фон и превью сертификата</CardDescription>
                </CardHeader>
                <CardContent>
                  {isGlobalManager ? (
                    <form className="space-y-4" onSubmit={submitTemplate}>
                      <div className="space-y-2">
                        <Label>Название</Label>
                        <Input
                          placeholder="Например, Лесной мох"
                          value={templateForm.name}
                          onChange={(event) => handleTemplateChange("name")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Описание</Label>
                        <Textarea
                          rows={2}
                          placeholder="Короткий текст для менеджеров"
                          value={templateForm.description}
                          onChange={(event) => handleTemplateChange("description")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>URL фона</Label>
                        <Input
                          placeholder="https://..."
                          value={templateForm.backgroundUrl}
                          onChange={(event) => handleTemplateChange("backgroundUrl")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>URL превью</Label>
                        <Input
                          placeholder="https://..."
                          value={templateForm.previewUrl}
                          onChange={(event) => handleTemplateChange("previewUrl")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Шрифт</Label>
                        <Input
                          placeholder="Playfair Display"
                          value={templateForm.fontFamily}
                          onChange={(event) => handleTemplateChange("fontFamily")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Цвет текста (HEX)</Label>
                        <Input
                          placeholder="#FFFFFF"
                          value={templateForm.textColor}
                          onChange={(event) => handleTemplateChange("textColor")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Button type="submit" className="w-full" disabled={submittingTemplate}>
                          {submittingTemplate
                            ? "Сохраняем..."
                            : editingTemplateId
                              ? "Сохранить изменения"
                              : "Создать шаблон"}
                        </Button>
                        {editingTemplateId && (
                          <Button type="button" variant="ghost" className="w-full" onClick={cancelTemplateEdit}>
                            Отмена
                          </Button>
                        )}
                      </div>
                    </form>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Создавать шаблоны может только администратор. Обратитесь к головному офису.
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Каталог шаблонов</CardTitle>
                  <CardDescription>Доступные варианты оформления</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {templatesLoading && <p className="text-sm text-muted-foreground">Загружаем шаблоны...</p>}
                  {!templatesLoading && !templates.length && (
                    <p className="text-sm text-muted-foreground">Шаблоны ещё не добавлены.</p>
                  )}
                  {!templatesLoading &&
                    templates.map((template) => (
                      <div key={template.id} className="flex gap-3 rounded-xl border border-border/60 p-3">
                        <div
                          className="w-24 h-16 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url(${template.previewUrl ?? template.backgroundUrl ?? "/placeholder-card.png"})` }}
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{template.name}</p>
                          <p className="text-xs text-muted-foreground">{template.description ?? "Фирменный стиль Buddha Spa"}</p>
                        </div>
                        {isGlobalManager && (
                          <Button type="button" size="sm" variant="outline" onClick={() => startTemplateEdit(template.id)}>
                            <PenSquare className="w-4 h-4 mr-2" />
                            Редактировать
                          </Button>
                        )}
                      </div>
                    ))}
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <section className="grid gap-6 lg:grid-cols-3">
              <Card className="border border-border/60 bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TbMassage className="w-4 h-4 text-primary" />
                    {editingServiceId ? "Редактирование услуги" : "Новая услуга"}
                  </CardTitle>
                  <CardDescription>
                    {isGlobalManager
                      ? "Суперадмин может добавлять услуги в любой филиал."
                      : "Менеджер управляет услугами только своего филиала."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={submitService}>
                    <div className="space-y-2">
                      <Label>Филиал</Label>
                      <Select
                        value={selectedServiceCompanyId}
                        onValueChange={handleServiceCompanyChange}
                        disabled={!isGlobalManager || allowedCompanies.length <= 1}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите филиал" />
                        </SelectTrigger>
                        <SelectContent>
                          {allowedCompanies.map((company) => (
                            <SelectItem key={company.id} value={company.id}>
                              {company.label} — {company.address}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Название услуги</Label>
                      <Input
                        placeholder="SPA-ритуал «Нирвана»"
                        value={serviceForm.name}
                        onChange={(event) => handleServiceFieldChange("name")(event.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Краткое описание</Label>
                      <Textarea
                        rows={3}
                        placeholder="Что входит в процедуру, какие ощущения"
                        value={serviceForm.description}
                        onChange={(event) => handleServiceFieldChange("description")(event.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Продолжительность, мин</Label>
                        <Input
                          type="number"
                          min={15}
                          placeholder="90"
                          value={serviceForm.durationMinutes}
                          onChange={(event) => handleServiceFieldChange("durationMinutes")(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-2 flex items-center justify-between">
                          <Label htmlFor="service-discount">Скидка, %</Label>
                          <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                            <Checkbox
                              id="service-has-discount"
                              checked={serviceForm.hasDiscount}
                              onCheckedChange={(checked) => toggleServiceDiscount(Boolean(checked))}
                            />
                            Включить
                          </label>
                        </div>
                        <Input
                          id="service-discount"
                          type="number"
                          min={0}
                          max={100}
                          placeholder="10"
                          value={serviceForm.discountPercent}
                          disabled={!serviceForm.hasDiscount}
                          onChange={(event) => handleServiceFieldChange("discountPercent")(event.target.value)}
                        />
                       
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Стоимость, ₸</Label>
                      <Input
                        type="number"
                        min={1000}
                        placeholder="65000"
                        value={serviceForm.price}
                        onChange={(event) => handleServiceFieldChange("price")(event.target.value)}
                      />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button type="submit" disabled={serviceSubmitting || !selectedServiceCompanyId} className="flex-1">
                        {serviceSubmitting ? "Сохраняем..." : editingServiceId ? "Обновить" : "Добавить"}
                      </Button>
                      {editingServiceId && (
                        <Button type="button" variant="outline" onClick={resetServiceForm}>
                          Отмена
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border border-border/60 bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Список услуг филиала</CardTitle>
                  <CardDescription>Показываем активные и скрытые услуги. Скрытые отмечены в статусе.</CardDescription>
                </CardHeader>
                <CardContent>
                  {!selectedServiceCompanyId && (
                    <p className="text-sm text-muted-foreground">Выберите филиал, чтобы увидеть услуги.</p>
                  )}

                  {selectedServiceCompanyId && managedServicesLoading && (
                    <div className="space-y-3">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={`service-skeleton-${index}`} className="h-24 rounded-2xl bg-muted/30 animate-pulse" />
                      ))}
                    </div>
                  )}

                  {selectedServiceCompanyId && !managedServicesLoading && managedServices.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      Ещё нет услуг. Добавьте первую позицию через форму слева.
                    </p>
                  )}

                  {selectedServiceCompanyId && !managedServicesLoading && managedServices.length > 0 && (
                    <div className="space-y-3">
                      {managedServices.map((service) => (
                        <div
                          key={service.id}
                          className="border border-border rounded-2xl p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                        >
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold">{service.name}</p>
                              {typeof service.discountPercent === "number" && service.discountPercent > 0 && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                  -{service.discountPercent}%
                                </span>
                              )}
                              {service.isActive === false && <span className="text-xs px-2 py-0.5 rounded-full border">Неактивно</span>}
                            </div>
                            {service.description && (
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            )}
                            <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                              <span>Стоимость: {formatCurrency(service.price)}</span>
                              {service.durationMinutes ? <span>{service.durationMinutes} мин.</span> : null}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => startServiceEdit(service)}
                              aria-label="Редактировать услугу"
                            >
                              <PenSquare className="w-4 h-4" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveService(service.id)}
                              aria-label="Удалить услугу"
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          <TabsContent value="branches" className="space-y-8">
            <Card className="border border-border/60 bg-card shadow-sm">
              <CardHeader>
                <CardTitle>Редактор филиала</CardTitle>
                <CardDescription>
                  Суперадмин может обновить любой филиал, менеджер — только свой.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!allowedCompanies.length ? (
                  <p className="text-sm text-muted-foreground">Нет доступных филиалов для редактирования.</p>
                ) : (
                  <form className="space-y-6" onSubmit={submitBranchForm}>
                    {allowedCompanies.length > 1 && (
                      <div className="space-y-2">
                        <Label>Выберите филиал</Label>
                        <Select
                          value={selectedBranchId}
                          onValueChange={handleBranchSelect}
                          disabled={branchLoading}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите филиал" />
                          </SelectTrigger>
                          <SelectContent>
                            {allowedCompanies.map((company) => (
                              <SelectItem key={company.id} value={company.id}>
                                {company.label} — {company.address}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {branchError && <p className="text-sm text-destructive">{branchError}</p>}

                    {branchLoading && (
                      <div className="space-y-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div key={`branch-skeleton-${index}`} className="h-14 rounded-xl bg-muted/30 animate-pulse" />
                        ))}
                      </div>
                    )}

                    {!branchLoading && selectedBranchId !== "all" ? (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Название</Label>
                            <Input
                              value={branchForm.label}
                              onChange={(event) => handleBranchFieldChange("label")(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Телефон</Label>
                            <Input
                              value={branchForm.phone}
                              onChange={(event) => handleBranchFieldChange("phone")(event.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Адрес</Label>
                          <Input
                            value={branchForm.address}
                            onChange={(event) => handleBranchFieldChange("address")(event.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Email</Label>
                            <Input
                              type="email"
                              value={branchForm.email}
                              onChange={(event) => handleBranchFieldChange("email")(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Менеджер филиала</Label>
                            <Input
                              value={branchForm.managerName}
                              onChange={(event) => handleBranchFieldChange("managerName")(event.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Юр. наименование</Label>
                          <Input
                            value={branchForm.nameCompany}
                            onChange={(event) => handleBranchFieldChange("nameCompany")(event.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>БИН</Label>
                            <Input
                              value={branchForm.binCompany}
                              onChange={(event) => handleBranchFieldChange("binCompany")(event.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>БИК</Label>
                            <Input
                              value={branchForm.bikCompany}
                              onChange={(event) => handleBranchFieldChange("bikCompany")(event.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Юридический адрес</Label>
                          <Input
                            value={branchForm.officialAddress}
                            onChange={(event) => handleBranchFieldChange("officialAddress")(event.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>OneVision Merchant ID (MID)</Label>
                            <Input
                              value={branchForm.companyOneVisionId}
                              onChange={(event) => handleBranchFieldChange("companyOneVisionId")(event.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">
                              Значение из личного кабинета OneVision, используется как <code>merchant_id</code>.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>OneVision API Key</Label>
                            <Input
                              value={branchForm.keyOneVision}
                              onChange={(event) => handleBranchFieldChange("keyOneVision")(event.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">
                              Ключ магазина для формирования токена авторизации (Bearer).
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>OneVision Secret</Label>
                            <Input
                              value={branchForm.passOneVision}
                              onChange={(event) => handleBranchFieldChange("passOneVision")(event.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">
                              Секрет магазина, используется для подписи запросов/ответов.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>OneVision Service ID (SID)</Label>
                            <Input
                              value={branchForm.companyNameOneVisionId}
                              onChange={(event) =>
                                handleBranchFieldChange("companyNameOneVisionId")(event.target.value)
                              }
                            />
                            <p className="text-xs text-muted-foreground">
                              Идентификатор сервиса для поля <code>service_id</code>.
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Часовой пояс</Label>
                            <Input
                              value={branchForm.timezone}
                              onChange={(event) => handleBranchFieldChange("timezone")(event.target.value)}
                              placeholder="Asia/Almaty"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Статус</Label>
                            <Select value={branchForm.status} onValueChange={handleBranchFieldChange("status")}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Активен</SelectItem>
                                <SelectItem value="inactive">Неактивен</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button type="submit" disabled={branchSaving}>
                            {branchSaving ? "Сохраняем..." : "Сохранить изменения"}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => selectedBranchId && loadBranchDetails(selectedBranchId)}
                            disabled={branchLoading}
                          >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Обновить
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          Выберите филиал из списка, чтобы изменить его данные.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
