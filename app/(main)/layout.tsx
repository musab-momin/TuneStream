import Header from "@/components/header";
import ContentHeader from "@/components/header/content-header";
import Sidebar from "@/components/sidebar";
import Welcome from "@/components/Welcome";

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
          <Welcome />
        </Header>
        {children}
      </section>
    </main>
  );
}
