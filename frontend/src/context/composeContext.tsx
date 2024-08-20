import React, {FC, ReactElement} from "react";
import { IComposeContext } from "../interfaces/IComposeContext";



export default function ComposeContext(props: IComposeContext){
    const {components = [],children} = props;

    return  <>
    {components.reduceRight((acc,Comp: any)=>{
        return <Comp>{acc}</Comp>
    },children)}
    </>;
}