"use client"
import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import type { Metadata } from "next"
import { MainProvider } from "@/app/context/MainContext"

// export const metadata: Metadata = {
//   title: "Paystride: Control Panel",
//   description: "Paystride's control panel",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <main className="w-full flex">
        <Sidebar display={"hidden"} displaymd={"flex"} />
        <div className="flex flex-col flex-[7]">
          <Navbar />
          <div className=" w-full bg-[#FAFAFA] min-h-[88vh] p-5">
            <MainProvider>
              {children}
            </MainProvider>
          </div>
        </div>
      </main>
    </section>
  )
}
