import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Truck, DollarSign, Phone, MapPin, FileText, Route as RouteIcon,
  TrendingUp, Headphones, Shield, Users, Clock, CheckCircle2, ArrowRight, Star
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero-header.webp";
import truckImg from "@/assets/kogo-truck.png";
import heroAbout from "@/assets/hero-about.webp";
import heroServices from "@/assets/hero-services.webp";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KOGO Dispatchers | Truck Dispatch Services for Owner-Operators & Fleets" },
      { name: "description", content: "Partner with KOGO Dispatchers for high-paying loads, 24/7 support and nationwide US coverage. We dispatch, you drive, you grow." },
      { name: "keywords", content: "truck dispatch, truck dispatch services, owner operator dispatch, freight dispatch, high paying truck loads, CDL dispatcher, dispatching company, USA dispatch, kogo dispatchers" },
      { property: "og:title", content: "KOGO Dispatchers | You Drive. We Dispatch. You Grow." },
      { property: "og:description", content: "More loads. More miles. More profits. Trusted truck dispatch services across the USA." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: DollarSign, title: "High-Paying Loads" },
  { icon: Headphones, title: "24/7 Support" },
  { icon: MapPin, title: "Nationwide USA Coverage" },
  { icon: FileText, title: "Paperwork Management" },
];

const services = [
  { icon: Truck, title: "High-Paying Freight Load Sourcing", desc: "We secure premium loads from top boards and broker networks to keep your truck moving with profitable freight." },
  { icon: TrendingUp, title: "Advanced Rate Negotiation", desc: "Our dispatchers leverage market data to lock in competitive rates and increase your revenue per mile." },
  { icon: RouteIcon, title: "Route Optimization", desc: "Smart route planning that reduces deadhead miles, saves fuel, and maximizes loaded miles every week." },
  { icon: Phone, title: "Broker & Shipper Communication", desc: "We handle all calls, confirmations, and coordination so loads get booked and moving fast." },
  { icon: FileText, title: "Documentation & Billing", desc: "Rate confirmations, BOLs, invoicing, full paperwork management for hassle-free operations." },
  { icon: Headphones, title: "24/7 Dispatch Support", desc: "Real-time, round-the-clock assistance that keeps your business running without interruption." },
];

const why = [
  { icon: DollarSign, title: "High-paying loads every week", desc: "Premium load board access keeps your weekly revenue strong." },
  { icon: RouteIcon, title: "Reduced deadhead miles", desc: "Back-to-back load planning means lower fuel costs and more loaded miles." },
  { icon: Users, title: "Experienced dispatch team", desc: "Pros who understand freight markets and lane planning." },
  { icon: TrendingUp, title: "Strong rate negotiation", desc: "Data-driven negotiation pushes your rate per mile higher." },
  { icon: Shield, title: "Fast & reliable support", desc: "Quick responses and proactive broker management." },
  { icon: Clock, title: "Dedicated dispatcher 24/7", desc: "A dispatcher who knows your truck, lanes, and preferences." },
];

const steps = [
  { n: "01", title: "Quick Onboarding", desc: "Share your MC, truck type and lane preferences, we set you up to start hauling fast.", img: heroImg },
  { n: "02", title: "Load Search & Planning", desc: "We mine premium boards and broker networks and plan routes to maximize profit.", img: heroAbout },
  { n: "03", title: "Rate Negotiation & Booking", desc: "We negotiate top rates and lock in confirmed loads on your behalf.", img: truckImg },
  { n: "04", title: "Dispatch & 24/7 Support", desc: "We dispatch, manage paperwork, and support every trip end-to-end.", img: heroServices },
];

function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 800], [1, 0.2]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white min-h-[90vh] flex items-center">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0">
          <img src={heroImg} alt="Red semi-truck on US highway at sunset" className="h-full w-full object-cover" width={1920} height={1080} loading="eager" decoding="async" fetchPriority="high" />
        </motion.div>
        
        {/* Refined gradient overlay for text legibility while letting image pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-black/10" /> {/* Slight uniform darkening */}

        <div className="container relative mx-auto px-4 py-20 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-md"
              >
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                Trusted by 500+ Owner-Operators
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:leading-[1.1]"
              >
                You Drive. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent to-red-600">We Dispatch.</span> <br />
                You Grow.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-xl font-medium text-white/90 md:text-2xl"
              >
                MORE LOADS. <span className="text-accent">MORE MILES.</span> MORE PROFITS.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 max-w-xl text-base text-white/70 md:text-lg leading-relaxed"
              >
                Partner with a reliable team that works for your success. We find high-paying loads,
                handle paperwork, negotiate rates and keep your trucks moving across the USA.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold bg-accent text-accent-foreground shadow-[0_0_40px_-10px_rgba(255,0,0,0.5)] hover:bg-accent/90 hover:shadow-[0_0_60px_-15px_rgba(255,0,0,0.6)] transition-all duration-300">
                  <Link to="/contact">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section className="py-12 md:py-14">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div 
              key={h.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-start gap-4 rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 shadow-sm transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                <h.icon className="h-7 w-7" />
              </span>
              <span className="font-bold tracking-tight text-lg">{h.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ABOUT TEASER */}
      <Section className="bg-secondary/40 overflow-hidden">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">About Our Company</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Trusted & Reliable Dispatch Services</h2>
            <p className="mt-4 text-muted-foreground">
              At KOGO Dispatchers we build long-term partnerships rooted in trust, performance and reliability.
              Your success is our priority, we are driven to keep you moving forward.
            </p>
            <ul className="mt-6 space-y-3">
              {["Owner-operator focused", "Small fleet friendly", "Nationwide load coverage"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />{t}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline" className="group"><Link to="/about">Learn more about us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <Card className="group relative overflow-hidden border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold tracking-tight text-accent">Our Vision</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">To set the benchmark for excellence in dispatch through data-driven solutions that redefine efficiency, reliability and growth.</p>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lg sm:translate-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold tracking-tight text-accent">Our Mission</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">World-class dispatch that empowers owner-operators and fleets to operate at peak performance with consistent results.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader eyebrow="What We Do" title="Built for Truckers. Focused on Results." subtitle="Comprehensive truck dispatch services that handle the back-office so you can focus on driving." />
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
          className="grid gap-6 md:grid-cols-3"
        >
          {services.slice(0, 3).map((s) => (
            <motion.div 
              key={s.title} 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardContent className="relative flex h-full flex-col justify-between p-8">
                  <div>
                    <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                      <s.icon className="h-8 w-8" />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* WHY */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Why Choose Us" title="Your Success Starts with the Right Dispatcher" subtitle="We don't just book loads, we build long-term partnerships with truckers who want consistent income and less stress." />
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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {why.map((w) => (
            <motion.div 
              key={w.title} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                  <w.icon className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-bold tracking-tight">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed md:text-base">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader eyebrow="How It Works" title="Simple, Efficient Process" subtitle="From onboarding to delivery, a streamlined workflow that keeps revenue flowing." />
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Vertical Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-border md:left-1/2 md:-ml-px" 
          />
          
          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div 
                  key={s.n} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:items-center gap-8 md:gap-16"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.2 + 0.3 }}
                    className="absolute left-[28px] top-6 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full border-4 border-background bg-accent z-10 shadow-sm" 
                  />

                  {/* Content */}
                  <div className={`pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:text-left md:pl-12'} flex flex-col justify-center space-y-4`}>
                    <span className={`inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent w-fit ${isEven ? 'md:ml-auto' : ''}`}>STEP {s.n}</span>
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{s.title}</h3>
                    <p className="text-base text-muted-foreground md:text-lg">{s.desc}</p>
                  </div>

                  {/* Image */}
                  <div className={`pl-16 md:pl-0 w-full relative ${isEven ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12'}`}>
                    <div className="aspect-[16/9] md:aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-elegant ring-1 ring-border/50 bg-card group">
                      <img src={s.img} alt={s.title} className="h-full w-full object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Testimonials" title="What Our Partners Say" subtitle="Don't just take our word for it. See why truckers across the country trust KOGO Dispatchers." />
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
          {reviews.map((r) => (
            <motion.div 
              key={r.id} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex-1">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < r.rating ? "fill-current" : "opacity-30"}`} />
                  ))}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed italic">"{r.review}"</p>
              </div>
              <div className="relative mt-8 border-t border-border/40 pt-6">
                <p className="font-bold tracking-tight">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={truckImg} 
            alt="KOGO Dispatchers branded truck on the highway at sunset" 
            className="h-full w-full object-cover object-center" 
            loading="lazy" 
            decoding="async" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="container relative mx-auto px-4 text-center md:px-6"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Move Your Truck with Confidence?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent hover:opacity-90 transition-transform hover:scale-105">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 transition-transform hover:scale-105">
              <Link to="/truck-types">View Truck Types</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
