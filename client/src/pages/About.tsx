import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeUp, teamMembers, credentials } from "@/lib/siteData";
import kevinPhoto from "../assets/images/Kevin-Profile.png";

const teamPhotos: (string | null)[] = [kevinPhoto, null, null];

const teamLabels = ["Owner", "factory manager", "installation lead"];

export default function About() {
  return (
    <Layout>
      <main>
        <section className="relative overflow-hidden bg-black py-24 md:py-36">
          <div className="pointer-events-none absolute -right-24 top-20 h-[32rem] w-[32rem] rounded-full bg-[var(--brass)]/8 blur-[150px]" />
          <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.8 }}>
                <p className="eyebrow">About the atelier</p>
                <h2 className="section-title mt-6">A dedicated can-do team for difficult stone requirements.</h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
                  Premium fabrication depends on experienced people who are willing to solve problems instead of simply declining complexity. This section can introduce the team behind TT Marble, showing builders, developers, designers, and owners who will be responsible for the project from slab selection to site installation.
                </p>
              </motion.div>

              <div className="grid gap-5">
                {teamMembers.map((member, index) => (
                  <motion.article
                    key={member.role}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    className="grid gap-6 border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:border-[var(--brass)]/50 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center border border-[var(--brass)]/55 bg-black/35 overflow-hidden">
                      {teamPhotos[index] ? (
                        <img src={teamPhotos[index]!} alt={member.name} className="h-full w-full object-cover" />
                      ) : (
                        <UserRound className="h-7 w-7 text-[var(--brass)]" />
                      )}
                    </div>
                    <div>
                      <h3 className="mt-3 font-serif text-4xl tracking-[-0.05em] text-[var(--ivory)]">
                        {member.name}<span className="ml-3 font-sans text-sm uppercase tracking-[0.3em] text-[var(--brass)]">, {teamLabels[index]}</span>
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-white/62">{member.copy}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-10 border border-white/10 bg-white/[0.03] p-7 md:p-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="eyebrow">Business details</p>
                <h3 className="mt-6 font-serif text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--ivory)]">Credentials clients can check before they call.</h3>
                <p className="mt-6 text-sm leading-7 text-white/58">
                  This area is designed for practical trust signals: trade licence, ABN, factory address, mobile, email, and service area. Replace the placeholders with verified business details before launch.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {credentials.map((item) => {
                  const CredentialIcon = item.icon;
                  return (
                    <article key={item.label} className="border border-white/10 bg-black/25 p-5">
                      <div className="flex items-center gap-3">
                        <CredentialIcon className="h-5 w-5 shrink-0 text-[var(--brass)]" />
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">{item.label}</p>
                      </div>
                      <p className="mt-3 text-base leading-7 text-[var(--ivory)]">{item.value}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
