import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/kogo-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <img src={logo} alt="KOGO Dispatchers" className="h-14 w-auto" />
          <p className="text-sm text-white/70">
            Fast, reliable & global dispatching services for owner-operators and small fleets across the USA.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Company</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/truck-types" className="hover:text-accent">Truck Types</Link></li>
            <li><Link to="/faq" className="hover:text-accent">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Load Sourcing</li>
            <li>Rate Negotiation</li>
            <li>Route Optimization</li>
            <li>Paperwork Management</li>
            <li>24/7 Dispatch Support</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" />0811 Erdman Prairie, CA 1101</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" />+1 (234) 567 890 00</li>
            {/* <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" />info@kogodispatchers.com</li> */}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-white/60 md:px-6">
          © {new Date().getFullYear()} KOGO Dispatchers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
