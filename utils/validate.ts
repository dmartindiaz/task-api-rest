class Validate {
    static request(object: object, fn: Function): Boolean {
        let validate = true
        const objectToKeys = Object.values(object)
        objectToKeys.forEach((value) => {
            if(!value){
                validate = false
            }
        })
        if(validate){
            fn()
        }
        return validate
    }
}

export {
    Validate
}