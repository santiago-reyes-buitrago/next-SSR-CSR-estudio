import {JSX} from "react";
import Link from "next/link";

interface Props {
    name: string
    url: string
    isActive: boolean
    description?: string
    icon?: JSX.Element
}


const verifiedIcon = (icon: JSX.Element) => {
    if (!icon) return null;
    return icon;
}


export const MenuItemSidebar = ({url, name, icon, description,isActive=false}: Props) => {
    return (
        <Link className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive ? 'bg-blue-800':''}   hover:bg-white/5 transition ease-linear duration-150`} href={url}>
            <div>
                {verifiedIcon(icon!)}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{name}</span>
                <span className="text-sm text-white/50 hidden md:block">{description ?? ''}</span>
            </div>
        </Link>
        // <a href={url}
        //
        // >
        //
        // </a>
    );
};
