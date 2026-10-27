import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata = {
  title: "Marie-Grâce — Frontend Developer",
  description: "Marie-Grâce is a frontend developer building thoughtful, modern, and accessible web experiences.",
  openGraph: { title: "Marie-Grâce — Frontend Developer", description: "Thoughtful interfaces for the modern web.", type: "website", images: ["/og-image.svg"] },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={poppins.variable}><body>{children}</body></html>;
}
