//const app = express()
import { Responses } from "../utils/senders"
import { User } from "../models/user"
import { Validate } from "../utils/validate"
class UserController {
    static async setUser(req: any, res: any) {
        const { name, lastname, password, email } = req.body
        Validate.request(res, { name, lastname, password, email }, async () => {
            if (!await User.findOne({ email }).exec()) {
                await User.create({ name, lastname, password, email })
                Responses.send(res, "User created", null, false)
            } else {
                Responses.send(res, "User email is already created", null, true)
            }
        })
    }

    static async getUser(req: any, res: any) {
        const { email } = req.query
        Validate.request(res, { email }, async () => {
            const findUser = await User.findOne({ email }).exec()
            if (findUser) {
                Responses.send(res, "User searched", findUser, false)
            } else {
                Responses.send(res, "User not found", null, true)
            }
        })
    }

    static async deleteUser(req: any, res: any) {
        const { email } = req.body
        Validate.request(res, { email }, async () => {
            await User.deleteOne({ email })
                .then(() => {
                    Responses.send(res, "User deleted", null, false)
                })
                .catch(() => {
                    Responses.send(res, "User not deleted", null, true)
                })
        })
    }

    static async updateUser(req: any, res: any) {
        const { id, name, lastname, email } = req.body
        Validate.request(res, { id, name, lastname, email }, async () => {
            const findUser = await User.findOneAndUpdate({ id }, { name, lastname, email }).exec()
            if (findUser) {
                Responses.send(res, "User updated", null, false)
            } else {
                Responses.send(res, "User not updated", findUser, true)
            }
        })
    }
}

export {
    UserController
}