import { CartItem, OrderDetails } from "@/types";
import { restaurant } from "@/data";
import { formatPrice } from "@/lib/utils";

export function generateWhatsAppMessage(
  items: CartItem[],
  orderDetails: OrderDetails,
  total: number
): string {
  const orderLines = items
    .map(
      (item) =>
        `${item.quantity} × ${item.food.name} - ${formatPrice(
          item.food.price * item.quantity
        )}`
    )
    .join("\n");

  let message = `Hello ${restaurant.name},\n\nI would like to place an order.\n`;

  if (orderDetails.tableNumber) {
    message += `\nTable: ${orderDetails.tableNumber}`;
  }
  if (orderDetails.name) {
    message += `\nName: ${orderDetails.name}`;
  }

  message += `\n\nOrder:\n${orderLines}\n\nTotal: ${formatPrice(total)}`;

  if (orderDetails.notes) {
    message += `\n\nNotes:\n${orderDetails.notes}`;
  }

  message += `\n\nThank you.`;

  return message;
}

export function generateWhatsAppUrl(
  items: CartItem[],
  orderDetails: OrderDetails,
  total: number
): string {
  const message = generateWhatsAppMessage(items, orderDetails, total);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${restaurant.whatsappNumber}?text=${encoded}`;
}
