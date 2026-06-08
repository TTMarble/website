import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { images, fadeUp, cardFadeUp, process, animationProfiles } from "@/lib/siteData";

export default function Craft() {
  return (
    <Layout>
      <main className="flex flex-1 pt-20">
        <section className="relative flex flex-1 overflow-hidden bg-black py-8 md:py-10 lg:py-[clamp(1rem,2.5vh,2.5rem)]">
          <div className="pointer-events-none absolute right-0 top-0 h-[38rem] w-[38rem] rounded-full bg-[var(--brass)]/8 blur-[140px]" />
          <div className="mx-auto grid w-full max-w-[1500px] flex-1 gap-6 px-5 md:px-10 lg:min-h-0 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-7">
            <motion.div className="lg:flex lg:min-h-0 lg:flex-col" initial="hidden" animate="visible" variants={fadeUp} transition={animationProfiles.text.spring}>
              <div>
                <p className="eyebrow">The craft</p>
                <h2 className="mt-3 font-serif text-[clamp(2.2rem,3.2vw,3.6rem)] leading-[0.95] tracking-[-0.04em] text-[var(--ivory)]">From a raw slab to a resolved architectural piece.</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-white/66">
                  The value of marble fabrication is not only the cut. It is the judgement before the cut, the accuracy during production, and the discipline of finishing and installation after it.
                </p>
              </div>
              <div className="mt-5 overflow-hidden border border-white/10 bg-white/[0.03] lg:min-h-0 lg:flex-1">
                <img src={images.inspection} alt="Stone specialist inspecting marble slab in a premium slab gallery" className="h-[clamp(13rem,34vw,28rem)] w-full object-cover transition duration-700 hover:scale-105 lg:h-full" />
              </div>
            </motion.div>

            <motion.div className="grid gap-3 md:grid-cols-2 md:gap-3 lg:self-center" initial="hidden" animate="visible" transition={animationProfiles.stagger.container}>
              {process.map((item, index) => (
                <motion.article
                  key={item.step}
                  variants={cardFadeUp}
                  transition={{ ...animationProfiles.card.spring, delay: animationProfiles.stagger.cardDelay(index) }}
                  className="group min-h-[8rem] border border-white/10 bg-white/[0.035] p-3 transition-colors duration-500 hover:border-[var(--brass)]/55 hover:bg-white/[0.06] md:min-h-[8.5rem] lg:min-h-[clamp(7.25rem,10.5vh,8.75rem)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.34em] text-[var(--brass)]">{item.step}</span>
                    <span className="h-px w-12 bg-[var(--brass)]/40 transition duration-500 group-hover:w-20" />
                  </div>
                  <h3 className="font-serif text-[1.85rem] tracking-[-0.03em] text-[var(--ivory)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/61">{item.copy}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
