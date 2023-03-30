import "./globals.css";
import { Metadata } from "next";
import { Footer } from "@/lib/components/server/Footer";
import { Navbar } from "@/lib/components/server/Navbar";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Olino - La solution d'assurance pour les entreprises",
  description: "Assurez votre entreprise en quelques minutes seulement!",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-base`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
