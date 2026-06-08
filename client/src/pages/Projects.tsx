import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { markets, fadeUp, cardFadeUp, animationProfiles } from "@/lib/siteData";

export default function Projects() {
  const [, navigate] = useLocation();

  const handleMarketClick = (title: string) => {
    const marketType = title === "Commercial Projects" ? "commercial" : "residential";
    navigate(`/projects/${marketType}`);
  };

  return (
    <Layout>
      <main className="pt-24">
        <section className="bg-black py-12 md:py-16">
          <div className="mx-auto max-w-[1500px] px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={animationProfiles.text.spring}>
                <p className="eyebrow">Project range</p>
                <h2 className="mt-6 font-serif text-[clamp(1.45rem,2.7vw,2.8rem)] leading-[1.02] tracking-[-0.03em] text-[var(--ivory)]">Built for demanding commercial and residential work.</h2>
              </motion.div>
              <motion.p className="max-w-3xl text-lg leading-8 text-white/66 lg:pt-12" initial="hidden" animate="visible" variants={fadeUp} transition={{ ...animationProfiles.text.spring, delay: 0.06 }}>
                The company is positioned for clients who need a fabrication partner capable of both high-standard execution and practical project coordination. That includes luxury builders, developers, architects, interior designers, and owners with ambitious stone details.
              </motion.p>
            </div>

            <motion.div className="mt-16 grid gap-8 lg:grid-cols-2" initial="hidden" animate="visible" transition={animationProfiles.stagger.container}>
              {markets.map((market, index) => (
                <motion.article
                  key={market.title}
                  variants={cardFadeUp}
                  transition={{ ...animationProfiles.card.spring, delay: animationProfiles.stagger.cardDelay(index) }}
                  onClick={() => handleMarketClick(market.title)}
                  className="group transform-gpu will-change-transform overflow-hidden border border-white/10 bg-white/[0.035] transition duration-500 hover:border-[var(--brass)]/55 hover:bg-white/[0.06] cursor-pointer"
                >
                  <div className="relative h-[28rem] overflow-hidden">
                    <img src={market.image} alt={`${market.title} marble fabrication example`} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="font-serif text-5xl tracking-[-0.05em] text-[var(--ivory)]">{market.title}</h3>
                    <p className="mt-6 text-base leading-8 text-white/64">{market.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
