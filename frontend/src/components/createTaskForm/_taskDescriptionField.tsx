import React, {FC, ReactElement} from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from '../../interfaces/ITextfield';

export const TaskDescriptionField: FC<ITextfield> = (props,): ReactElement =>{
    const {onChange = (e)=>{console.log(e)}, disabled=false} = props;
    return (
        <TextField id="description" label="Description" placeholder="Description" 
        variant="outlined" size="small" multiline rows={4} 
        fullWidth disabled={disabled} onChange={onChange}/>
    );
}