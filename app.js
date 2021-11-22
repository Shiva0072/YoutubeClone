import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localMiddleware } from "./middlewares.js";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "/mnt/e/WebD/YoutubeClone/routers/userRouter.js";
import videoRouter from "/mnt/e/WebD/YoutubeClone/routers/videoRouter.js";

const app = express();

app.set("view engine", "pug");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// console.log("from app : ");
// console.dir(routes);

export default app;
