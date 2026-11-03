
import { Resend } from "resend";

const recipient = "ultimatehealthdpc@gmail.com";

function clean(value, maxLength) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export default async function handler(req, res) {
  res.setHeader("Allow", "POST");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const {
    name,
    phone,
    email,
    treatment,
    website,
    source,
  } = req.body || {};

  // Honeypot: do not send spam submissions.
  if (website) {
    return res.status(200).json({ success: true });
  }

  const submission = {
    name: clean(name, 120),
    phone: clean(phone, 40),
    email: clean(email, 254),
    treatment: clean(treatment, 160),
    source: clean(source, 80),
  };

  const validEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email);

  if (
    !submission.name ||
    !submission.phone ||
    !validEmail ||
    !submission.treatment
  ) {
    return res.status(400).json({
      error: "Please complete all fields.",
    });
  }

  const { RESEND_API_KEY, FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !FROM_EMAIL) {
    console.error("Contact email configuration missing");
    return res.status(503).json({
      error: "Contact service unavailable",
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  const rows = Object.entries(submission)
    .map(([key, value]) => (
      `<tr>
        <th style="text-align:left;padding:8px">
          ${escapeHtml(key)}
        </th>
        <td style="padding:8px">
          ${escapeHtml(value)}
        </td>
      </tr>`
    ))
    .join("");

  const text = Object.entries(submission)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [recipient],
      replyTo: submission.email,
      subject: `New Ultimate Health Spa inquiry`,
      html: `
        <h2>New Ultimate Health Spa Contact Submission</h2>
        <table>${rows}</table>
      `,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({
        error: "Email delivery failed",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      error: "Unable to process submission",
    });
  }
}
