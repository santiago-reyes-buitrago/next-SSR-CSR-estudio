import {IconType} from "react-icons";
import {JSX, SVGProps} from "react";

interface Props {
    name: string
    url: string
    description?: string
    icon?: JSX.Element
}


const verifiedIcon = (icon: JSX.Element) => {
    if (!icon) return null;
    return icon;
}


export const MenuItemSidebar = ({url, name, icon, description}: Props) => {
    return (
        <a href={url}
           className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150"
        >
            <div>
                {verifiedIcon(icon!)}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{name}</span>
                <span className="text-sm text-white/50 hidden md:block">{description ?? ''}</span>
            </div>
        </a>
    );
};
