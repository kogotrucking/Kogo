import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-about.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KOGO Dispatchers | Trusted Truck Dispatch Partner" },
      { name: "description", content: "Learn about KOGO Dispatchers, our vision, mission and commitment to helping owner-operators and small fleets grow with reliable dispatch." },
      { name: "keywords", content: "about kogo dispatchers, truck dispatch company, reliable truck dispatcher, best truck dispatchers usa, professional truck dispatch" },
      { property: "og:title", content: "About KOGO Dispatchers" },
      { property: "og:description", content: "We build long-term trucking partnerships rooted in trust, performance and reliability." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg} 
            alt="Truck on scenic American highway" 
            className="h-full w-full object-cover object-[center_65%]" 
            loading="eager" 
            decoding="async" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative mx-auto px-4 md:px-6"
        >
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-accent/40">About Us</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Trusted & Reliable Dispatch Services</h1>
          <p className="mt-4 max-w-2xl text-white/85">At KOGO Dispatchers we believe in building long-term partnerships based on trust, performance, and reliability. Your success is our priority, we are driven to keep you moving forward.</p>
        </motion.div>
      </section>

      <Section>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="relative p-10">
                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                  <Eye className="h-8 w-8" />
                </span>
                <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  To set the benchmark for excellence in the dispatch industry by delivering innovative,
                  data-driven solutions that redefine efficiency, reliability and growth for modern trucking businesses.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <CardContent className="relative p-10">
                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                  <Target className="h-8 w-8" />
                </span>
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Provide world-class dispatch services that empower owner-operators and fleet owners to operate at peak performance.
                  Through strategic load planning, strong industry relationships and uncompromising professionalism, we drive consistent results,
                  maximize revenue and build lasting partnerships grounded in trust and transparency.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Our Values" title="What We Stand For" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            { icon: ShieldCheck, title: "Trust & Transparency", desc: "Honest communication and complete clarity on every load and decision." },
            { icon: Award, title: "Performance", desc: "Data-driven dispatching focused on real outcomes: more loaded miles and higher RPM." },
            { icon: Target, title: "Partnership", desc: "We treat your business like our own and grow alongside you." },
          ].map((v) => (
            <motion.div 
              key={v.title} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                  <v.icon className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed md:text-base">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent transition-transform hover:scale-105">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </motion.div>
      </Section>
    </SiteLayout>
  );
}
