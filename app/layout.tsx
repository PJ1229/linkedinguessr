import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"Past Lives — career guessing game", description:"A consent-first social game where you guess people from anonymized career paths." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
