import Sidebar from "@/components/Sidebar/Sidebar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-center mt-10">
            <Link href="/dashboard">
                <Button>Control panel</Button>
            </Link>
        </main>
    );
}
