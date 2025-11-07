export function generateCertificateCode(): string {
  const random = Math.random().toString(36).toUpperCase().slice(2, 8);
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  return `${timestamp}-${random}`;
}
