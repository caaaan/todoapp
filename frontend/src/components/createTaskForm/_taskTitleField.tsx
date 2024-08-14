import  { FC, ReactElement} from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from '../../interfaces/ITextfield';

export const TaskTitleField: FC<ITextfield> = (props,): ReactElement =>{
    const {onChange = (e)=>{console.log(e)}, disabled=false} = props;
    return (
        <TextField id="title" label="Task Title" placeholder="Task Title" 
        variant="outlined" size="small" name="title" 
        fullWidth disabled={disabled} onChange={onChange}/>
    );
}