import { Priority } from "../components/createTaskForm/enums/Priority";
import { Status } from "../components/createTaskForm/enums/Status";


export interface ITaskApi {
    id: string;
    date:string;
    description: string;
    title: string;
    priority: `${Priority}`;
    status: `${Status}`;
}