import Link from "next/link";
import {MenuItemInterface} from "@/app/shared/core/interfaces/menuItem.interface";

interface Props extends MenuItemInterface {
    isActive: boolean;
}

export const MenuItemSidebar = ({url, name, icon, description,isActive=false}: Props) => {
    return (
        <Link className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive ? 'bg-blue-800':''}   hover:bg-white/5 transition ease-linear duration-150`} href={url}>
            {icon && <div>{icon}</div>}
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
