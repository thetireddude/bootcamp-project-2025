import type { Metadata } from "next";
import { Geist_Mono, Agdasima, Pacifico, Inconsolata } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/navbar';

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: '400'
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ['300', '400'],
  style: 'normal'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const agdasima = Agdasima({
  weight: '400',
  variable:  "--font-agdasima",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar's Website",
  description: "React+Next portfolio website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${pacifico.variable} ${agdasima.variable} ${geistMono.variable} `}>
        <NavBar/>
        {children}
        <footer className="footer">
        © 2025 Omar's Website | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
