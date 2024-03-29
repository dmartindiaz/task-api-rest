class Responses {
    static send(res: any, msg: string, object?: any, err?: boolean, errmsg?: string){
        res.send({msg, object, err, errmsg})
        return {msg, object, err, errmsg}
    }
}

export {
    Responses
}