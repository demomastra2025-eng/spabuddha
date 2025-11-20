export type CertificateType = "gift" | "procedure";
export type DeliveryMethod = "email" | "whatsapp" | "download";

export interface SelectedService {
  id: string;
  name: string;
  branchId: string;
  price: number;
  discountPercent?: number;
  currency?: string;
  durationMinutes?: number | null;
}

export const DEFAULT_VALIDITY_MONTHS = 3;

export interface CertificateData {
  // Step 1
  branch: string;
  type: CertificateType;
  amount: number;
  selectedServices: SelectedService[];
  purchaseDate: Date;
  code?: string | null;

  // Step 2
  senderName: string;
  recipientName: string;
  message: string;
  validUntil: Date | undefined;
  phone: string;
  email: string;

  // Step 3
  templateId: string | null;
  templateBackgroundUrl?: string | null;
  templateTextColor?: string | null;
  templateName?: string | null;

  // Step 4
  deliveryMethod: DeliveryMethod;
  deliveryContact: string;
}
