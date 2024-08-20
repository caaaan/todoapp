import { DateTime } from 'luxon';

export interface ITaskHeader{
    title?:string;
    date?: DateTime;
}