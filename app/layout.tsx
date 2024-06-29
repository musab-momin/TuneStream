import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SupabaseProvider } from "@/context/SupabaseProvider";
import "./globals.css";
import StoreProvider from "@/context/StoreProvider";
import UserProvider from "@/context/UserProvider";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import Gramophone from "@/components/Gramophone";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "TuneStream - Web Player: Music for everyone",
  description:
    "TuneStream is a digital music service that gives you access to millions of songs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SupabaseProvider>
          <StoreProvider>
            <UserProvider>
              {children}
              <Gramophone />
              <AuthModal />
              <UploadModal />
            </UserProvider>
          </StoreProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
