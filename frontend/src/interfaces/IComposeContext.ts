import { FC, ReactNode } from "react";

export interface IComposeContext{
    components?: FC<{children?:ReactNode}>[];
    children?:ReactNode | undefined;
}