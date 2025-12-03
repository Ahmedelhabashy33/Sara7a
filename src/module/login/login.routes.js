import { handleLogin, login} from "./login.controller.js";

import { Router } from "express";

let loginRouter = Router();

loginRouter.get("/login", login);
loginRouter.post("/handlelogin", handleLogin);

export default loginRouter;
