
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingSocial } from "@/components/floating-social";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroBackground from "@/components/hero-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "RsnXfolio | Creative Developer",
  description: "Portfolio of RsnXfolio - A passionate developer building modern web experiences.",
  keywords: ["Portfolio", "Web Developer", "Next.js", "React", "Creative"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeroBackground />
          <Navbar />
          <main className="min-h-screen relative flex flex-col">
            {children}
          </main>
          <FloatingSocial />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
