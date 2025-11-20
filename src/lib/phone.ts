export function formatPhoneDisplay(value: string | null | undefined) {
  if (!value) {
    return "";
  }
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) {
    return "";
  }
  const normalized = digits.replace(/^8/, "7");
  const match = normalized.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (!match) {
    return normalized;
  }
  const [, a, b, c, d] = match;
  return `+7${a}${b}${c}${d}`;
}

export function normalizePhoneInput(value: string) {
  return value.replace(/\D/g, "").slice(0, 11);
}
