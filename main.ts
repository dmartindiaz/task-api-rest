import { Db } from "./utils/connect"
import { ErrorHandler } from "./utils/error"
import { UserController } from "./controller/user"
import bodyParser from "body-parser"
const startMongo = async () => {await Db.mongo()}
startMongo()
const app = Db.startServer()
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/user", (req,res) => {UserController.getUser(req,res)})
app.post("/user", (req,res) => {UserController.setUser(req,res)})
app.put("/user", (req,res) => {UserController.updateUser(req,res)})
app.delete("/user", (req,res) => {UserController.deleteUser(req,res)})
app.post("/", (req,res) => {res.send({msg: "Server working"})})