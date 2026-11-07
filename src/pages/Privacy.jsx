
const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "When you contact us through our website, we may collect your name, email address, phone number, treatment interests, and any information you voluntarily include in your message.",
      "We also collect website usage information through analytics technologies, including pages visited, booking-button interactions, traffic sources, browser characteristics, and general website activity.",
      "When you use our online booking links, you are directed to GlossGenius, which collects and processes booking information under its own privacy policy.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use information to respond to inquiries, communicate with clients, facilitate access to appointment booking, understand website performance, improve our services and content, and maintain website security.",
    ],
  },
  {
    title: "3. Analytics and Cookies",
    paragraphs: [
      "Our website uses Google Analytics 4 to understand how visitors interact with our pages and treatment offerings. Google Analytics may use cookies and similar technologies to collect information about devices, website visits, referral sources, and interactions.",
      "You can manage cookies through your browser settings. For more information about Google's privacy practices, visit https://policies.google.com/privacy.",
    ],
  },
  {
    title: "4. Appointment Booking",
    paragraphs: [
      "Appointment scheduling is provided through GlossGenius, a third-party booking platform. When you follow a booking link, information submitted during scheduling or payment is handled by GlossGenius according to its privacy practices.",
      "You can review the GlossGenius Privacy Policy at https://glossgenius.com/legal/privacy.",
    ],
  },
  {
    title: "5. Contact Form and Email",
    paragraphs: [
      "Information submitted through our contact form is used to respond to your inquiry. We use a third-party email delivery service to transmit contact form submissions to our business.",
      "Please do not submit sensitive medical information, payment card details, or medical records through our general website contact form.",
    ],
  },
  {
    title: "6. Third-Party Providers",
    paragraphs: [
      "Our website relies on third-party providers for hosting, analytics, email delivery, and appointment scheduling. These providers may process information as necessary to perform their services.",
    ],
  },
  {
    title: "7. Security and Retention",
    paragraphs: [
      "We take reasonable measures to protect information submitted through our website. However, no method of internet transmission or electronic storage is completely secure.",
      "We retain information for as long as reasonably necessary to respond to inquiries, operate our business, and satisfy applicable legal or recordkeeping obligations.",
    ],
  },
  {
    title: "8. Your Privacy Choices",
    paragraphs: [
      "You may contact us with questions about personal information submitted through our website or request correction or deletion, subject to applicable law and recordkeeping requirements.",
      "You may also manage cookies and tracking preferences through your browser settings.",
    ],
  },
  {
    title: "9. External Websites",
    paragraphs: [
      "Our website may link to external services, including booking platforms and social media websites. Those services operate under their own privacy policies.",
    ],
  },
  {
    title: "10. Policy Updates",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in our website, business practices, or applicable requirements. The latest revision date will appear at the top of this page.",
    ],
  },
];

export default function Privacy() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B68B3B]">
        Ultimate Health Spa
      </p>

      <h1 className="text-4xl font-medium text-stone-900 md:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-stone-500">
        Last updated: November 7, 2026
      </p>

      <p className="mt-8 leading-8 text-stone-700">
        Ultimate Health Spa ("we," "us," or "our") respects your
        privacy. This Privacy Policy explains how information is
        collected, used, and handled when you visit our website,
        contact us, or access our online booking services.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-2xl font-medium text-stone-900">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-8 text-stone-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="mb-4 text-2xl font-medium text-stone-900">
            11. Contact Us
          </h2>

          <div className="space-y-2 leading-8 text-stone-700">
            <p className="font-semibold">Ultimate Health Spa</p>

            <p>
              711 N. 3rd Street, Suite 3
              <br />
              Leesburg, FL 34748
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+13529016582"
                className="text-[#A67C32] hover:underline"
              >
                (352) 901-6582
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:ultimatehealthdpc@gmail.com"
                className="text-[#A67C32] hover:underline"
              >
                ultimatehealthdpc@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
