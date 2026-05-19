import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KOGO Dispatchers | Get a Dedicated Truck Dispatcher" },
      { name: "description", content: "Contact KOGO Dispatchers to start moving more freight. Call, email or send us a message, a dedicated dispatcher will get back to you fast." },
      { name: "keywords", content: "contact truck dispatcher, hire truck dispatcher, get truck loads, sign up for truck dispatch, kogo dispatchers phone number, trucking logistics contact" },
      { property: "og:title", content: "Contact KOGO Dispatchers" },
      { property: "og:description", content: "Get in touch with our dispatch team. Available 24/7 across the USA." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      mcNumber: String(fd.get("mcNumber") || ""),
      truck: String(fd.get("truck") || ""),
      message: String(fd.get("message") || ""),
    };
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || `Request failed (${res.status})`);
      toast.success("Message sent! Our dispatch team will reach out shortly.");
      form.reset();
    } catch (err: any) {
      toast.error(err?.message || "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="Red semi-truck on US highway" className="h-full w-full object-cover" loading="eager" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="container relative mx-auto px-4 md:px-6">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-accent/40">Contact</span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Let's Get You Moving</h1>
          <p className="mt-4 max-w-2xl text-white/85">Tell us about your truck and lanes. A dedicated dispatcher will get back to you fast.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: MapPin, label: "Office", value: "0811 Erdman Prairie, CA 1101" },
              { icon: Phone, label: "Phone", value: "+1 (234) 567 890 00" },
              // { icon: Mail, label: "Email", value: "info@kogodispatchers.com" },
            ].map((c) => (
              <Card key={c.label} className="border-border/60">
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground"><c.icon className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium text-foreground">{c.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/60 shadow-elegant lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We typically respond within a few hours.</p>
              <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required className="mt-1.5" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" className="mt-1.5" placeholder="+1 555 555 5555" />
                  </div>
                  <div>
                    <Label htmlFor="mcNumber">MC Number</Label>
                    <Input id="mcNumber" name="mcNumber" required className="mt-1.5" placeholder="e.g. 123456" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="truck">Truck type</Label>
                  <Input id="truck" name="truck" className="mt-1.5" placeholder="Reefer, Flatbed, Dry Van..." />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={5} className="mt-1.5" placeholder="Tell us about your business and lanes..." />
                </div>
                <Button type="submit" disabled={submitting} size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent hover:opacity-90">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </SiteLayout>
  );
}
