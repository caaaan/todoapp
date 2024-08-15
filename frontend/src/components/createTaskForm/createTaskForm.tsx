import React, {FC, ReactElement, useState, useEffect} from 'react';
import {Box,Typography, Stack, Button, Alert, AlertTitle, LinearProgress} from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { DateTime } from 'luxon';
import { useMutation } from 'react-query';
import { ICreateTask } from '../../interfaces/ICreateTasks';
import { sendApiRequest } from '../../helpers/sendApiRequest';

export const CreateTaskForm: FC = (): ReactElement =>{

    const [title, setTitle] = useState<string|undefined>(undefined);
    const [description, setDescription] = useState<string|undefined>(undefined);
    const [date, setDate] = useState<DateTime|null>(DateTime.now());
    const [status, setStatus] = useState<string>(Status.todo);
    const [priority, setPriority] = useState<string>(Priority.normal);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const createTaskMutation = useMutation((data: ICreateTask) =>
        {
            //await koymak gerekebilir tutorial kodu return'suz çalışıyor bir şekilde
        return sendApiRequest("http://localhost:3200/tasks",'POST',data);
    },);

    function createTaskHandler(){
        if(!title || !date || !description){
            return;
        }
        const task: ICreateTask ={
            title,
            description,
            date: date.toString(),
            status,
            priority
        };

        createTaskMutation.mutate(task);
    }

    useEffect(()=>{
        if(createTaskMutation.isSuccess){
            setShowSuccess(true);
        }
        const successTimeout = setTimeout(()=>{setShowSuccess(false)},5000);

        return ()=>{
            clearTimeout(successTimeout);
        };
    },[createTaskMutation.isSuccess]);

    return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} width= "100%" px={4} my={6}>
        {showSuccess && <Alert severity='success' sx={{width:"100%", marginBottom:"16px"}}>
            <AlertTitle>Success</AlertTitle>
            The task has been created successfully
        </Alert>}
        <Typography mb={"2"} component={"h2"} variant='h6'>Create a task</Typography>
        <Stack sx={{width:"100%"}} spacing={2}>
            <TaskTitleField onChange={(e)=>{setTitle(e.target.value)}} disabled={createTaskMutation.isLoading}/>
            <TaskDescriptionField onChange={(e)=>{setDescription(e.target.value)}} disabled={createTaskMutation.isLoading}/>
            <TaskDateField value={date} onChange={(date)=>{setDate(date)}} disabled={createTaskMutation.isLoading}/>
            <Stack direction='row' sx={{width:"100%"}} spacing={2}>
                <TaskSelectField label="Status" name="Status" value={status} onChange={(e)=>{setStatus(e.target.value as string)}} items={[
                    {
                        value: Status.todo,
                        label: Status.todo.toUpperCase(),
                    },
                    {
                        value: Status.inProgress,
                        label: Status.inProgress.toUpperCase()
                    }]} disabled={createTaskMutation.isLoading}/>
                <TaskSelectField label="Priority" name="Priority" value={priority} onChange={(e)=>{setPriority(e.target.value as string)}} items={[
                    {
                        value: Priority.high,
                        label: Priority.high,
                    },
                    {
                        value: Priority.normal,
                        label: Priority.normal,
                    },
                    {
                        value: Priority.low,
                        label: Priority.low,
                    }]} disabled={createTaskMutation.isLoading}/>
            </Stack>
            {createTaskMutation.isLoading && <LinearProgress/>}
            <Button variant="contained" size="large" disabled={!title || !description || !date || !priority || !status} fullWidth onClick={createTaskHandler}>Create A Task</Button>
        </Stack>

    </Box>
    )
   };