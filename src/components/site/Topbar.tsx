import { MapPin, Mail } from "lucide-react";

export function Topbar() {
  return (
    <div className="bg-[#ff0000] text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row md:text-sm font-medium">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>034 Erling Knolls, Dakota 8902</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:info@kogodispatchers.com" className="hover:underline">
            info@kogodispatchers.com
          </a>
        </div>
      </div>
    </div>
  );
}
