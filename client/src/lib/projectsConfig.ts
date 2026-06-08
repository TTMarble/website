/**
 * Project configuration file.
 *
 * Structure:
 *  - folder:   slug that maps to the image folder name under /images/<market>-projects/<folder>/
 *  - name:     display name shown on the page
 *  - location: city, state
 *  - scope:    one-line description shown below the card
 *  - heroImage is resolved automatically from the first image file found in:
 *               src/assets/images/<market>-projects/<folder>/
 *    Drop any image into that folder and it will be used as the hero.
 */

export interface Project {
  folder: string;
  name: string;
  location: string;
  scope: string;
}

export interface MarketConfig {
  title: string;
  description: string;
  projects: Project[];
}

export const projectsConfig: Record<"commercial" | "residential", MarketConfig> = {
  commercial: {
    title: "Commercial Projects",
    description:
      "Feature walls, reception counters, amenities, hospitality fit-outs, and high-traffic premium stonework for developers, architects, and builders.",
    projects: [
      {
        folder: "novotel",
        name: "Novotel",
        location: "Brighton-Le-Sands, NSW",
        scope: "Bespoke Italian marble bar with sculpted stone surfaces and refined edge detailing",
      },
      {
        folder: "b-hotel",
        name: "B Hotel",
        location: "Sydney, NSW",
        scope: "TBC",
      },
    ],
  },
  residential: {
    title: "Residential Projects",
    description:
      "Refined marble kitchens, bathrooms, fireplaces, vanities, and bespoke statement pieces for custom homes and design-led renovations.",
    projects: [
      {
        folder: "Willoughby",
        name: "Willoughby",
        location: "Sydney, NSW",
        scope: "Bespoke residential marble work with refined detailing and premium installation finish",
      },
    ],
  },
};
