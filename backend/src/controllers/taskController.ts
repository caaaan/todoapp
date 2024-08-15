import { AppDataSource } from "..";
import { Task } from "../entities/taskEntity";
import {instanceToPlain, plainToInstance} from "class-transformer";
import {Request, Response } from "express";
import { validationResult } from "express-validator";
import { UpdateResult } from "typeorm";
export class TaskController {

    public async getAll(req: Request, res:Response): Promise<Response>{
        let allTasks: Task[]=[];
        try{
            allTasks = await AppDataSource.getRepository(Task).find({
                order:{
                    date: "ASC",
                }
            });
            allTasks = instanceToPlain(allTasks) as Task[];
            return res.json(allTasks).status(200);
        } catch (_errors) {
            return res.json({error: "internal Server Error"}).status(500);
        }
    } 

    public async create(req:Request,res: Response): Promise<Response>{
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.json({errors: errors.array}).status(400);
        }
        const task = new Task();

        task.title = req.body.title;
        task.date = req.body.date;
        task.description = req.body.description;
        task.priority = req.body.priority;
        task.status = req.body.status;

        let createdTask: Task;

        try{
            createdTask = await AppDataSource.getRepository(Task).save(task);
            createdTask = instanceToPlain(createdTask) as Task;
            return res.json(createdTask).status(201);
        }catch (error){
            return res.json({error: "internal Server Error"}).status(500);
        }
        
    }
    public async update(
        req: Request,
        res: Response,
      ): Promise<Response> {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
          return res
            .status(400)
            .json({ errors: errors.array() });
        }
    
        // Try to find if the tasks exists
        let task: Task | null;
    
        try {
          task = await AppDataSource.getRepository(
            Task,
          ).findOne({
            where: { id: req.body.id },
          });
        } catch (errors) {
          return res
            .json({ error: 'Internal Server Error' })
            .status(500);
        }
    
        // Return 400 if task is null
        if (!task) {
          return res.status(404).json({
            error: 'The task with given ID does not exist',
          });
        }
    
        // Declare a variable for updatedTask
        let updatedTask: UpdateResult;
    
        // Update the task
        try {
          updatedTask = await AppDataSource.getRepository(
            Task,
          ).update(
            req.body.id,
            plainToInstance(Task, {
              status: req.body.status,
            }),
          );
    
          // Convert the updatedTask instance to an object
          updatedTask = instanceToPlain(
            updatedTask,
          ) as UpdateResult;
    
          return res.json(updatedTask).status(200);
        } catch (errors) {
          return res
            .json({ error: 'Internal Server Error' })
            .status(500);
        }
      }
}

export const taskController = new TaskController();

