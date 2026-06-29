import { ArrowDownRight } from "lucide-react";

export const Hero = () => (
  <section
    id="top"
    className="relative border-b border-white/10 bg-[var(--ink)]"
  >
    <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] lg:grid-cols-[1.04fr_0.96fr]">
      <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <h1 className="hero-reveal max-w-[760px] font-serif text-[clamp(3.35rem,7vw,7.75rem)] font-light leading-[0.92] tracking-[-0.04em] text-[var(--ivory)]">
          Fashion shaped by story, structure, and emotion.
        </h1>

        <div className="hero-reveal hero-delay mt-10 max-w-xl border-t border-[var(--gold)] pt-8">
          <p className="max-w-lg text-base leading-7 text-[var(--ivory)]/80 sm:text-lg sm:leading-8">
            A concise portfolio of wearable art, editorial styling, and design process.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="button-gold">
              Contact me
            </a>
            <a href="#work" className="button-outline">
              View selected work
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-reveal relative mx-6 mb-8 min-h-[58svh] overflow-hidden rounded-[2rem] border border-[var(--gold)]/30 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:mx-10 sm:mb-10 lg:my-8 lg:mr-8 lg:ml-0 lg:min-h-0">
        <img
          src="/images/12.jpeg"
          alt="Golden couture gown with floral styling"
          className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
          fetchPriority="high"
        />
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-6 left-6 hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--ivory)]/40 lg:flex">
      <span className="h-px w-12 bg-[var(--gold)]" />
      Scroll to explore
    </div>
  </section>
);
