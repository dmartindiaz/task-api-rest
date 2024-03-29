import { Task } from "../models/task"
import { Validate } from "../utils/validate"
class TaskController {
    static async setTask(req: any, res: any) {
        const { title, description, createdBy, taskType, taskTypePlace } = req.body
        Validate.request(req, { title, description, createdBy, taskType, taskTypePlace }, async () => {

        })
    }
}

export {
    TaskController
}