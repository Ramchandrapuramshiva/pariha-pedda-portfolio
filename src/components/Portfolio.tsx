import type { PortfolioImage } from "../portfolioData";
import { portfolioProjects } from "../portfolioData";

interface MediaFrameProps {
  image: PortfolioImage;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

const MediaFrame = ({
  image,
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) => (
  <figure className={`media-frame group ${className}`}>
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      sizes={sizes}
      className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] ${imageClassName}`}
    />
  </figure>
);

const [medusa, goldenBloom, formIdentity] = portfolioProjects;

export const Portfolio = () => (
  <section id="work" className="bg-[var(--ink)] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-16 flex items-center gap-6 sm:mb-24 lg:mb-28">
        <h2 className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-light leading-none tracking-[-0.045em] text-[var(--ivory)]">
          Selected <span className="text-[var(--gold)]">work</span>
        </h2>
        <div className="hidden h-px flex-1 bg-[var(--gold)]/60 sm:block" />
      </div>

      <article aria-labelledby="medusa-title">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <MediaFrame
            image={medusa.images[0]}
            className="aspect-[4/5] lg:aspect-auto lg:min-h-[860px]"
            imageClassName="object-[50%_40%]"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />

          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            <MediaFrame
              image={medusa.images[4]}
              className="col-span-2 aspect-[4/5] sm:col-span-1 sm:row-span-2 sm:aspect-auto"
              imageClassName="object-top"
              sizes="(min-width: 1024px) 28vw, 50vw"
            />
            <MediaFrame image={medusa.images[1]} className="aspect-[4/5]" />
            <MediaFrame image={medusa.images[2]} className="aspect-[4/5]" />
            <MediaFrame
              image={medusa.images[3]}
              className="col-span-2 aspect-[16/9]"
              imageClassName="object-[50%_35%]"
            />
          </div>
        </div>

        <div className="project-caption">
          <div>
            <h3 id="medusa-title" className="project-title">
              {medusa.title}
            </h3>
            <p className="project-discipline">{medusa.discipline}</p>
          </div>
          <p className="project-description">{medusa.description}</p>
        </div>
      </article>

      <article className="mt-28 sm:mt-36 lg:mt-44" aria-labelledby="golden-title">
        <div className="grid items-end gap-10 sm:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="pb-2">
            <h3 id="golden-title" className="project-title">
              {goldenBloom.title}
            </h3>
            <p className="project-discipline">{goldenBloom.discipline}</p>
            <p className="project-description mt-7 max-w-lg">
              {goldenBloom.description}
            </p>
          </div>
          <MediaFrame
            image={goldenBloom.images[0]}
            className="aspect-[4/5] max-h-[960px]"
            imageClassName="object-[50%_42%]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </article>

      <article className="mt-28 sm:mt-36 lg:mt-44" aria-labelledby="form-title">
        <div className="mb-12 grid gap-7 border-b border-[var(--gold)]/35 pb-9 lg:grid-cols-2 lg:items-end">
          <div>
            <h3 id="form-title" className="project-title">{formIdentity.title}</h3>
            <p className="project-discipline">{formIdentity.discipline}</p>
          </div>
          <p className="project-description lg:justify-self-end">{formIdentity.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          <MediaFrame
            image={formIdentity.images[0]}
            className="col-span-2 aspect-[4/5] lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:min-h-[900px]"
            imageClassName="object-top"
          />
          <MediaFrame
            image={formIdentity.images[1]}
            className="col-span-2 aspect-[3/4] sm:col-span-1 lg:col-span-4"
            imageClassName="object-[50%_25%]"
          />
          <MediaFrame
            image={formIdentity.images[2]}
            className="col-span-2 aspect-[3/4] sm:col-span-1 lg:col-span-3"
            imageClassName="object-top"
          />
          <MediaFrame
            image={formIdentity.images[3]}
            className="col-span-2 aspect-[3/4] lg:col-span-7"
            imageClassName="object-top"
          />
        </div>
      </article>
    </div>
  </section>
);
