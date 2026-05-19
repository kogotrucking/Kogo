import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-faq.webp";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | KOGO Dispatchers Truck Dispatch Services" },
      {
        name: "description",
        content:
          "Answers to common questions about KOGO Dispatchers: pricing, supported truck types, onboarding, 24/7 support and more.",
      },
      { name: "keywords", content: "truck dispatch faq, truck dispatching questions, dispatcher requirements, cost of truck dispatcher, how to hire a dispatcher" },
      { property: "og:title", content: "Frequently Asked Questions | KOGO Dispatchers" },
      { property: "og:description", content: "Everything you need to know about working with KOGO Dispatchers." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "What does KOGO Dispatchers do?",
    a: "At KOGO Dispatchers, we provide professional truck dispatch services for owner-operators and small carriers across the USA. We help you find high-paying loads, negotiate the best rates, and handle all broker communication so you can focus on driving and growing your business.",
  },
  {
    q: "How does your dispatch service work?",
    a: "Once you're onboarded, our dispatchers start searching for the best loads based on your preferred lanes and equipment type. We negotiate top rates, handle all paperwork, and provide complete load details. From pickup to delivery, we stay in constant communication to ensure smooth operations.",
  },
  {
    q: "How can truck dispatch services increase my profits?",
    a: "Our experienced dispatchers use premium load boards, industry connections, and real-time market analysis to secure high-paying freight. By reducing downtime, minimizing deadhead miles, and negotiating better rates, we help maximize your weekly revenue.",
  },
  {
    q: "How much do you charge?",
    a: "We offer simple and transparent pricing, typically based on a small percentage per load. There are no upfront fees, long-term contracts, or hidden charges. You only pay when you get paid.",
  },
  {
    q: "What types of trucks and trailers do you work with?",
    a: "We work with a wide range of equipment including Dry Vans, Reefers, Flatbeds, Step Decks, Power Only, Hotshot, Box Trucks, and more. No matter your setup, we'll find loads that fit your business.",
  },
  {
    q: "Why choose KOGO Dispatchers over other dispatch companies?",
    a: "KOGO Dispatchers provides dedicated personal dispatchers, strong rate negotiation, access to premium freight, 24/7 driver support, transparent communication, and no hidden fees. We don't just dispatch loads, we partner in your success.",
  },
  {
    q: "How do you find high-paying loads?",
    a: "We use premium load boards, broker networks, and market data analysis to secure the best-paying freight. Our experienced dispatchers negotiate aggressively to help you get top dollar for every load.",
  },
  {
    q: "Do you provide 24/7 support?",
    a: "Yes. KOGO Dispatchers provides 24/7 support to ensure you're never alone on the road. From load booking to delivery updates, our team is always available when you need assistance.",
  },
  {
    q: "Can I choose my own loads?",
    a: "Absolutely. At KOGO Dispatchers, you stay in full control of your business. We present the best load options based on your preferences, and you decide which loads to accept.",
  },
  {
    q: "Do I need my own authority to work with KOGO Dispatchers?",
    a: "Yes, you need an active MC and DOT authority to work with us. If you're new to the industry, our team can guide you through the setup process and help you get started quickly.",
  },
  {
    q: "How quickly can I start working with KOGO Dispatchers?",
    a: "Getting started is simple and fast. Contact us via phone or email, complete a quick onboarding process, and we'll begin dispatching for you right away, often within 24 hours.",
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg}
            alt="Truck in warehouse loading bay"
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
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-accent/40">
            FAQs
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
        </motion.div>
      </section>
      <Section>
        <SectionHeader title="Got questions? We've got answers." />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Section>
    </SiteLayout>
  );
}
