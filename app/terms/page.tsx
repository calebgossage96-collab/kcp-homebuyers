import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | KCP Homebuyers",
  description: "KCP Homebuyers terms of service — your agreement for using our website and services.",
};

const COMPANY = "KCP Homebuyers";
const EMAIL = "caleb@kcpbuyshouses.com";
const PHONE = "(678) 904-2314";
const EFFECTIVE_DATE = "July 31, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors mb-6 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Terms of Service</h1>
          <p className="text-white/60 mt-2">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {COMPANY} website (the &ldquo;Site&rdquo;) or submitting any inquiry or form through the Site, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). The Site is operated by Koinonia Capital Partners LLC. If you do not agree to these Terms, please do not use the Site.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, users, and others who access or use the Site. We reserve the right to update these Terms at any time. Continued use of the Site following any changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Description of Services</h2>
            <p>
              {COMPANY} is a real estate investment company that purchases residential and commercial properties directly from property owners for cash. The Site is provided as an informational resource for homeowners interested in selling their property to us. We are not a licensed real estate brokerage and do not act as a real estate agent or broker in any transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. No Guarantee of Purchase</h2>
            <p>
              Submitting an inquiry, completing a form, or receiving a preliminary cash offer does not constitute a binding offer or guarantee of purchase. Any offer made by {COMPANY} is subject to a full property review, inspection, title search, and execution of a written purchase agreement signed by both parties. We reserve the right to withdraw or modify any offer at any time prior to execution of a signed purchase agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. No Obligation</h2>
            <p>
              You are under no obligation to accept any offer from {COMPANY}. Submitting a form or speaking with one of our representatives does not obligate you to proceed with any transaction. You may withdraw your inquiry at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. SMS and Telephone Communications</h2>
            <div className="bg-navy-900/5 border-l-4 border-gold-500 p-5 rounded-r-lg">
              <p className="font-semibold text-navy-900 mb-3">Text Message Program</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
                <li>By opting in to receive text messages from {COMPANY} (operated by Koinonia Capital Partners LLC), you agree to receive recurring automated and non-automated text messages (SMS/MMS) from us at the phone number you provided, regarding your property inquiry and related communications with our team — such as follow-ups on your cash-offer request, appointment reminders, and responses from our specialists.</li>
                <li><strong>Message frequency varies</strong> based on your inquiry and engagement with our team.</li>
                <li><strong>Message and data rates may apply.</strong> You are responsible for all charges from your mobile carrier.</li>
                <li>To opt out at any time, reply <strong>STOP</strong> to any text message from us. You will receive a single confirmation of your opt-out and will receive no further messages.</li>
                <li>To request help, reply <strong>HELP</strong> to any text message or contact us at {EMAIL}.</li>
                <li><strong>Consent to receive text messages is not required to receive a cash offer or to sell your property to us.</strong></li>
                <li>Carriers are not responsible for delayed or undelivered messages.</li>
                <li>Supported carriers include, but are not limited to: AT&amp;T, T-Mobile, Verizon, Sprint, Boost, Cricket, MetroPCS, US Cellular, and similar carriers.</li>
              </ul>
            </div>
            <p className="mt-4">
              For questions about our text-message program, contact: {EMAIL} or {PHONE}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Accuracy of Information</h2>
            <p>
              You agree that all information you provide to {COMPANY} is accurate, current, and complete to the best of your knowledge. Providing false or misleading information about a property may result in revocation of any offer and may have legal consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Intellectual Property</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of {COMPANY} or its content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
              <li>Use the Site for any unlawful purpose or in violation of any applicable laws or regulations.</li>
              <li>Submit false, misleading, or fraudulent information.</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or its related systems.</li>
              <li>Interfere with or disrupt the operation of the Site.</li>
              <li>Use automated scripts, bots, or scrapers to collect information from the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Disclaimer of Warranties</h2>
            <p>
              THE SITE AND ALL CONTENT, SERVICES, AND INFORMATION PROVIDED THROUGH THE SITE ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="mt-3">
              {COMPANY} does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {COMPANY.toUpperCase()}, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF {COMPANY.toUpperCase()} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              In no event shall {COMPANY}&apos;s total liability to you for all claims arising from or related to the Site exceed one hundred dollars ($100.00).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless {COMPANY} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your provision of false or misleading information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or your use of the Site shall first be attempted to be resolved through good-faith negotiation. If negotiation is unsuccessful, any disputes shall be resolved by binding arbitration under the rules of the American Arbitration Association. You waive any right to a jury trial or to participate in a class action lawsuit or class-wide arbitration.
            </p>
            <p className="mt-3">
              Nothing in this section prevents either party from seeking injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which {COMPANY} is headquartered, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">15. Entire Agreement</h2>
            <p>
              These Terms, together with our{" "}
              <Link href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</Link>,
              constitute the entire agreement between you and {COMPANY} with respect to your use of the Site and supersede all prior agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">16. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="bg-navy-900/5 rounded-2xl p-6 mt-4">
              <p className="font-bold text-navy-900 text-lg">{COMPANY}</p>
              <p className="mt-2">
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-gold-600 hover:underline">{EMAIL}</a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:6789042314" className="text-gold-600 hover:underline">{PHONE}</a>
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8 px-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
        <p className="mt-2">{COMPANY} is operated by Koinonia Capital Partners LLC.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
