// Meta Pixel Conversion Tracking
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

type PixelEvent =
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Contact'
  | 'Lead';

interface PixelData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
}

export function trackPixel(event: PixelEvent, data?: PixelData) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event, data || {});
  }
}

export function trackOrder(name: string, mobile: string, quantity: number, extraQty: number = 0) {
  const totalItems = quantity + extraQty;
  const totalValue = (650 * quantity) + (349 * extraQty);

  // InitiateCheckout when form is shown
  trackPixel('InitiateCheckout', {
    content_name: 'BioGlow 4 in 1 Combo',
    content_category: 'Skincare',
    content_ids: ['COMBO-001'],
    content_type: 'product',
    value: totalValue,
    currency: 'BDT',
    num_items: totalItems,
  });

  // Purchase on order submit
  setTimeout(() => {
    trackPixel('Purchase', {
      value: totalValue,
      currency: 'BDT',
      content_name: 'BioGlow 4 in 1 Combo',
      content_type: 'product',
      num_items: totalItems,
    });
  }, 300);
}
