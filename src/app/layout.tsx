import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import CartSidebar from "@/components/CartSidebar";
import WelcomePopup from "@/components/WelcomePopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const libre = Libre_Baskerville({
  weight: ["400", "700", "400"],
  subsets: ["latin"],
  variable: "--font-libre",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "PUBLIQ देहरादून – Kitchen & Spirits",
  description: "A premium high-end restaurant inspired by Dehradun and Mussoorie heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${libre.variable} font-libre bg-parchment text-deep-brown antialiased selection:bg-golden-highlight selection:text-white`}
      >
        {children}
        <WelcomePopup />
        <CartSidebar />
      </body>
    </html>
  );
}
