 import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './Footer'
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Udrive car rental",
  description: "Rent our cars for your trips",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="icon" href="./udriveimages/applogo.jpg" /> */}
      <body className={inter.className}>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
