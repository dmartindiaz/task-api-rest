class ErrorHandler {
    static error(fn: Function){
        try {
            fn()
        } catch (error) {
            console.log("An error happen")
        }
    }
}

export {
    ErrorHandler
}