import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KCP Homebuyers",
  description: "KCP Homebuyers privacy policy — how we collect, use, and protect your information.",
};

const COMPANY = "KCP Homebuyers";
const EMAIL = "caleb@kcpbuyshouses.com";
const PHONE = "(678) 904-2314";
const EFFECTIVE_DATE = "July 31, 2026";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>
          <p className="text-white/60 mt-2">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16 prose prose-lg prose-navy max-w-none">
        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY}, operated by Koinonia Capital Partners LLC, (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information you provide when you visit our website or contact us about purchasing your property.
            </p>
            <p className="mt-3">
              By using our website or submitting a form, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or submit your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Information We Collect</h2>
            <p>We collect information you voluntarily provide to us, including:</p>
            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
              <li><strong>Contact Information:</strong> Full name, email address, and phone number.</li>
              <li><strong>Property Information:</strong> Property address, asking price, property condition, and desired timeline to sell.</li>
              <li><strong>Communication Records:</strong> Records of your communications with us, including emails, phone calls, and text messages.</li>
              <li><strong>Automatically Collected Data:</strong> IP address, browser type, device type, pages visited, and time spent on our website (via cookies and similar technologies).</li>
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal information such as Social Security numbers, financial account numbers, or government-issued ID numbers unless specifically required to complete a real estate transaction and you provide it directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
              <li>Contact you regarding your property inquiry and to present a cash offer.</li>
              <li>Send you information about our services that may be relevant to your situation.</li>
              <li>Communicate with you via phone, email, and text message (SMS/MMS), subject to your consent.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with applicable legal obligations.</li>
              <li>Prevent fraud and protect the security of our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Text Message (SMS) Communications — A2P Compliance</h2>
            <div className="bg-navy-900/5 border-l-4 border-gold-500 p-5 rounded-r-lg">
              <p className="font-semibold text-navy-900 mb-3">Important Disclosures Regarding Text Message Communications</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
                <li>By providing your phone number and checking the consent box on our contact form, you expressly consent to receive recurring automated and non-automated text messages (SMS/MMS) from {COMPANY} (operated by Koinonia Capital Partners LLC) regarding your property inquiry and related communications with our team.</li>
                <li><strong>Message frequency varies.</strong> You may receive multiple messages per inquiry.</li>
                <li><strong>Message and data rates may apply</strong> based on your mobile carrier plan.</li>
                <li>To opt out at any time, reply <strong>STOP</strong> to any text message you receive from us. After opting out, you will receive a single confirmation message and no further messages.</li>
                <li>To request assistance, reply <strong>HELP</strong> to any text message, or contact us at {EMAIL}.</li>
                <li><strong>Consent is not a condition of receiving a cash offer or any purchase.</strong> You may request a cash offer and receive our services without consenting to receive text messages.</li>
                <li>We will not share your opted-in phone number with third parties for their marketing purposes.</li>
                <li>This program is provided by {COMPANY}. Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
            </div>
            <p className="mt-4">
              If you have questions about our SMS program, contact us at {EMAIL} or call {PHONE}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand where our visitors come from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
            </p>
            <p className="mt-3">
              We may use third-party services such as Google Analytics which set their own cookies. Please refer to those services&apos; privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information to third parties. We may share your information in limited circumstances:</p>
            <p className="mt-3">
              Information you provide in connection with a property inquiry is used to evaluate and respond to your inquiry. We do not share your information with third parties for their marketing or lead-generation purposes. Operational sharing necessary to complete a transaction you request (for example, with a title company) is limited to what is required for that transaction.
            </p>
            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
              <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., email service providers, CRM platforms), provided they agree to keep your information confidential.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect the rights, property, or safety of {COMPANY}, our users, or others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website of any change in ownership.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Inquiry information is typically retained for up to 3 years for business record-keeping purposes. You may request deletion of your information at any time (see Section 9 below).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information, subject to certain legal exceptions.</li>
              <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message we send you, or contact us at {EMAIL}.</li>
              <li><strong>Opt-Out of Email:</strong> Click &ldquo;unsubscribe&rdquo; in any marketing email we send, or contact us directly.</li>
            </ul>

            <div className="mt-5 bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-navy-900 mb-2">California Residents — CCPA Rights</p>
              <p className="text-sm">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, to request deletion of that information, and to opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, contact us at {EMAIL}.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have inadvertently collected information from a child under 18, please contact us immediately at {EMAIL}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. We will notify you of material changes by updating the &ldquo;Effective Date&rdquo; at the top of this page. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
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
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
