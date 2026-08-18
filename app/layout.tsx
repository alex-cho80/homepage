import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectX",
  description: "진단 → 큐레이션/설계 → 실행 → 지속관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-connectx-navy antialiased">
        {children}
      </body>
    </html>
  );
}
