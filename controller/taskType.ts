import { Responses } from "../utils/senders"
import { TaskType } from "../models/taskType"
class TaskTypeController {
    static async setTaskType(req: any, res: any) {
        const { title, createdBy, steps, description } = req.body
        if (title == undefined || createdBy == undefined) {
            Responses.send(res, "Fields are missing", null, true)
        } else {
            await TaskType.create({ title, createdBy, steps, description })
            Responses.send(res, "New task type created", null, false)
        }
    }

    static async getTaskType(req: any, res: any) {
        const { id } = req.query
        if (id) {
            const findTaskType = await TaskType.findById(id).exec()
            Responses.send(res, "Task searched", findTaskType, false)
        } else {
            Responses.send(res, "Fields are missing", null, true)
        }
    }

    static async updateTaskType(req: any, res: any) {
        const { id, title, createdBy, steps, description } = req.body
        if (id == "undefined" || title == undefined || createdBy == undefined || description == undefined) {
            Responses.send(res, "Fields are missing", null, true)
        } else {
            await TaskType.findByIdAndUpdate(id, { title, createdBy, steps, description })
            Responses.send(res, "Task updated", null, false)
        }
    }

    static async deleteTaskType(req: any, res: any) {
        const { id } = req.body
        
        if (!id) {
            Responses.send(res, "Fields are missing", null, true)
        } else {
            await TaskType.findByIdAndDelete(id)
            Responses.send(res, "Task deleted", null, false)
        }
    }
}

export {
    TaskTypeController
}