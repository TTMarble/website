import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { fadeUp, animationProfiles } from "@/lib/siteData";
import { projectsConfig } from "@/lib/projectsConfig";

// Eagerly import every image under assets/images/*-projects/
const projectImages = import.meta.glob<{ default: string }>(
  "../assets/images/**/*.{jpg,jpeg,webp,png,heic,JPG,JPEG,WEBP,PNG,HEIC}",
  { eager: true },
);

function getHeroImage(market: string, folder: string): string {
  const prefix = `../assets/images/${market}-projects/${folder}/`;
  const entries = Object.entries(projectImages).filter(([path]) => path.startsWith(prefix));
  // Prefer a file named "featured" (any extension), then fall back to the first image found
  const featured = entries.find(([path]) => /\/featured\.[^/]+$/.test(path));
  const match = featured ?? entries[0];
  return match ? match[1].default : "";
}

export default function ProjectDetail() {
  const pathname = window.location.pathname;
  const marketType = pathname.split("/").pop() as "commercial" | "residential";

  const current = projectsConfig[marketType] ?? projectsConfig.commercial;
  const [, navigate] = useLocation();

  return (
    <Layout>
      <main className="flex flex-1 flex-col bg-black pt-24">
        {/* Header */}
        <section className="bg-black py-12 md:py-16">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={animationProfiles.text.spring}>
              <h1 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.02] tracking-[-0.03em] text-[var(--ivory)]">
                {current.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/66">
                {current.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project List */}
        <section className="bg-black py-12 md:py-16">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {current.projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ ...animationProfiles.text.spring, delay: 0.1 + index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/projects/${marketType}/${project.folder}`)}
                >
                  <div className="aspect-[4/3] w-full border border-white/10 relative overflow-hidden flex items-center justify-center transition duration-300 group-hover:border-[var(--brass)]/60">
                    {(() => {
                      const hero = getHeroImage(marketType, project.folder);
                      return hero ? (
                        <img
                          src={hero}
                          alt={project.name}
                          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-white/[0.06] flex items-center justify-center">
                          <span className="text-xs uppercase tracking-[0.22em] text-white/24">Image coming soon</span>
                        </div>
                      );
                    })()}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-base font-semibold text-[var(--ivory)] transition duration-300 group-hover:text-[var(--brass)]">{project.name}</h3>
                      <p className="mt-0.5 text-xs text-white/50 uppercase tracking-wide transition duration-300 group-hover:text-[var(--brass)]/70">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
