"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Mail, Phone, Send, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Input, Textarea } from "@/components/ui/Input";
import { site } from "@/config/site";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!showSuccess) return;
    closeButtonRef.current?.focus();
    const dismissTimer = window.setTimeout(() => setShowSuccess(false), 15000);
    function closeOnEscape(event) {
      if (event.key === "Escape") setShowSuccess(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(dismissTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [showSuccess]);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!site.formspreeFormId) {
      setError("The contact form is not connected yet. Please email me directly for now.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeFormId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok) {
        const details = result.errors?.map((item) => item.message).filter(Boolean).join(" ");
        throw new Error(details || result.error || "Your message could not be sent. Please try again.");
      }
      form.reset();
      setShowSuccess(true);
    } catch (submissionError) {
      setError(submissionError.message || "Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return <section id="contact" className="section section-contact"><Container className="contact-grid">
    <Reveal><div className="contact-copy">
      <h2>Let’s Make <span className="gradient-text">Something Good</span></h2>
      <p>Have a project in mind? I’d love to hear what you’re dreaming up. Have a question, an idea, or just want to say hello? My inbox is open. Let’s build something meaningful together.</p>
      <div className="contact-details">
        <a className="contact-mini" href={`mailto:${site.email}`}><Mail size={15}/>{site.email}</a>
        <a className="contact-mini" href={`tel:${site.phone.replaceAll(" ", "")}`}><Phone size={15}/>{site.phone}</a>
      </div>
    </div></Reveal>
    <Reveal delay={.1}><form className="contact-form" onSubmit={submit} aria-busy={isSubmitting}>
      {error && <div className="form-error" role="alert">{error}</div>}
      <div className="form-row"><label>Your name<Input required name="name" autoComplete="name" placeholder="Jane Smith"/></label><label>Email address<Input required name="email" type="email" autoComplete="email" placeholder="jane@example.com"/></label></div>
      <label>Your message<Textarea required name="message" rows="5" placeholder="Tell me a little about what you have in mind…"/></label>
      <button className="button button-gradient submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send Message"} {!isSubmitting && <Send size={15}/>}</button>
    </form></Reveal>
    {showSuccess && createPortal(<div className="success-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowSuccess(false); }}>
      <div className="success-dialog" role="dialog" aria-modal="true" aria-labelledby="success-title" aria-describedby="success-message">
        <button ref={closeButtonRef} className="success-close" type="button" aria-label="Close confirmation" onClick={() => setShowSuccess(false)}><X size={18}/></button>
        <span className="success-icon"><CheckCircle2 size={27}/></span>
        <h2 id="success-title">Message sent!</h2>
        <p id="success-message">I’ve received your message and will reply as soon as possible.</p>
      </div>
    </div>, document.body)}
  </Container></section>;
}
