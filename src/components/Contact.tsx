import { ArrowUpRight, MessageCircle } from "lucide-react";

const phone = "+91 73864 23694";
const rawPhone = "917386423694";
const whatsappUrl = `https://wa.me/${rawPhone}?text=Hello%20Pariha,%20I%20would%20like%20to%20discuss%20a%20creative%20project.`;

export const Contact = () => (
  <section
    id="contact"
    className="border-t border-[var(--gold)]/30 bg-[var(--ink)] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44"
  >
    <div className="mx-auto max-w-[1440px]">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
        <div>
          <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.9] tracking-[-0.045em] text-[var(--ivory)]">
            Let’s create something memorable.
          </h2>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-[var(--ivory)]/78 sm:text-xl">
            Available for design commissions, styling collaborations, and creative projects.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--gold)]/25 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-7 lg:p-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="button-gold w-full justify-between px-7 sm:px-9"
          >
            WhatsApp me
            <MessageCircle size={20} aria-hidden="true" />
          </a>

          <div className="mt-6 border-t border-white/15">
            <a href={`tel:+${rawPhone}`} className="contact-link">
              <span>Call {phone}</span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/pariha_7"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>Instagram @pariha_7</span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
