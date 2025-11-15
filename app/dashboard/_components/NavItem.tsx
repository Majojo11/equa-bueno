"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps{
    icon: ReactNode
    path: string
}

export const NavItem = ({icon, path}: NavItemProps) => {
    const pathName = usePathname();
    return (
        <Link href={path} className="w-full flex justify-center">
            <span className={
                pathName === path 
                    ? "bg-[#9C9C9C] w-[110px] h-[69px] flex justify-center items-center rounded-md transition-colors"
                    : "bg-[#D9D9D9] w-[110px] h-[69px] flex justify-center items-center rounded-md transition-colors"
                }
            >
                {icon}
            </span>
        </Link>
    )
}

export default NavItem;