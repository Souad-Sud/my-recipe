import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserConterProvider } from "@/utils/contexts";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "change",
icons: {
    icon: "/LogoImg/logorec.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main">
          {/* <MainInformation /> */}
          <UserConterProvider>
            {/* <LogInWrapper> */}
            {children}
            {/* </LogInWrapper> */}
          </UserConterProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
