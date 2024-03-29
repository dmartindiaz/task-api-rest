import mongoose from "mongoose"
import express from "express"
const URL = "mongodb://localhost:27017/"
const PORT = "3000"
class Db {
    static async mongo(): Promise<Boolean> {
        let connected = false
       await mongoose.connect(URL)
            .then(() => {
                connected = true
            })
        return connected
    }

    static startServer(){
        const app = express()
        app.listen(PORT, () => {
            console.log("Servidor encendido en el puerto " + PORT)
        })
        return app
    }
}

export {
    Db
}