import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paystride: Control Panel",
    description: "Paystride's control panel",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <main className="w-full flex">
                <Sidebar display={"hidden"} displaymd={"flex"} />
                <div className="flex flex-col flex-[7]">
                    <Navbar />
                    <div className=" w-full bg-[#FAFAFA] min-h-[100vh] p-5">
                        {children}
                    </div>
                </div>
            </main>
        </section>
    );
}
