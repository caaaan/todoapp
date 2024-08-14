import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {DataSource} from "typeorm";
import cors from "cors";
import bodyParser from "body-parser";
import { Task } from "./tasks/taskEntity";



// Instantiate express app
const app: Express = express();
dotenv.config();

app.use(bodyParser.json());

app.use(cors());

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    //username: process.env.MYSQL_USER,
   // password: process.env.MYSQL_PASSWORD,
   // database: process.env.MYSQL_DB,
    entities: [Task],
    synchronize: true,

});

// Define sever port
const port = process.env.PORT;
console.log(process.env.PORT);
// Create a default route.
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

AppDataSource.initialize().then(()=>{
    // Start listenting to the requests on the defined port
    app.listen(port);
    console.log("datasource has been initialized");
}).catch((err)=>{
    console.log("error during datasource initialization: " , err);
});

