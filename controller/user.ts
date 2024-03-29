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
                Responses.send(res, "User created")
            }else{
                Responses.send(res, "User email is already created", null, true)
            }
        }
    }

    static async getUser(req: any, res: any){
        const {email, password} = req.query
        if(email == undefined || password == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            const findUser = await User.findOne({email, password}).exec()
            if(findUser){
                Responses.send(res, "User searched", findUser, true)
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
                    Responses.send(res, "User deleted")
                })
                .catch(() => {
                    Responses.send(res, "Fields are missing", null, true)
                })
        }
    }

    static async updateUser(req:any, res: any){
        const {id, name, lastname, email, password} = req.body
        if(name == undefined || lastname == undefined || email == undefined || password == undefined){
            Responses.send(res, "Fields are missing", null, true)
        }else{
            const findUser = await User.findOneAndUpdate({id}, {name, lastname, email, password}).exec()
            if(findUser){
                Responses.send(res, "User updated", findUser, false)
            }else{
                Responses.send(res, "User not updated", findUser, true)
            }
        }
    }
}

export {
    UserController
}