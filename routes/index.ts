import { UserController } from "../controller/user"
import { TaskTypeController } from "../controller/taskType"
import { TaskController } from "../controller/task"
import type { Express } from "express"
const routes = (app: Express) => {
    //Test server
    app.get("/", (req, res) => { res.send({ msg: "Server working" }) })
    //User routes
    app.get("/user", async (req, res) => { await UserController.getUser(req, res) })
    app.post("/user", async (req, res) => { await UserController.setUser(req, res) })
    app.put("/user", async (req, res) => { await UserController.updateUser(req, res) })
    app.delete("/user", async (req, res) => { await UserController.deleteUser(req, res) })
    //Task type routes
    app.get("/tasktype", async (req, res) => {await TaskTypeController.getTaskType(req,res)})
    app.post("/tasktype", async (req, res) => {await TaskTypeController.setTaskType(req,res)})
    app.put("/tasktype", async (req, res) => {await TaskTypeController.updateTaskType(req,res)})
    app.delete("/tasktype", async (req, res) => {await TaskTypeController.deleteTaskType(req,res)})

    app.post("/task", async (req, res) => {await TaskController.setTask(req,res)})
}

export {
    routes
}