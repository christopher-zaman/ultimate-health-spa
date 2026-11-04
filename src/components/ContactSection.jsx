
import { useState } from "react";
import GoldButton from "./GoldButton";
import "./ContactSection.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  website: "",
};

export default function ContactSection({
  source = "Contact Page",
  headingLevel = "h1",
}) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      setMessage(
        "Thank you! Your message has been sent. We'll be in touch soon."
      );
      setForm(initialForm);
    } catch {
      setMessage(
        "We couldn't send your message. Please call the spa or try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="spa-contact" aria-labelledby="spa-contact-title">
      <div className="spa-contact__inner">
        <div className="spa-contact__intro">
          <p className="spa-contact__eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </p>

          {headingLevel === "h1" ? (
            <h1 id="spa-contact-title" className="spa-contact__title">
              Contact Us
            </h1>
          ) : (
            <h2 id="spa-contact-title" className="spa-contact__title">
              Contact Us
            </h2>
          )}
          
          <p className="spa-contact__description">
            Your beauty and wellness journey begins here.
            Have a question about our treatments?
            Send us a message.
          </p>
        </div>

        <form
          className="spa-contact__form"
          onSubmit={handleSubmit}
        >
          <div className="spa-contact__fields">
            <div className="spa-contact__field">
              <label htmlFor="spa-name">Name</label>
              <input
                id="spa-name"
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
                placeholder="Your name"
                maxLength={120}
                required
              />
            </div>

            <div className="spa-contact__field">
              <label htmlFor="spa-phone">Phone</label>
              <input
                id="spa-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={update}
                autoComplete="tel"
                placeholder="Your phone number"
                maxLength={40}
                required
              />
            </div>

            <div className="spa-contact__field">
              <label htmlFor="spa-email">Email</label>
              <input
                id="spa-email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
                placeholder="Your email address"
                maxLength={254}
                required
              />
            </div>

            <div className="spa-contact__field">
              <label htmlFor="spa-treatment">
                Treatment
              </label>
              <input
                id="spa-treatment"
                name="treatment"
                value={form.treatment}
                onChange={update}
                placeholder="Treatment you're interested in"
                maxLength={160}
                required
              />
            </div>
          </div>

          {/* Hidden spam-trap field */}
          <div className="spa-contact__honeypot" aria-hidden="true">
            <label htmlFor="spa-website">Website</label>
            <input
              id="spa-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={update}
            />
          </div>

          <GoldButton
            type="submit"
            disabled={sending}
            className="spa-contact__submit"
          >
            {sending ? "SENDING..." : "SEND MESSAGE"}
          </GoldButton>

          <p
            role="status"
            aria-live="polite"
            className={
              success
                ? "spa-contact__feedback is-success"
                : "spa-contact__feedback"
            }
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
