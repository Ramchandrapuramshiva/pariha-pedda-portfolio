export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  discipline: string;
  description: string;
  images: PortfolioImage[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "medusa",
    title: "Medusa",
    discipline: "Art direction & styling",
    description:
      "A study in transformation, protective beauty, and sculptural adornment developed through mood, makeup, styling, and hand-built headpieces.",
    images: [
      { src: "/images/2.jpeg", alt: "Medusa editorial portrait framed by foliage" },
      { src: "/images/4.jpeg", alt: "Red-lit Medusa beauty portrait" },
      { src: "/images/3.jpeg", alt: "Seated Medusa editorial portrait in red light" },
      { src: "/images/9.jpeg", alt: "Close portrait showing the sculptural serpent crown" },
      { src: "/images/1.jpeg", alt: "Medusa fashion mood board and colour palette" },
    ],
  },
  {
    id: "golden-bloom",
    title: "Golden Bloom",
    discipline: "Couture study",
    description:
      "Volume, sparkle, and floral ornament meet in an evening silhouette designed to hold attention from every angle.",
    images: [
      { src: "/images/13.jpeg", alt: "Top view of a voluminous gold couture gown" },
    ],
  },
  {
    id: "form-identity",
    title: "Form & Identity",
    discipline: "Silhouette exploration",
    description:
      "Experiments in proportion, utility, illustration, and wearable character across finished looks and early design studies.",
    images: [
      { src: "/images/14.jpeg", alt: "Structured grey and black fashion look" },
      { src: "/images/6.jpeg", alt: "Hand-painted white utility jacket" },
      { src: "/images/10.jpeg", alt: "Watercolour fashion illustration in a sketchbook" },
      { src: "/images/11.jpeg", alt: "Pariha fashion identity illustration" },
    ],
  },
];

export const studioImages: PortfolioImage[] = [
  { src: "/images/7.jpeg", alt: "Pariha in an olive tailored look" },
  { src: "/images/5.jpeg", alt: "Pariha wearing a black top and wide-leg denim" },
  { src: "/images/8.jpeg", alt: "Behind-the-scenes self portrait with a camera" },
];
