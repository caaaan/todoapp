import React from "react";
import { IDisabled } from "./IDisabled";

export interface ITextfield extends IDisabled{
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}