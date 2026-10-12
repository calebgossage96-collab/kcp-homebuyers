"use client";

const PHONE_HREF = "tel:6789042314";
const PHONE = "(678) 904-2314";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/92 via-navy-900/85 to-navy-800/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gold-500/15 border border-gold-500/35 text-gold-400 text-sm font-medium px-5 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          Trusted Cash Home Buyers — Nationwide
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up delay-100">
          We Buy Houses
          <span className="block text-gold-400">Fast. As-Is. For Cash.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/75 mb-12 animate-slide-up delay-200 max-w-2xl mx-auto leading-relaxed">
          No repairs. No commissions. No fees.
          <br className="hidden sm:block" /> Close in as little as{" "}
          <strong className="text-white">7 days</strong> — on your schedule.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-300">
          <button
            onClick={scrollToContact}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-9 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105 animate-gold-pulse"
          >
            Get My Free Cash Offer
          </button>
          <a
            href={PHONE_HREF}
            className="border-2 border-white/55 text-white hover:bg-white hover:text-navy-900 font-bold px-9 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl"
          >
            Call {PHONE}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white/55 text-sm animate-fade-in delay-500">
          {[
            "Close in 7 Days",
            "Any Condition",
            "Zero Fees",
            "Nationwide",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 text-white/35 animate-bounce-scroll">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
