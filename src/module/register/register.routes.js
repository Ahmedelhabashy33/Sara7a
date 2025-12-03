import { handleRegister, register } from "./register.controller.js";

import { Router } from "express";

let registerRouter = Router();

registerRouter.get("/register", register);
registerRouter.post("/handleRegister", handleRegister);
export default registerRouter;
