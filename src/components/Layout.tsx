import { ReactNode } from "react";
import BrandHeader from "./BrandHeader";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <BrandHeader />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
