import { SelectedService } from "@/types/certificates";

export function getDiscountedPrice(price: number, discountPercent?: number) {
  if (!discountPercent) {
    return price;
  }
  const multiplier = 1 - discountPercent / 100;
  return Math.round(price * multiplier);
}

export function calculateServicesTotal(services: SelectedService[]) {
  return services.reduce((total, service) => total + getDiscountedPrice(service.price, service.discountPercent), 0);
}
