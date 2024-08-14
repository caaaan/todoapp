import {FC, ReactElement} from "react";
import { Box, Typography } from "@mui/material";
import {ITaskDescription} from  "../../interfaces/ITaskDescription";


export const TaskDescription: FC<ITaskDescription> = (props): ReactElement =>{
    const {description="generic description..."} = props;
    return (
    <Box>
        <Typography>{description} </Typography>
    </Box>
    );
}