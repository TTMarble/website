import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <main className="pt-24">
        <section className="relative overflow-hidden border-t border-white/10 bg-[var(--graphite)] py-24 md:py-36">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-25 marble-line-field" />
          <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Project enquiry</p>
              <h2 className="section-title mt-6">Begin the next stone masterpiece.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/66">
                Use this section as the lead-generation path for luxury homeowners, builders, developers, architects, and commercial clients who need precise marble fabrication and site-ready installation.
              </p>
              <div className="mt-10 space-y-3 text-sm uppercase tracking-[0.18em] text-white/58">
                <p>Commercial fabrication</p>
                <p>Luxury residential stonework</p>
                <p>Complex profiles and 3D machine cutting</p>
              </div>
            </div>

            <form className="border border-white/12 bg-black/35 p-7 backdrop-blur-xl md:p-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="field-label">
                  Name
                  <input className="field-input" placeholder="Your name" />
                </label>
                <label className="field-label">
                  Email
                  <input className="field-input" placeholder="name@example.com" type="email" />
                </label>
              </div>
              <label className="field-label mt-6">
                Project type
                <select className="field-input" defaultValue="">
                  <option value="" disabled>Choose a project type</option>
                  <option>Commercial project</option>
                  <option>Luxury residential project</option>
                  <option>Builder / developer partnership</option>
                  <option>Architect / interior designer collaboration</option>
                </select>
              </label>
              <label className="field-label mt-6">
                Project details
                <textarea className="field-input min-h-36 resize-none" placeholder="Tell us about the stone, space, timeline, and level of detail required." />
              </label>
              <button className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[var(--brass)] px-8 py-5 text-xs uppercase tracking-[0.28em] text-black transition duration-500 hover:bg-[var(--ivory)]" type="submit">
                Send enquiry <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="mt-5 text-xs leading-6 text-white/45">
                It can later be connected to email. Or the mobile/email above is sufficient?
              </p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
