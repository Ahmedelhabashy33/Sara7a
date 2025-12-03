import express, { urlencoded } from "express";
import mongoose, { model, Schema } from "mongoose";
import { dbConnection } from "./database/dbConnection.js";
import homeRouter from "./src/module/home/home.routes.js";
import registerRouter from "./src/module/register/register.routes.js";
import loginRouter from "./src/module/login/login.routes.js";
import messageRouter from "./src/module/message/message.routes.js";
import userRouter from "./src/module/user/user.routes.js";
import session from "express-session";
import MongoDBSession from "connect-mongodb-session";
let MongoDBStore = MongoDBSession(session);

const app = express();
const port =process.env.port|| 3000;

var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/Sara7a",
  collection: "mySessions",
});
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
      saveUninitialized: true,
    store
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(messageRouter);
app.use(userRouter);
app.use(express.json());


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
