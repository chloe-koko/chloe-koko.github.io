import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Chloe's Web Site",
  description: "Chloe's Web Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="site-header">
          <div className="page-container">
            <Link href="/" className="header-logo-link">
              <Image
                src="/coconut-logo.png"
                alt="Coconut logo"
                width={170}
                height={170 * (1024 / 1536)}
                priority
              />
              <span className="header-title">Chloe's Website</span>
            </Link>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="page-container">
            <hr className="footer-rule" />
            <div className="footer-links">
              <a href="https://kokona.website" target="_blank" rel="noopener noreferrer">Kokona Website</a>
              <span className="footer-pipe">|</span>
              <Link href="/bridges">🌉 Bridges</Link>
              <span className="footer-pipe">|</span>
              <Link href="/blogs">📝 Blog</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
