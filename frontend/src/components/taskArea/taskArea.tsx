import React, {FC, ReactElement, useContext, useEffect} from 'react';
import { Grid, Box, Alert, LinearProgress} from '@mui/material';
import { DateTime } from 'luxon';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { useQuery, useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from '../../interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/Status';
import { IUpdateTask } from '../../interfaces/IUpdateTask';
import { countTasks } from '../../helpers/countTasts';
import { TaskStatusChangedContext } from '../../context';

export const TaskArea: FC = (): ReactElement =>{

       const tasksUpdatedContext = useContext(TaskStatusChangedContext);


       const{error, isLoading, data, refetch} = useQuery<ITaskApi[], Error>('tasks',async ()=>{
              return await sendApiRequest<ITaskApi[]>("http://localhost:3200/tasks",'GET')});

       const updateTaskMutation = useMutation((data: IUpdateTask)=>{
              return sendApiRequest("http://localhost:3200/tasks",'PUT',data);
       });

       useEffect(()=>{
              refetch();
       },[tasksUpdatedContext.updated]);

       useEffect(()=>{
              if(updateTaskMutation.isSuccess){
                     tasksUpdatedContext.toggle();
              }
       },[updateTaskMutation.isSuccess]);

       function onStatusChangeHandler(e: React.ChangeEvent<HTMLInputElement>, id: string){
              updateTaskMutation.mutate({
                     id,
                     status: e.target.checked? Status.inProgress: Status.todo,
              });

       }

       function markCompleteHandler(e:  React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, id: string){
              updateTaskMutation.mutate({
                     id,
                     status: Status.completed,
              });
       }
 return (
        <Grid item md={8} px={4}>
              <Box mb={8} px={4}>
                     <h2>Status Of Your Tasks As On {DateTime.now().toLocaleString(DateTime.DATE_FULL)}</h2>  
              </Box>
              <Grid container display="flex" justifyContent={"center"}>
                     <Grid item display="flex" justifyContent={"space-around"}
                            alignItems={"center"} md={10} xs={12} mb={8}>
                            <TaskCounter count={data ? countTasks(data,Status.todo): undefined} status={Status.todo}/>
                            <TaskCounter count={data ? countTasks(data,Status.inProgress): undefined} status={Status.inProgress}/>
                            <TaskCounter count={data ? countTasks(data,Status.completed): undefined} status={Status.completed}/>
                     </Grid>
                     <Grid item display={"flex"} flexDirection={"column"} xs={10} md={8}>
                            {error && (<Alert severity='error'> There was an error fetching your tasks</Alert>)}
                            {!error && Array.isArray(data) && data.length === 0 && (<Alert severity='error'> You have no current tasks</Alert>)}
                            {isLoading ? (<LinearProgress/>): (
                                   Array.isArray(data) && data.length > 0 && data.sort((a, b) => a.priority.localeCompare(b.priority)).map((task,index)=>{
                                         
                                          return task.status === Status.todo || task.status === Status.inProgress ? 
                                          (<Task  key = {index + task.priority} id={task.id} title={task.title} date={DateTime.fromISO(task.date)}
                                          description={task.description} priority={task.priority} onClick={markCompleteHandler}
                                           status={task.status} onStatusChange={onStatusChangeHandler}/>): (false);
                                   }))}
                            
                     </Grid>
              </Grid>
        </Grid>
 )
};