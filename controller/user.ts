//const app = express()
import { Responses } from "../utils/senders"
import { User } from "../models/user"
class UserController {
    static async setUser(req: any, res: any) {
        const { name, lastname, password, email } = req.body
        if(name == undefined || lastname == undefined || password == undefined || email == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            if(!await User.findOne({email}).exec()){
                await User.create({name, lastname, password, email})
                Responses.send(res, "User created", null, false)
            }else{
                Responses.send(res, "User email is already created", null, true)
            }
        }
    }

    static async getUser(req: any, res: any){
        const {email} = req.query
        if(email == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            const findUser = await User.findOne({email}).exec()
            if(findUser){
                Responses.send(res, "User searched", findUser, false)
            }else{
                Responses.send(res, "Fields are missing", null, true)
            }
        }
    }

    static async deleteUser(req: any, res: any){
        const {email} = req.body
        if(email == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            await User.deleteOne({email})
                .then(() => {
                    Responses.send(res, "User deleted", null, true)
                })
                .catch(() => {
                    Responses.send(res, "Fields are missing", null, true)
                })
        }
    }

    static async updateUser(req:any, res: any){
        const {id, name, lastname, email} = req.body
        if(name == undefined || lastname == undefined || email == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            const findUser = await User.findOneAndUpdate({id}, {name, lastname, email}).exec()
            if(findUser){
                Responses.send(res, "User updated", null, false)
            }else{
                Responses.send(res, "User not updated", findUser, true)
            }
        }
    }
}

export {
    UserController
}