import type { Metadata } from "next";
import { Manrope, Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-kr",
});

export const metadata: Metadata = {
  title: { default: "ConnectX", template: "%s | ConnectX" },
  description: "진단 → 큐레이션/설계 → 실행 → 지속관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${manrope.variable} ${notoSansKr.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-connectx-navy antialiased font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
