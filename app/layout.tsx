import type { Metadata } from "next";
import { Instrument_Sans, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-kaku",
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
      <body className={`${instrumentSans.variable} ${zenKakuGothicNew.variable}`}>
        {children}
      </body>
    </html>
  );
}
