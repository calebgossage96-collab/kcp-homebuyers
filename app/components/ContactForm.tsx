"use client";
import { useState } from "react";
import Link from "next/link";

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  askingPrice: string;
  condition: string;
  timeline: string;
  smsConsent: boolean;
}

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  askingPrice: "",
  condition: "",
  timeline: "",
  smsConsent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-10 h-10 text-navy-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">
          Request Received!
        </h3>
        <p className="text-white/65 text-lg max-w-md mx-auto">
          A KCP Homebuyers specialist will reach out within 24 hours with your
          no-obligation cash offer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/75 text-sm font-medium mb-2">
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className="input-dark"
          />
        </div>
        <div>
          <label className="block text-white/75 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="input-dark"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-white/75 text-sm font-medium mb-2">
          Email Address <span className="text-gold-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          className="input-dark"
        />
      </div>

      {/* Property Address */}
      <div>
        <label className="block text-white/75 text-sm font-medium mb-2">
          Property Address <span className="text-gold-400">*</span>
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="123 Main St, City, State, ZIP"
          className="input-dark"
        />
      </div>

      {/* Condition + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/75 text-sm font-medium mb-2">
            Property Condition
          </label>
          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="input-dark"
          >
            <option value="">Select condition...</option>
            <option value="excellent">Excellent — Move-in ready</option>
            <option value="good">Good — Minor repairs needed</option>
            <option value="fair">Fair — Significant updates needed</option>
            <option value="poor">Poor — Major repairs needed</option>
          </select>
        </div>
        <div>
          <label className="block text-white/75 text-sm font-medium mb-2">
            Desired Timeline
          </label>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="input-dark"
          >
            <option value="">Select timeline...</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">1 – 3 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Asking Price */}
      <div>
        <label className="block text-white/75 text-sm font-medium mb-2">
          Asking Price{" "}
          <span className="text-white/40 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          name="askingPrice"
          value={form.askingPrice}
          onChange={handleChange}
          placeholder="$000,000"
          className="input-dark"
        />
      </div>

      {/* ── A2P SMS Consent ───────────────────────────────────────────
          TCPA / A2P 10DLC compliant:
          • Unchecked by default
          • Identifies who is messaging (KCP Homebuyers)
          • States message type and frequency
          • "Message and data rates may apply"
          • STOP / HELP opt-out instructions
          • Consent is NOT a condition of service
          • Links to Privacy Policy and Terms of Service
      ──────────────────────────────────────────────────────────────── */}
      <div className="bg-white/6 border border-white/15 rounded-2xl p-5">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="smsConsent"
            checked={form.smsConsent}
            onChange={handleChange}
            className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-white/30 accent-gold-500"
            style={{ accentColor: "#c9a227" }}
          />
          <span className="text-white/65 text-sm leading-relaxed">
            By checking this box, you agree to receive text messages from{" "}
            <strong className="text-white font-semibold">KCP Homebuyers</strong>{" "}
            (operated by Koinonia Capital Partners LLC) about your property
            inquiry — including follow-ups on your cash-offer request,
            appointment reminders, and messages from our team. Message
            frequency varies. Message &amp; data rates may apply. Reply{" "}
            <strong className="text-white">STOP</strong> to opt out. For
            assistance, text <strong className="text-white">HELP</strong> or
            visit our website at{" "}
            <a
              href="https://kcpbuyshouses.com"
              target="_blank"
              className="text-gold-400 underline hover:text-gold-300 transition-colors"
            >
              https://kcpbuyshouses.com
            </a>
            . Consent is not a condition of receiving a cash offer. View our{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-gold-400 underline hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              target="_blank"
              className="text-gold-400 underline hover:text-gold-300 transition-colors"
            >
              Terms of Service
            </Link>
            .
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-navy-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Cash Offer →"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-center text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      {/* Fine print */}
      <p className="text-white/35 text-xs text-center leading-relaxed">
        By submitting, you agree to our{" "}
        <Link
          href="/terms"
          target="_blank"
          className="underline hover:text-white/55 transition-colors"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          target="_blank"
          className="underline hover:text-white/55 transition-colors"
        >
          Privacy Policy
        </Link>
        . KCP Homebuyers will not sell or share your personal information with
        third parties for their marketing purposes.
      </p>
    </form>
  );
}
