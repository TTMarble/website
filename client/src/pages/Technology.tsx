import { motion } from "framer-motion";
import { BadgeCheck, DraftingCompass, Factory, Ruler, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { images, capabilities, fadeUp, animationProfiles } from "@/lib/siteData";

const precisionItems = [
  { Icon: Ruler,          title: "Accurate Templating",       desc: "Digital precision from design to stone." },
  { Icon: DraftingCompass, title: "Complex Profiles",         desc: "Intricate edges and custom details." },
  { Icon: Factory,        title: "Factory-Controlled Finish", desc: "Consistent quality before installation." },
  { Icon: BadgeCheck,     title: "Install-Ready Quality",     desc: "Precision meets site-ready delivery." },
];

export default function Technology() {
  return (
    <Layout>
      <main className="bg-[var(--slate)] pt-[84px]">
        <section className="relative overflow-hidden px-5 pb-18 pt-8 md:px-10 md:pb-24 md:pt-10">
          <div className="mx-auto max-w-[1500px]">

            {/* Top: image + heading */}
            <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...animationProfiles.text.spring, delay: 0.06 }}
                className="relative border border-[var(--brass)]/35"
              >
                <img
                  src={images.cnc}
                  alt="Advanced 3D CNC marble cutting machine shaping stone in a refined factory"
                  className="h-[26rem] w-full object-cover md:h-[30rem] lg:h-[32rem]"
                />
                <div className="absolute bottom-6 left-6 border border-white/15 bg-black/65 px-5 py-4 backdrop-blur-xl">
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--brass)]">3D Cutting Machine</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={animationProfiles.text.spring}
                className=""
              >
                <p className="eyebrow">Technology & precision</p>
                <h2 className="section-title mt-6 max-w-[14ch] !text-[clamp(1.9rem,3.6vw,3.4rem)] !leading-[1.08]">
                  Sophisticated design needs more than{" "}
                  <em className="font-serif text-[var(--brass)] italic">hand skill</em>{" "}
                  alone.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">
                  A high-quality 3D cutting machine gives the team the control to fabricate difficult geometry, precise openings, repeatable components, and detailed stone profiles. The machinery does not replace craftsmanship; it sharpens it.
                </p>
              </motion.div>
            </div>

            {/* Middle: 4-column precision outcomes strip */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ ...animationProfiles.text.spring, delay: 0.08 }}
              className="mt-10 border-y border-white/10 md:mt-12"
            >
              <div className="grid divide-y divide-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
                {precisionItems.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-3 px-6 py-7">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[var(--brass)]" />
                      <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/36">Capability</p>
                    </div>
                    <p className="text-sm font-semibold tracking-wide text-white/88">{title}</p>
                    <p className="text-xs leading-6 text-white/48">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom: capabilities application grid */}
            <div id="capabilities" className="mt-14 md:mt-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={animationProfiles.text.spring}
                className="max-w-4xl"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/42">What this precision makes possible</p>
                <h2 className="mt-6 font-serif text-[clamp(1.9rem,3.6vw,3.4rem)] leading-[1.08] tracking-[-0.06em] text-[var(--ivory)]">
                  Applied across residential and commercial work.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/56 md:text-lg">
                  The same accuracy used in complex fabrication expands what can be delivered across kitchens, bathrooms, commercial features, architectural details, and custom stone elements.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ ...animationProfiles.text.spring, delay: 0.06 }}
                className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
              >
                {capabilities.map((item) => (
                  <div key={item} className="flex min-h-20 items-center gap-4 border border-white/8 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                    <Sparkles className="h-4 w-4 shrink-0 text-[var(--brass)]" />
                    <span className="text-sm uppercase tracking-[0.16em] text-white/72">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
