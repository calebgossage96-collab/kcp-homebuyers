import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, address, askingPrice, condition, timeline, smsConsent } = body;

    if (!name || !email || !address) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.CRM_FORM_URL) {
      try {
        const [firstName, ...rest] = String(name).trim().split(/\s+/);
        const lastName = rest.join(" ") || firstName;
        const notes = [
          askingPrice && `Asking price: ${askingPrice}`,
          condition && `Condition: ${condition}`,
          timeline && `Timeline: ${timeline}`,
        ]
          .filter(Boolean)
          .join(" | ");

        const crmRes = await fetch(process.env.CRM_FORM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            values: {
              field_1791058927309_13: firstName,
              field_1791058927309_14: lastName,
              field_1791058927309_15: email,
              field_1791058927309_16: phone,
              field_1791058927309_17: address,
              field_1791058927309_18: notes,
            },
          }),
        });
        if (!crmRes.ok) {
          console.error("CRM submission failed:", crmRes.status, await crmRes.text());
        }
      } catch (crmErr) {
        console.error("CRM submission error:", crmErr);
      }
    }

    const { data, error } = await resend.emails.send({
      from: "KCP Homebuyers <leads@kcpbuyshouses.com>",
      to: "caleb@kcpbuyshouses.com",
      replyTo: email,
      subject: `New Lead: ${name} — ${address}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a1628; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f5c842; margin: 0; font-size: 22px;">New Home Sale Inquiry</h1>
            <p style="color: #ffffff99; margin: 6px 0 0; font-size: 14px;">KCP Homebuyers — Lead Notification</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Property Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Asking Price</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${askingPrice || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Condition</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${condition || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Timeline</td>
                <td style="padding: 10px 0; color: #111827;">${timeline || "Not provided"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #fffbeb; border-left: 3px solid #f5c842; border-radius: 4px; font-size: 13px; color: #6b7280;">
              ${smsConsent ? "SMS consent given." : "No SMS consent given — do not text this lead."} Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email", detail: error }, { status: 500 });
    }

    console.log("Email sent:", data?.id);
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
