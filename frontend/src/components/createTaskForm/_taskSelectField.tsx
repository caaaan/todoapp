import React, {FC, ReactElement} from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import { ISelectField } from "../../interfaces/ISelectField";

export const TaskSelectField:FC <ISelectField> = (props,): ReactElement =>{
    const{value="",label="Select Box", name="SelectBox", items=[{value:"",label:"Add items "}], disabled = false, onChange = (e:SelectChangeEvent) => console.log(e)} = props;
    return (
        <FormControl  size= "small" fullWidth>
            <InputLabel id={`${name}-id`} >{label}</InputLabel>
            <Select
            labelId={`${name}-id`}
            id="status-select"
            value={value}
            label={label}
            name={name}
            disabled ={disabled}
            onChange= {onChange}>
                {items.map((item,index)=>(
                    <MenuItem key= {item.value + index} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}