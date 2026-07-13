import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { contact } from "../data/contact";
import { solutions } from "../data/solutions";

type ContactFormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  solution: string;
  location: string;
  quantity: string;
  message: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidGhanaPhone(value: string) {
  const compact = value.replace(/[\s()-]/g, "");
  return /^(?:\+233|233|0)\d{9}$/.test(compact);
}

function fieldClass(hasError: boolean) {
  return `field ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""}`;
}

export function ContactPage() {
  const [state, submitToFormspree, resetFormspree] = useForm<ContactFormValues>("xeebdqaj");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetFormspree();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Enter your name.";
    if (!phone) {
      nextErrors.phone = "Enter your phone number.";
    } else if (!isValidGhanaPhone(phone)) {
      nextErrors.phone = "Use a valid Ghana phone number, for example +233 24 499 7332.";
    }
    if (!email) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Use a valid email address, for example info@xapnghanaltd.com.";
    }
    if (!message) nextErrors.message = "Describe what you need.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    await submitToFormspree(event);
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => {
      if (!current[field]) return current;
      return { ...current, [field]: undefined };
    });
  };

  const contactCards = useMemo(
    () => [
      { icon: <Phone size={22} />, label: "Phone", value: contact.phone, href: contact.phoneHref },
      { icon: <MessageCircle size={22} />, label: "WhatsApp", value: "Chat on WhatsApp", href: contact.whatsappHref },
      { icon: <Mail size={22} />, label: "Email", value: contact.email, href: contact.emailHref },
      { icon: <MapPin size={22} />, label: "Location", value: contact.location, href: "#" },
    ],
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell XAPN what your organization needs."
        body="Send a product or service enquiry with quantity, delivery location and preferred contact details."
      />

      <section className="section-pad bg-mist">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="card-motion animate-scale-in flex gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-sm hover:border-brand"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand/15 text-brand-dark">
                  {card.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.14em] text-black/70">
                    {card.label}
                  </span>
                  <span className="mt-1 block text-base font-bold text-ink">{card.value}</span>
                </span>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="animate-fade-up rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8"
          >
            <input type="hidden" name="_subject" value="New XAPN Ghana enquiry" />
            <div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                Request pricing or availability
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  className={fieldClass(Boolean(errors.name))}
                  name="name"
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearError("name")}
                />
                <FieldError id="name-error" message={errors.name} />
              </div>
              <input className="field" name="company" placeholder="Company name" />
              <div>
                <input
                  className={fieldClass(Boolean(errors.phone))}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone number"
                  aria-invalid={errors.phone ? "true" : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  onChange={() => clearError("phone")}
                />
                <FieldError id="phone-error" message={errors.phone} />
              </div>
              <div>
                <input
                  className={fieldClass(Boolean(errors.email))}
                  name="email"
                  type="email"
                  inputMode="email"
                  placeholder="Email address"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                />
                <FieldError id="email-error" message={errors.email} />
                <ValidationError
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-xs font-semibold text-red-600"
                />
              </div>
              <select className="field" name="solution" defaultValue="">
                <option value="" disabled>
                  Select solution area
                </option>
                {solutions.map((solution) => (
                  <option key={solution.id} value={solution.title}>
                    {solution.title}
                  </option>
                ))}
              </select>
              <input className="field" name="location" placeholder="Delivery location" />
              <input className="field sm:col-span-2" name="quantity" placeholder="Quantity or estimated need" />
              <div className="sm:col-span-2">
                <textarea
                  className={`${fieldClass(Boolean(errors.message))} min-h-36`}
                  name="message"
                  placeholder="Describe what you need"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                />
                <FieldError id="message-error" message={errors.message} />
                <ValidationError
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-xs font-semibold text-red-600"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="button-primary" type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Enquiry"} <ArrowRight size={18} />
              </button>
              {state.succeeded && (
                <p className="text-sm font-semibold text-brand-dark">
                  Enquiry sent. XAPN will review your message and respond shortly.
                </p>
              )}
              <ValidationError errors={state.errors} className="text-sm font-semibold text-red-600" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-xs font-semibold text-red-600">
      {message}
    </p>
  );
}
