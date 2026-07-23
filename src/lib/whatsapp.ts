// WhatsApp utility functions
import { config } from "./config";

export function getWhatsAppUrl(message: string): string {
  const phone = config.whatsapp.number.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  if (typeof window !== "undefined") {
    window.open(getWhatsAppUrl(message), "_blank");
  }
}
