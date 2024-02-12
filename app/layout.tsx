import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../Provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Paystride: Control Panel",
    description: "Paystride's control panel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="w-full h-full">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
