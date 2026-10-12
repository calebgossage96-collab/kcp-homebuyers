import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AnimatedSection from "./components/AnimatedSection";
import ContactForm from "./components/ContactForm";
import FaqAccordion from "./components/FaqAccordion";
import Link from "next/link";

const PHONE = "(678) 904-2314";
const PHONE_HREF = "tel:6789042314";
const EMAIL = "caleb@kcpbuyshouses.com";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Property",
    desc: "Fill out our quick form or give us a call. Share basic details about your home — condition, location, and your timeline.",
  },
  {
    num: "02",
    title: "Receive Your Cash Offer",
    desc: "We review your property and present a fair, no-obligation cash offer within 24 hours. No pressure, ever.",
  },
  {
    num: "03",
    title: "Close on Your Schedule",
    desc: "Choose your closing date — as fast as 7 days or whenever works for you. We handle all the paperwork.",
  },
];

const benefits = [
  {
    title: "Fast Cash Closing",
    desc: "Skip months of waiting. We close in as little as 7 days so you can move forward on your schedule, not the market's.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Sell Completely As-Is",
    desc: "Don't spend a dollar on repairs, cleaning, or staging. We buy homes in any condition — damaged, dated, or distressed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "No Fees or Commissions",
    desc: "Keep every dollar of your offer. No agent commissions, no closing cost surprises, and no hidden charges — ever.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=75", alt: "Yellow craftsman home" },
  { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=75", alt: "Brick single-family home" },
  { src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=600&q=75", alt: "Cottage with picket fence" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=600&q=75", alt: "Ranch-style home" },
  { src: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=600&q=75", alt: "Single-family home" },
  { src: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=600&q=75", alt: "Neighborhood home" },
];

const testimonials = [
  {
    name: "Marcus T.",
    location: "Atlanta, GA",
    text: "KCP Homebuyers made the whole process simple. I inherited a property that needed a lot of work, and they gave me a fair offer and closed in under two weeks. No hassle at all.",
    stars: 5,
  },
  {
    name: "Sandra R.",
    location: "Phoenix, AZ",
    text: "I was facing foreclosure and didn't know what to do. KCP stepped in, gave me an offer within 24 hours, and I walked away with cash in hand. Truly a lifesaver.",
    stars: 5,
  },
  {
    name: "Derek & Alicia M.",
    location: "Tampa, FL",
    text: "We were relocating for work and couldn't wait months for a traditional sale. KCP gave us a solid offer and we closed exactly when we needed to. Highly recommend.",
    stars: 5,
  },
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <Hero />

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">
              Simple Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <div className="gold-line" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Selling your home to KCP Homebuyers is straightforward. Three steps, zero surprises.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-6xl font-extrabold text-gold-200 mb-4 leading-none group-hover:text-gold-300 transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section id="benefits" className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The KCP Advantage
            </h2>
            <div className="gold-line" />
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Three reasons homeowners across the country trust KCP Homebuyers.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/6 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-gold-500/40 group"
              >
                <div className="w-14 h-14 bg-gold-500/15 rounded-2xl flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500/25 transition-colors duration-300">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-white/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                  alt="KCP Homebuyers team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">Serving All 50 States</div>
                    <div className="text-white/55 text-sm">Experienced real estate professionals</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">
                About KCP Homebuyers
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                Real People. Fair Offers. Honest Deals.
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-5 text-navy-700">
                A Koinonia Capital Partners LLC Company
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                KCP Homebuyers is the real estate acquisition division of Koinonia Capital Partners LLC. We believe selling your home should be simple, fast, and fair — and our team of experienced professionals makes that possible nationwide, in any condition, on any timeline.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Whether you&apos;re facing foreclosure, dealing with a difficult property, going through a life transition, or simply need to sell quickly, we&apos;re here to help with no pressure and no games.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  ["100+", "Homes Purchased"],
                  ["24 hrs", "Offer Turnaround"],
                  ["7 Days", "Fastest Close"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-extrabold text-navy-900">{stat}</div>
                    <div className="text-gray-400 text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                Get Your Cash Offer
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">
              Properties We Buy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              We Buy All Types of Homes
            </h2>
            <div className="gold-line" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From fixer-uppers to turnkey properties — condition is never a barrier.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 lg:py-32 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">
              Homeowner Stories
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-line" />
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/6 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gold-400 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-widest text-sm mb-3">
              Common Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="gold-line" />
          </AnimatedSection>
          <AnimatedSection>
            <FaqAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=30)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gold-400 font-semibold uppercase tracking-widest text-sm mb-3">
              Free. No Obligation.
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get Your Cash Offer Today
            </h2>
            <div className="gold-line" />
            <p className="text-white/55 text-lg">
              Fill out the form and a KCP Homebuyers specialist will contact you within 24 hours with a fair cash offer.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white/6 backdrop-blur-sm border border-white/12 rounded-3xl p-8 sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="bg-navy-950 text-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-extrabold text-white">KCP</span>
                <span className="text-gold-400 text-xl font-semibold ml-1">Homebuyers</span>
              </div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Koinonia Capital Partners LLC</p>
              <p className="text-sm leading-relaxed mb-5">
                We buy houses fast, as-is, for cash — nationwide. No repairs, no fees, no hassle.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a href={PHONE_HREF} className="hover:text-gold-400 transition-colors">{PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold-400 transition-colors">{EMAIL}</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["How It Works", "#how-it-works"],
                  ["Benefits", "#benefits"],
                  ["About Us", "#about"],
                  ["FAQ", "#faq"],
                  ["Get My Offer", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-gold-400 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Legal</h4>
              <ul className="space-y-3 text-sm mb-8">
                <li>
                  <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg"
              >
                Get My Free Cash Offer
              </a>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/35">
            <p>&copy; {new Date().getFullYear()} KCP Homebuyers &middot; A Koinonia Capital Partners LLC Company</p>
            <p>KCP Homebuyers is a real estate investment company. We buy homes directly from homeowners.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
