import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type Company = { id: string; label: string; address: string };

type FormState = {
  companyId: string;
  amount: number;
  type: "gift" | "procedure";
  recipientName: string;
  senderName: string;
  deliveryMethod: "email" | "whatsapp" | "download";
  deliveryContact: string;
  recipientEmail: string;
  recipientPhone: string;
  message: string;
  validUntil: string;
};

interface CertificateQuickCreateProps {
  companies: Company[];
  onCreated: () => void;
}

const initialState: FormState = {
  companyId: "",
  amount: 0,
  type: "gift",
  recipientName: "",
  senderName: "",
  deliveryMethod: "download",
  deliveryContact: "",
  recipientEmail: "",
  recipientPhone: "",
  message: "",
  validUntil: "",
};

export function CertificateQuickCreate({ companies, onCreated }: CertificateQuickCreateProps) {
  const { session } = useAuth();
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    companyId: companies[0]?.id ?? "",
  }));
  const [submitting, setSubmitting] = useState(false);

  const availableCompanies = useMemo(() => companies, [companies]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!session?.token) {
      toast.error("Недостаточно прав для создания сертификата");
      return;
    }
    if (!form.companyId) {
      toast.error("Выберите филиал");
      return;
    }
    if (!form.recipientName.trim()) {
      toast.error("Укажите имя получателя");
      return;
    }
    if (form.amount <= 0) {
      toast.error("Укажите номинал сертификата");
      return;
    }
    if (form.deliveryMethod !== "download" && !form.deliveryContact.trim()) {
      toast.error("Укажите контакт для выбранного способа доставки");
      return;
    }
    if (!form.recipientEmail.trim() && !form.recipientPhone.trim()) {
      toast.error("Укажите email или телефон получателя");
      return;
    }

    const payload = {
      companyId: form.companyId,
      amount: form.amount,
      type: form.type,
      recipientName: form.recipientName.trim(),
      senderName: form.senderName.trim() || undefined,
      message: form.message.trim() || undefined,
      validUntil: form.validUntil ? new Date(form.validUntil).toISOString() : undefined,
      delivery: {
        method: form.deliveryMethod,
        contact: form.deliveryMethod === "download" ? null : form.deliveryContact.trim() || null,
      },
      client: {
        name: form.recipientName.trim(),
        email: form.recipientEmail.trim() || undefined,
        phone: form.recipientPhone.trim() || undefined,
      },
    };

    setSubmitting(true);
    try {
      const response = await fetch("/api/orders/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message = errorBody?.message ?? "Не удалось создать сертификат";
        toast.error(message);
        return;
      }

      const result = (await response.json().catch(() => ({}))) as { downloadUrl?: string };
      toast.success("Сертификат создан");
      if (result.downloadUrl) {
        window.open(result.downloadUrl, "_blank", "noopener");
      }
      onCreated();
      setForm((prev) => ({ ...initialState, companyId: prev.companyId || companies[0]?.id || "" }));
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "Ошибка при создании сертификата";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle>Быстрое создание сертификата</CardTitle>
        <CardDescription>Создание вручную без оплаты для администратора/менеджера</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Филиал</Label>
            <Select value={form.companyId} onValueChange={(value) => update("companyId", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Выберите филиал" />
              </SelectTrigger>
              <SelectContent>
                {availableCompanies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    <div className="flex flex-col">
                      <span className="font-medium">{company.label}</span>
                      <span className="text-xs text-muted-foreground">{company.address}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Номинал, ₸</Label>
            <Input
              type="number"
              min={0}
              value={form.amount || ""}
              onChange={(e) => update("amount", Number(e.target.value))}
              placeholder="50000"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Тип сертификата</Label>
            <RadioGroup
              value={form.type}
              onValueChange={(value) => update("type", value as FormState["type"])}
              className="flex gap-4"
            >
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-gift">
                <RadioGroupItem value="gift" id="type-gift" /> Подарочный
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer" htmlFor="type-procedure">
                <RadioGroupItem value="procedure" id="type-procedure" /> Процедурный
              </Label>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Действителен до</Label>
            <Input
              type="date"
              value={form.validUntil}
              onChange={(e) => update("validUntil", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Получатель</Label>
            <Input
              value={form.recipientName}
              onChange={(e) => update("recipientName", e.target.value)}
              placeholder="Имя получателя"
            />
          </div>
          <div className="space-y-2">
            <Label>Отправитель</Label>
            <Input
              value={form.senderName}
              onChange={(e) => update("senderName", e.target.value)}
              placeholder="Имя отправителя (необязательно)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Сообщение</Label>
          <Textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Пожелание для получателя"
          />
        </div>

        <div className="space-y-3">
          <Label>Способ доставки</Label>
          <RadioGroup
            value={form.deliveryMethod}
            onValueChange={(value) => update("deliveryMethod", value as FormState["deliveryMethod"])}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <Label className="flex items-center gap-2 cursor-pointer border rounded-lg px-3 py-2" htmlFor="delivery-email">
              <RadioGroupItem value="email" id="delivery-email" /> Email
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer border rounded-lg px-3 py-2" htmlFor="delivery-whatsapp">
              <RadioGroupItem value="whatsapp" id="delivery-whatsapp" /> WhatsApp
            </Label>
            <Label className="flex items-center gap-2 cursor-pointer border rounded-lg px-3 py-2" htmlFor="delivery-download">
              <RadioGroupItem value="download" id="delivery-download" /> Скачать
            </Label>
          </RadioGroup>
          {form.deliveryMethod !== "download" && (
            <Input
              value={form.deliveryContact}
              onChange={(e) => update("deliveryContact", e.target.value)}
              placeholder={form.deliveryMethod === "email" ? "email@example.com" : "+7700..."}
            />
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Email получателя</Label>
            <Input
              type="email"
              value={form.recipientEmail}
              onChange={(e) => update("recipientEmail", e.target.value)}
              placeholder="email@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label>Телефон получателя</Label>
            <Input
              value={form.recipientPhone}
              onChange={(e) => update("recipientPhone", e.target.value)}
              placeholder="+7700..."
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Создаём..." : "Создать сертификат"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
