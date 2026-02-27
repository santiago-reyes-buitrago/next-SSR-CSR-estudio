import {JSX} from "react";

export interface MenuItemInterface {
    name: string
    url: string
    description?: string
    icon?: JSX.Element
}