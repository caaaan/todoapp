import { Router } from "express";
import { taskController } from "../controllers/taskController";
import { createValidator, updateValidator } from "../validators/taskValidator";

export const taskRouter: Router = Router();

taskRouter.get('/tasks', taskController.getAll);

taskRouter.post('/tasks', createValidator, taskController.create);

taskRouter.put('/tasks', updateValidator, taskController.update);