import { ITaskApi } from "../interfaces/ITaskApi"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const countTasks = (tasks: ITaskApi[],status: TaskCounterStatusType): number =>{

    if(!Array.isArray(tasks)){
        return -1;
    }

    const totalTasks = tasks.filter((task)=>{
        return task.status === status;
    });

    return totalTasks.length;
}