import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Uni-Share",
    template: "%s | Uni-Share",
  },
  description:
    "Uni-Share is a Tokyo-based student-led fashion free magazine and creative collective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={instrumentSans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
