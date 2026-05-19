import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, TrendingUp, Route as RouteIcon, Phone, FileText, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-services.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Truck Dispatch Services | Load Sourcing, Rate Negotiation & 24/7 Support" },
      { name: "description", content: "Full-service truck dispatch: high-paying freight load sourcing, rate negotiation, route optimization, paperwork management and 24/7 dispatch support." },
      { name: "keywords", content: "truck load sourcing, rate negotiation trucking, freight route optimization, dispatch paperwork management, 24/7 truck dispatch, full service truck dispatch" },
      { property: "og:title", content: "Our Truck Dispatch Services" },
      { property: "og:description", content: "Built for truckers, focused on results. Comprehensive dispatch services across the USA." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Truck, title: "High-Paying Freight Load Sourcing", desc: "We secure high-paying freight loads using premium load boards and broker networks. Our truck dispatch services keep your truck loaded with consistent and profitable freight." },
  { icon: TrendingUp, title: "Advanced Freight Rate Negotiation", desc: "We negotiate competitive freight rates to ensure maximum earnings on every load. Our experienced dispatchers use market analysis to increase your rate per mile." },
  { icon: RouteIcon, title: "Route Optimization & Deadhead Reduction", desc: "We optimize routes to reduce deadhead miles and improve fuel efficiency. Our dispatch services increase loaded miles and maximize your overall profitability." },
  { icon: Phone, title: "Professional Broker & Shipper Communication", desc: "We manage all broker and shipper communication with professionalism and efficiency. Our dispatch team ensures smooth coordination and quick load confirmations." },
  { icon: FileText, title: "Freight Documentation & Billing Management", desc: "We handle all freight paperwork including rate confirmations and invoicing processes. Our dispatch services ensure accurate documentation for hassle-free operations." },
  { icon: Headphones, title: "24/7 Dedicated Dispatch & Operational Support", desc: "We provide 24/7 dedicated truck dispatch support for uninterrupted operations. Our team ensures real-time assistance to keep your business running smoothly." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg} 
            alt="Truck at sunset fuel stop" 
            className="h-full w-full object-cover" 
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
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-accent/40">Services</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Built for Truckers. Focused on Results.</h1>
          <p className="mt-4 max-w-2xl text-white/85">Comprehensive truck dispatch services for owner-operators and small fleets across the USA.</p>
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
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div 
              key={s.title} 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardContent className="relative flex h-full flex-col p-8 md:p-10">
                  <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                    <s.icon className="h-8 w-8" />
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <section className="bg-gradient-hero py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center md:px-6 relative z-10"
        >
          <SectionHeader eyebrow="Get Started" title="Ready to Move Your Truck with Confidence?" subtitle="Fast & reliable truck dispatch services for high-paying freight loads nationwide." />
          <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent transition-transform hover:scale-105">
            <Link to="/contact">Talk to a Dispatcher</Link>
          </Button>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
