import { Db } from "./utils/connect"
import { routes } from "./routes/index"
import bodyParser from "body-parser"

const app = Db.startServer();
app.use(bodyParser.urlencoded({ extended: true }));

(async () => { await Db.mongo() })();
(() => { routes(app) })();



