import { Header } from "./Header";
import { Footer } from "./Footer";
import { Topbar } from "./Topbar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
