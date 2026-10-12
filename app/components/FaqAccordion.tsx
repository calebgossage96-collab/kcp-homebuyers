"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can you close on my house?",
    a: "We can close in as little as 7 days, or we can work around a timeline that suits you — whether that's a week from now or a few months out. You choose the date.",
  },
  {
    q: "Do I need to make any repairs or clean up before selling?",
    a: "Not at all. We purchase homes in any condition — damaged, distressed, outdated, or perfectly maintained. You don't need to spend a dollar or lift a finger on repairs.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "Zero. There are no real estate agent commissions, no closing costs charged to you, and no hidden fees. The cash offer we make is what you walk away with.",
  },
  {
    q: "How do you determine your cash offer?",
    a: "We evaluate your property's current condition, its location, comparable recent sales in the area, and our estimated costs to renovate. We aim to give you the most competitive offer possible.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy single-family homes, multi-family properties, condos, townhomes, vacant land, and more — in any condition, in any state across the U.S.",
  },
  {
    q: "Am I obligated to accept the offer?",
    a: "There is absolutely no obligation. We'll present you with a fair cash offer and you decide — no pressure and no hard feelings if it doesn't work out.",
  },
  {
    q: "Can you buy my house if it's in foreclosure or has liens?",
    a: "Yes. We have experience working with homeowners facing foreclosure, probate, tax liens, code violations, and other complex title situations. We'll help find a path forward.",
  },
  {
    q: "Do I need to move out before closing?",
    a: "No. We'll structure a closing date that gives you time to move out comfortably. We work on your schedule, not ours.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/80 transition-colors duration-200"
          >
            <span className="font-semibold text-navy-900 pr-6 text-base sm:text-lg leading-snug">
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-60" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-100">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
