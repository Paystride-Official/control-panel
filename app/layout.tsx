import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../Provider/provider";
import { QueryProvider } from "@/Provider/QueryProvider";
import { StoreProvider } from "@/Provider/StoreProviders";

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
        <StoreProvider>
          <QueryProvider>
            <Providers>{children}</Providers>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
