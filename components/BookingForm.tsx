"use client";

import { useState, useTransition } from "react";
import {
  FORMSPREE_ENDPOINT,
  modeOptions,
  payment,
  serviceOptions,
  type BookingRequest,
} from "@/lib/booking";

const steps = ["Your details", "Payment", "Confirm"];

const fieldClass =
  "w-full appearance-none rounded-none border-0 border-b border-brand/20 bg-transparent px-0 py-3 text-base text-brand placeholder:text-brand/40 transition-colors focus:border-brand focus:outline-none focus:ring-0";
const labelClass = "block text-xs font-medium uppercase text-brand/60";
const headingClass = "font-heading text-3xl font-medium tracking-[-0.03em] text-brand sm:text-4xl";
const primaryButton =
  "bg-brand px-7 py-4 font-medium text-white transition-colors hover:bg-accent disabled:opacity-60";
const secondaryButton =
  "border border-brand/20 px-7 py-4 font-medium text-brand transition-colors hover:border-brand";

const empty: BookingRequest = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  service: "",
  mode: "",
  matter: "",
  payerName: "",
};

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-4 text-brand/60"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<BookingRequest>(empty);
  const [paid, setPaid] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const update =
    (key: keyof BookingRequest) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(payment.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the number is still visible to copy by hand.
    }
  };

  const confirm = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New consultation booking: ${data.name}`,
            _replyto: data.email,
            "Full name": data.name,
            Organisation: data.organisation || "N/A",
            Email: data.email,
            "Phone / WhatsApp": data.phone,
            Service: data.service,
            "Consultation mode": data.mode,
            Matter: data.matter,
            "Paid from account name": data.payerName,
            "Payment confirmed": `Yes, ${payment.fee} to ${payment.bank} ${payment.accountNumber}`,
          }),
        });
        if (res.ok) setDone(true);
        else setError("We couldn't submit your booking. Please try again in a moment.");
      } catch {
        setError("We couldn't reach the server. Check your connection and try again.");
      }
    });
  };

  if (done) {
    return (
      <div className="border-t border-brand pt-10">
        <p className="text-xs font-medium uppercase text-brand/60">Request received</p>
        <h3 className={`mt-4 ${headingClass}`}>Thank you, {data.name.split(" ")[0]}.</h3>
        <p className="mt-4 max-w-lg text-base text-brand/70">
          Once we confirm your payment, your booking link will be sent to{" "}
          <span className="text-brand">{data.email}</span> so you can pick a time for your
          consultation.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ol className="grid grid-cols-3">
        {steps.map((label, i) => (
          <li
            key={label}
            className={`border-t pt-4 text-xs font-medium uppercase transition-colors ${
              i <= step ? "border-brand text-brand" : "border-brand/15 text-brand/40"
            }`}
          >
            <span className="mr-2">{String(i + 1).padStart(2, "0")}</span>
            <span className="hidden sm:inline">{label}</span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(1);
          }}
          className="mt-12"
        >
          <h3 className={headingClass}>Tell us about yourself</h3>

          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Full name *</label>
              <input id="name" required autoComplete="name" value={data.name} onChange={update("name")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="organisation" className={labelClass}>Organisation</label>
              <input id="organisation" autoComplete="organization" value={data.organisation} onChange={update("organisation")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input id="email" type="email" required autoComplete="email" value={data.email} onChange={update("email")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone / WhatsApp *</label>
              <input id="phone" type="tel" required autoComplete="tel" value={data.phone} onChange={update("phone")} className={fieldClass} />
            </div>
            <div className="relative">
              <label htmlFor="service" className={labelClass}>Service needed *</label>
              <select id="service" required value={data.service} onChange={update("service")} className={`${fieldClass} pr-6 ${data.service ? "" : "text-brand/40"}`}>
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((o) => (
                  <option key={o} className="text-brand">{o}</option>
                ))}
              </select>
              <Chevron />
            </div>
            <div className="relative">
              <label htmlFor="mode" className={labelClass}>Consultation mode *</label>
              <select id="mode" required value={data.mode} onChange={update("mode")} className={`${fieldClass} pr-6 ${data.mode ? "" : "text-brand/40"}`}>
                <option value="" disabled>Select a mode</option>
                {modeOptions.map((o) => (
                  <option key={o} className="text-brand">{o}</option>
                ))}
              </select>
              <Chevron />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="matter" className={labelClass}>Briefly describe your matter *</label>
              <textarea id="matter" required rows={4} value={data.matter} onChange={update("matter")} className={`${fieldClass} resize-none`} />
            </div>
          </div>

          <button type="submit" className={`mt-10 ${primaryButton}`}>Continue to Payment</button>
        </form>
      )}

      {step === 1 && (
        <div className="mt-12">
          <h3 className={headingClass}>Make your payment</h3>
          <p className="mt-4 max-w-lg text-base text-brand/70">
            Transfer the consultation fee to the account below to secure your session.
          </p>

          <dl className="mt-10 border-t border-brand/10">
            {[
              ["Bank", payment.bank],
              ["Account name", payment.accountName],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b border-brand/10 py-5">
                <dt className={labelClass}>{label}</dt>
                <dd className="text-right text-base font-medium text-brand">{value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 border-b border-brand/10 py-5">
              <dt className={labelClass}>Account number</dt>
              <dd className="flex items-center gap-4">
                <span className="font-heading text-2xl font-medium tracking-[0.08em] text-brand sm:text-3xl">
                  {payment.accountNumber}
                </span>
                <button
                  type="button"
                  onClick={copyAccount}
                  className="text-xs font-medium uppercase text-brand/60 underline underline-offset-4 transition-colors hover:text-accent"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-brand/10 py-5">
              <dt className={labelClass}>Fee</dt>
              <dd className="text-base font-medium text-brand">
                {payment.fee} <span className="font-normal text-brand/60">{payment.feeUnit}</span>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(0)} className={secondaryButton}>Back</button>
            <button type="button" onClick={() => setStep(2)} className={primaryButton}>I&apos;ve Made the Payment</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={confirm} className="mt-12">
          <h3 className={headingClass}>Confirm your payment</h3>
          <p className="mt-4 max-w-lg text-base text-brand/70">
            Have you paid {payment.fee} to {payment.bank} {payment.accountNumber} ({payment.accountName})?
          </p>

          <div className="mt-10">
            <label htmlFor="payerName" className={labelClass}>Name on the account you paid from *</label>
            <input id="payerName" required value={data.payerName} onChange={update("payerName")} className={fieldClass} />
          </div>

          <label className="mt-8 flex cursor-pointer items-start gap-3 text-base text-brand">
            <input
              type="checkbox"
              required
              checked={paid}
              onChange={(e) => setPaid(e.target.checked)}
              className="mt-1 size-4 shrink-0 accent-brand"
            />
            Yes, I have paid {payment.fee} for my consultation.
          </label>

          <p className="mt-6 text-sm text-brand/60">
            After we confirm your payment, your booking link will be sent to {data.email}.
          </p>

          {error && <p className="mt-4 text-sm text-red-700" role="alert">{error}</p>}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className={secondaryButton}>Back</button>
            <button type="submit" disabled={pending} className={primaryButton}>
              {pending ? "Submitting…" : "Confirm Booking"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
