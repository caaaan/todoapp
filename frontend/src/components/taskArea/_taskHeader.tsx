import {FC, ReactElement} from "react";
import { Box, Chip, Typography } from "@mui/material";
import { ITaskHeader } from "../../interfaces/ITaskHeader";
import {DateTime} from 'luxon';

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement =>{
    const {title="title", date= DateTime.now()} = props;
    return (
    <Box display="flex" justifyContent={"space-between"} width={"100%"} mb={3}>
        <Box>
            <Typography variant="h6">{title}</Typography>
        </Box>
        <Box>
            <Chip variant="outlined" label={date.toLocaleString(DateTime.DATE_FULL)}/>
        </Box>
    </Box>
    );
}