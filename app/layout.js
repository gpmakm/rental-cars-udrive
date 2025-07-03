 import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './Footer'
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuktiSutram",
  description: "Get free, motivating and inspiring quotes",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
