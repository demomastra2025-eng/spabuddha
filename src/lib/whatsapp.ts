export interface WhatsAppPayload {
  phone: string;
  recipientName: string;
  senderName: string;
  amount: number;
  message?: string;
  companyId?: string;
}

export const sendCertificateWhatsApp = async (payload: WhatsAppPayload) => {
  const response = await fetch("/api/preview/whatsapp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: payload.phone,
      recipientName: payload.recipientName,
      senderName: payload.senderName,
      amount: payload.amount,
      message: payload.message,
      companyId: payload.companyId,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Не удалось отправить сообщение в WhatsApp");
    throw new Error(errorText);
  }

  return response.json();
};
