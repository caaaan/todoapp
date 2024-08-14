import React, {FC, ReactElement} from "react";
import { Box } from "@mui/material";
import { TaskHeader } from "../taskArea/_taskHeader";
import { TaskDescription } from "../taskArea/_taskDescription";
import { TaskFooter } from "../taskArea/_taskFooter";
import { DateTime } from "luxon";
import { ITask } from "../../interfaces/ITask";
import { Status } from "../createTaskForm/enums/Status";
import { Priority } from "../createTaskForm/enums/Priority";
import { renderPriorityColor } from "../../helpers/renderPriorityColor";

export const Task: FC<ITask> = (props): ReactElement => {
    const {title = "Test Title", date = DateTime.now(), description = "Task description" , 
        priority = Priority.normal, status = Status.todo,
        onStatusChange = (e) => console.log(e), onClick = (e) => console.log(e)} = props;
    return (
    <Box display={"flex"} flexDirection={"column"} width= "100%" 
    justifyContent={"flex-start"} mb={4} p={2} sx={{
        width:"100%",
        backgroundColor: "Background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityColor(priority),
    }}>
        <TaskHeader title={title} date={date}/>
        <TaskDescription description={description}/>
        <TaskFooter onStatusChange={onStatusChange} onClick={onClick}/>
    </Box>
    );
}