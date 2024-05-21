import Header from "@/components/header";
import ContentHeader from "@/components/header/content-header";
import Sidebar from "@/components/sidebar";
import { ChevronLeft, ChevronRight, Home, Search } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-full">
      <Sidebar />
      <section
        className="
        h-full
        w-full
        bg-neutral-900
        overflow-hidden
        overflow-y-auto
        md:rounded-[8px]
      "
      >
        <Header>
          <ContentHeader />
        </Header>
        {children}
      </section>
    </main>
  );
}
