import { services } from "@/lib/services";

// Booking requests are emailed to the firm through Formspree.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykddkwq";

export const payment = {
  bank: "OPay",
  accountName: "SUNDAY IVBIOBE OGHAYEI",
  accountNumber: "6423907443",
  fee: "₦25,000",
  feeUnit: "per hour",
};

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];

export const modeOptions = ["Virtual", "In-Person"];

export type BookingRequest = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  service: string;
  mode: string;
  matter: string;
  payerName: string;
};
