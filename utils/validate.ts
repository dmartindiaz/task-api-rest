import {Responses} from "../utils/senders"
class Validate {
    static request(res: any, object: object, fn: Function): Boolean {
        let validate = true
        const objectToKeys = Object.values(object)
        objectToKeys.forEach((value) => {
            if(!value){
                validate = false
            }
        })
        if(validate){
            fn()
        }else{
            Responses.send(res, "Fields are missing", null, true)
        }
        return validate
    }
}

export {
    Validate
}