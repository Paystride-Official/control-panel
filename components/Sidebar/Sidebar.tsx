"use client";
import Image from "next/image";
import Dashboard from "@/components/Sidebar/assets/Dashboard.svg";
import Transaction from "@/components/Sidebar/assets/Transaction.svg";
import Merchant from "@/components/Sidebar/assets/Merchant.svg";
import Paystride from "@/app/assets/Paystride.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";

type Props = {
    display?: string;
    displaymd?: string;
};
export type SidebarProps = {
    title: string;
    href: string;
    icon: string;
};

const Sidebar = ({ display, displaymd }: Props) => {
    const sideBarItems: SidebarProps[] = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: Dashboard,
        },
        {
            title: "Transactions",
            href: "/transactions",
            icon: Transaction,
        },
        {
            title: "Merchant",
            href: "/merchant",
            icon: Merchant,
        },
    ];
    return (
        <div
            className={` min-h-screen sticky bg-[#ECECEC] ${display} md:${displaymd} `}
        >
            <div className="h-screen sticky top-0 left-0 w-52 sm:w-64 ">
                <div className="hidden md:flex pl-12 h-[3.5rem]  items-center  bg-white">
                    <Image
                        src={Paystride}
                        alt="Paystride"
                        className="h-[2.5rem]"
                    />
                    <h1 className="ml-3 text-lg font-bold text-[#6A8F9F] flex items-center justify-center">
                        Paystride
                    </h1>
                </div>

                <div className="flex item-center justify-center overflow-hidden bg-[#ECECEC]">
                    <div className="flex flex-col mt-4">
                        {sideBarItems.map((item, index) => {
                            return <SidebarItem key={index} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ item }: { item: SidebarProps }) => {
    const pathName = usePathname();
    const isActive = pathName === item.href;
    return (
        <button
            className={classNames(
                "flex",
                "items-center",
                "cursor-pointer",
                "my-3",
                "rounded-[10px]",
                {
                    "bg-[#091f8e] text-white": isActive,
                    "bg-white text-[#8A92A6] hover:bg-slate-100": !isActive,
                }
            )}
        >
            <Link
                href={item.href}
                className="flex gap-2 py-2 sm:py-3 px-8 sm:px-10 w-full"
            >
                <Image
                    src={item.icon}
                    alt={item.title}
                    className={classNames({ "text-white": isActive })}
                />
                <span className="flex-1 text-sm sm:text-base font-medium">
                    {item.title}
                </span>
            </Link>
        </button>
    );
};
export default Sidebar;
