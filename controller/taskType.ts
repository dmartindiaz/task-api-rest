import { Responses } from "../utils/senders"
import { TaskType } from "../models/taskType"
import { Validate } from "../utils/validate"
class TaskTypeController {
    static async setTaskType(req: any, res: any) {
        const { title, createdBy, steps, description } = req.body
        Validate.request(res, { title, createdBy, steps, description }, async () => {
            await TaskType.create({ title, createdBy, steps, description })
            Responses.send(res, "New task type created", null, false)
        })
    }

    static async getTaskType(req: any, res: any) {
        const { id } = req.query
        Validate.request(req, { id }, async () => {
            const findTaskType = await TaskType.findById(id).exec()
            Responses.send(res, "Task searched", findTaskType, false)
        })
    }

    static async updateTaskType(req: any, res: any) {
        const { id, title, createdBy, steps, description } = req.body
        Validate.request(req, { id, title, createdBy, steps, description }, async () => {
            await TaskType.findByIdAndUpdate(id, { title, createdBy, steps, description })
            Responses.send(res, "Task updated", null, false)
        })
    }

    static async deleteTaskType(req: any, res: any) {
        const { id } = req.body
        Validate.request(req, {id}, async () => {
            await TaskType.findByIdAndDelete(id)
            Responses.send(res, "Task deleted", null, false)
        })
    }
}

export {
    TaskTypeController
}