import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { images } from "@/lib/siteData";

const heroFadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <Layout>
      <main>
        <section className="hero-grid relative min-h-[34rem] overflow-hidden" style={{ height: "calc(100svh - var(--navbar-height, 80px))" }}>
          <div className="absolute inset-0 z-0">
            <img src={images.hero} alt="Luxury marble waterfall kitchen island fabricated with book-matched veining" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/18" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/55" />
            <div className="marble-noise absolute inset-0 opacity-45" />
          </div>

          <motion.div
            className="relative z-10 mx-auto grid h-full max-w-[1500px] grid-cols-1 content-center px-5 pb-8 md:px-10 lg:grid-cols-[1.06fr_0.94fr] lg:pb-8"
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.p variants={heroFadeUp} transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.85 }} className="eyebrow mb-7 will-change-transform">Raw slab to install-ready stonework</motion.p>
              <motion.h1 variants={heroFadeUp} transition={{ type: "spring", stiffness: 230, damping: 25, mass: 0.9 }} className="max-w-4xl font-serif text-[clamp(4rem,10vw,10.8rem)] leading-[0.84] tracking-[-0.07em] text-[var(--ivory)] will-change-transform">
                Marble,
                <span className="block italic text-[var(--brass)]">cut with intent.</span>
              </motion.h1>
              <motion.p variants={heroFadeUp} transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.95 }} className="mt-8 max-w-xl text-lg leading-8 text-white/72 md:text-xl will-change-transform">
                TT Marble transforms raw natural stone into finished, install-ready pieces for high-end commercial projects and luxury residential builds.
              </motion.p>
              <motion.div variants={heroFadeUp} transition={{ type: "spring", stiffness: 210, damping: 23, mass: 0.95 }} className="mt-10 flex flex-col gap-4 sm:flex-row will-change-transform">
                <a
                  href="/craft"
                  onClick={(e) => { e.preventDefault(); navigate("/craft"); }}
                  className="group inline-flex items-center justify-center gap-3 bg-[var(--brass)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-black transition duration-500 hover:bg-[var(--ivory)]"
                >
                  Explore the craft <ArrowUpRight className="h-4 w-4 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.28em] text-[var(--ivory)] transition duration-500 hover:border-[var(--brass)] hover:bg-white/5"
                >
                  Start a project
                </button>
              </motion.div>
            </div>

            <motion.aside variants={heroFadeUp} transition={{ type: "spring", stiffness: 200, damping: 22, mass: 1 }} className="mt-12 self-end border-l border-[var(--brass)]/55 pl-6 text-white/70 lg:ml-auto lg:max-w-sm will-change-transform">
              <p className="text-[0.72rem] uppercase tracking-[0.36em] text-[var(--brass)]">Commercial grade. Atelier finish.</p>
              <p className="mt-5 text-sm leading-7">
                Sourcing, templating, 3D cutting, edge profiling, mitres, polishing, sealing, detailing, and site installation—managed by one dedicated team.
              </p>
            </motion.aside>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}
