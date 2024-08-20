'use client';
import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    
    </>
  );
}