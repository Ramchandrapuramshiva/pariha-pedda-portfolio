import { ArrowUpRight } from "lucide-react";
import { studioImages } from "../portfolioData";

export const About = () => (
  <section
    id="about"
    className="bg-[var(--ivory)] px-6 py-28 text-[var(--ink)] sm:px-10 sm:py-36 lg:px-16 lg:py-44"
  >
    <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24">
      <div>
        <h2 className="font-serif text-[clamp(3.8rem,7vw,7.25rem)] font-light leading-[0.92] tracking-[-0.045em]">
          About Pariha
        </h2>
        <div className="mt-8 h-px w-full bg-[var(--gold)]" />
        <p className="mt-10 max-w-xl text-lg leading-8 text-[var(--ink)]/85 sm:text-xl sm:leading-9">
          I am a fashion designer drawn to sculptural silhouettes, hand-built detail, and
          visual storytelling. My work moves between concept development, styling, and
          wearable form.
        </p>
        <a
          href="https://www.instagram.com/pariha_7"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-base transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-dark)]"
        >
          Instagram @pariha_7
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-7">
        <figure className="media-frame group col-span-2 aspect-[4/5] bg-white lg:col-span-8 lg:row-span-2 lg:aspect-auto lg:min-h-[760px]">
          <img
            src={studioImages[0].src}
            alt={studioImages[0].alt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </figure>

        <figure className="media-frame group aspect-[4/5] bg-white lg:col-span-4">
          <img
            src={studioImages[1].src}
            alt={studioImages[1].alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </figure>

        <figure className="media-frame group aspect-[4/5] bg-white lg:col-span-4">
          <img
            src={studioImages[2].src}
            alt={studioImages[2].alt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </figure>
      </div>
    </div>
  </section>
);
