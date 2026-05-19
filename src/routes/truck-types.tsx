import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-trucktypes.webp";

export const Route = createFileRoute("/truck-types")({
  head: () => ({
    meta: [
      { title: "Truck Dispatch for All Truck Types | Reefer, Flatbed, Dry Van & More" },
      { name: "description", content: "Truck dispatch services for reefer, flatbed, dry van, step deck, lowboy, power only, box truck, hot shot, tanker and expedited freight." },
      { name: "keywords", content: "reefer dispatch, flatbed dispatch, dry van dispatch, step deck dispatch, hot shot dispatch, box truck dispatcher, power only dispatch, tanker dispatch" },
      { property: "og:title", content: "Truck Dispatch Services for Every Truck Type" },
      { property: "og:description", content: "Comprehensive dispatch solutions for every major truck and trailer type in the USA." },
    ],
  }),
  component: TruckTypesPage,
});

const Truck1Icon = (props: any) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
);

const Truck2Icon = (props: any) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M624 288h-16v-64c0-17.67-14.33-32-32-32h-48L419.22 56.02A64.025 64.025 0 0 0 369.24 32H256c-17.67 0-32 14.33-32 32v128H64c-17.67 0-32 14.33-32 32v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h49.61c-.76 5.27-1.61 10.52-1.61 16 0 61.86 50.14 112 112 112s112-50.14 112-112c0-5.48-.85-10.73-1.61-16h67.23c-.76 5.27-1.61 10.52-1.61 16 0 61.86 50.14 112 112 112s112-50.14 112-112c0-5.48-.85-10.73-1.61-16H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM288 96h81.24l76.8 96H288V96zM176 416c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm288 0c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path></svg>
);

const Truck3Icon = (props: any) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M128 320c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm400 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 48c0 26.51-21.49 48-48 48h-10.72c-15.02 28.51-44.8 48-79.28 48s-64.26-19.49-79.28-48H235.28c-15.02 28.51-44.8 48-79.28 48s-64.26-19.49-79.28-48H48c-26.51 0-48-21.49-48-48V160c0-26.51 21.49-48 48-48h224V80c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48v288zM48 176v128h224V176H48zm496 0v-64H336v192h208v-128z"></path></svg>
);

const Truck4Icon = (props: any) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M624 224h-16v-64c0-17.67-14.33-32-32-32h-73.6L419.22 24.02A64.025 64.025 0 0 0 369.24 0H256c-17.67 0-32 14.33-32 32v96H48c-8.84 0-16 7.16-16 16v80H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16.72c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64h65.45c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-336-96V64h81.24l51.2 64H288zm304 224h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A110.85 110.85 0 0 0 512 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67A110.85 110.85 0 0 0 373.2 352H368c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a110.85 110.85 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32c-.02-8.84-7.18-16-16.02-16zm-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-208-80h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A110.85 110.85 0 0 0 192 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0L58.18 304.8c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67a110.85 110.85 0 0 0-8.65 20.89H48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a110.85 110.85 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32C288 359.16 280.84 352 272 352zm-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"></path></svg>
);

const Truck5Icon = (props: any) => (
  <svg aria-hidden="true" viewBox="0 0 640 512" fill="currentColor" {...props}><path d="M50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1l49.6 185.5zM384 0c-17.7 0-32 14.3-32 32v323.6L5.9 450c-4.3 1.2-6.8 5.6-5.6 9.8l12.6 46.3c1.2 4.3 5.6 6.8 9.8 5.6l393.7-107.4C418.8 464.1 467.6 512 528 512c61.9 0 112-50.1 112-112V0H384zm144 448c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg>
);

const types = [
  { title: "Refrigerated (Reefer) Truck Dispatch", icon: Truck1Icon, desc: "Temperature-controlled reefer freight including food and pharmaceuticals. Standard 53 ft reefer trailers with insulated walls and up to 44,000 lbs capacity." },
  { title: "Flatbed Truck Dispatch", icon: Truck2Icon, desc: "Construction materials, steel and heavy industrial freight. Trailer sizes 48 to 53 ft with up to 48,000 lbs weight capacity." },
  { title: "Dry Van Truck Dispatch", icon: Truck3Icon, desc: "Standard dry van trucking on all major US lanes. Typical 53 ft trailer, 8.5 ft wide, 9 ft tall, up to 45,000 lbs payload." },
  { title: "Step Deck (Drop Deck) Dispatch", icon: Truck4Icon, desc: "Oversized and tall cargo requiring lower deck clearance. 48 to 53 ft trailers, up to 48,000 lbs and 10 to 11 ft height clearance." },
  { title: "Double Drop / Lowboy Dispatch", icon: Truck5Icon, desc: "Heavy haul and oversized machinery. Lowboy and double drop trailers carry 40,000 to 80,000+ lbs with proper permits." },
  { title: "Power Only Dispatch", icon: Truck4Icon, desc: "We connect tractors with available trailers across the US freight network. Loads up to 45,000 lbs depending on equipment." },
  { title: "Box Truck / Straight Truck Dispatch", icon: Truck1Icon, desc: "Local and regional box truck freight. Common sizes 12, 16, 24 and 26 ft with 10,000 to 12,000 lbs capacity." },
  { title: "Hot Shot Truck Dispatch", icon: Truck2Icon, desc: "Pickup trucks with gooseneck or small trailers for expedited regional deliveries. Typical loads 2,000 to 16,000 lbs." },
  { title: "Tanker Truck Dispatch", icon: Truck4Icon, desc: "Liquid freight including fuel, chemicals and food-grade liquids. Generally 7,000 to 11,000 gallons depending on material." },
  { title: "Expedited Truck Dispatch", icon: Truck2Icon, desc: "Urgent freight dispatch for time-sensitive shipments. Typically under 20,000 lbs with flexible truck and trailer requirements." },
];

function TruckTypesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="Reefer semi-truck at warehouse dock" className="h-full w-full object-cover" loading="eager" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-accent/40">Truck Types</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Truck Dispatch Services for All Major Truck Types</h1>
          <p className="mt-4 max-w-2xl text-white/85">Comprehensive truck dispatch solutions for every truck and trailer type across the USA.</p>
        </div>
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
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {types.map((t) => (
            <motion.div 
              key={t.title} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardContent className="relative flex flex-col gap-5 p-8 md:flex-row md:items-start md:p-10">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-accent">
                    <t.icon className="h-8 w-8 transition-transform duration-500 group-hover:rotate-3" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight md:text-2xl">{t.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent">
            <Link to="/contact">Get a Dispatcher for Your Truck</Link>
          </Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
