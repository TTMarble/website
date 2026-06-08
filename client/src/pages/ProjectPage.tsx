import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "wouter";
import Layout from "@/components/Layout";
import { fadeUp, cardFadeUp, animationProfiles } from "@/lib/siteData";
import { projectsConfig } from "@/lib/projectsConfig";

// Eagerly import every image under assets/images/*-projects/
const projectImages = import.meta.glob<{ default: string }>(
  "../assets/images/**/*.{jpg,jpeg,webp,png,heic,JPG,JPEG,WEBP,PNG,HEIC}",
  { eager: true },
);

function getProjectImages(market: string, folder: string): string[] {
  const prefix = `../assets/images/${market}-projects/${folder}/`;
  return Object.entries(projectImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([aPath], [bPath]) => {
      const aFeatured = /\/featured\.[^/]+$/i.test(aPath);
      const bFeatured = /\/featured\.[^/]+$/i.test(bPath);
      if (aFeatured && !bFeatured) return -1;
      if (!aFeatured && bFeatured) return 1;
      return aPath.localeCompare(bPath);
    })
    .map(([, mod]) => mod.default);
}

export default function ProjectPage() {
  const { market, folder } = useParams<{ market: string; folder: string }>();
  const [, navigate] = useLocation();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const marketType = market as "commercial" | "residential";
  const config = projectsConfig[marketType] ?? projectsConfig.commercial;
  const project = config.projects.find((p) => p.folder === folder);

  if (!project) {
    return (
      <Layout>
        <main className="flex flex-1 flex-col bg-black pt-20">
          <section className="py-24 px-5 md:px-10">
            <p className="text-white/50">Project not found.</p>
          </section>
        </main>
      </Layout>
    );
  }

  const images = getProjectImages(marketType, folder);

  useEffect(() => {
    if (!isCarouselOpen || images.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCarouselOpen(false);
      }
      if (event.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCarouselOpen, images.length]);

  const goToNextImage = () => {
    if (images.length === 0) return;
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    if (images.length === 0) return;
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Layout>
      <main className="flex flex-1 flex-col bg-black pt-20">
        {/* Header */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={animationProfiles.text.spring}
            >
              <button
                type="button"
                onClick={() => navigate(`/projects/${marketType}`)}
                className="inline-flex items-center gap-2 border border-[var(--brass)]/45 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--brass)] decoration-transparent underline-offset-[0.38em] transition duration-300 hover:border-[var(--brass)] hover:bg-[var(--brass)]/10 hover:underline"
                aria-label={`Back to ${market === "commercial" ? "Commercial Projects" : "Residential Projects"}`}
              >
                <span aria-hidden="true">&larr;</span>
                <span>Back to {market === "commercial" ? "Commercial Projects" : "Residential Projects"}</span>
              </button>
              <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-[0.96] tracking-[-0.04em] text-[var(--ivory)]">
                {project.name}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--brass)]">{project.location}</p>
              </div>
              <p className="mt-8 w-full text-lg leading-8 text-white/60 md:text-[1.05rem]">
                {project.scope}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image gallery */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            {images.length > 0 ? (
              <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                transition={animationProfiles.stagger.container}
              >
                {images.map((src, index) => (
                  <motion.div
                    key={src}
                    variants={cardFadeUp}
                    transition={{ ...animationProfiles.card.spring, delay: animationProfiles.stagger.cardDelay(index) }}
                    className="group relative overflow-hidden border border-white/10 transition-colors duration-300 hover:border-[var(--brass)]/50 transform-gpu will-change-transform"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setIsCarouselOpen(true);
                      }}
                      className="block w-full text-left"
                      aria-label={`Open image ${index + 1} in carousel`}
                    >
                    {index === 0 && (
                      <p className="absolute right-3 top-3 z-10 bg-black/60 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-[var(--brass)] backdrop-blur">
                        Featured
                      </p>
                    )}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-white/[0.02]">
                      <img
                        src={src}
                        alt={`${project.name} — image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={animationProfiles.text.spring}
                className="text-sm uppercase tracking-[0.22em] text-white/30"
              >
                Images coming soon
              </motion.p>
            )}
          </div>
        </section>

        {isCarouselOpen && images.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/95">
            <div className="relative flex h-full w-full items-center justify-center px-3 sm:px-10 md:pb-28">
              <button
                type="button"
                onClick={() => setIsCarouselOpen(false)}
                className="absolute right-5 top-5 z-50 border border-white/30 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/85 transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
                aria-label="Close carousel"
              >
                Close
              </button>

              <p className="absolute left-5 top-5 z-50 text-xs uppercase tracking-[0.2em] text-white/60">
                {selectedImageIndex + 1} / {images.length}
              </p>

              <button
                type="button"
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 border border-white/35 bg-black/35 px-3 py-2 text-lg text-white transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
                aria-label="Previous image"
              >
                &#8592;
              </button>

              <div
                className="flex h-[82vh] w-full max-w-[1400px] items-center justify-center"
                onTouchStart={(event) => {
                  touchStartX.current = event.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  const startX = touchStartX.current;
                  const endX = event.changedTouches[0]?.clientX ?? null;
                  if (startX == null || endX == null) return;
                  const delta = endX - startX;
                  if (Math.abs(delta) < 40) return;
                  if (delta < 0) goToNextImage();
                  if (delta > 0) goToPrevImage();
                }}
              >
                <img
                  src={images[selectedImageIndex]}
                  alt={`${project.name} full view ${selectedImageIndex + 1}`}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 border border-white/35 bg-black/35 px-3 py-2 text-lg text-white transition hover:border-[var(--brass)] hover:text-[var(--brass)]"
                aria-label="Next image"
              >
                &#8594;
              </button>

              <div className="absolute bottom-5 left-1/2 z-50 hidden w-[min(92vw,1080px)] -translate-x-1/2 md:flex items-center gap-2 overflow-x-auto border border-white/15 bg-black/55 p-2 backdrop-blur">
                {images.map((thumb, index) => (
                  <button
                    key={`thumb-${thumb}`}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden border transition ${
                      index === selectedImageIndex
                        ? "border-[var(--brass)]"
                        : "border-white/20 hover:border-white/45"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <img
                      src={thumb}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
