import type { Metadata } from "next";
import "./globals.css";
import ProviderOfSession from "@/config/sessionProvider";
import ProvidersOfChakra from "@/config/chakraProvider";
import { Open_Sans } from "next/font/google"
import Footer from "./ui/elements/Footer";

export const metadata: Metadata = {
  title: "Warung Web",
  description: "Generated by create next app",
};

const openSans = Open_Sans({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ProviderOfSession>
          <ProvidersOfChakra>{children}</ProvidersOfChakra>
        </ProviderOfSession>
        <Footer />
      </body>
    </html>
  );
}
