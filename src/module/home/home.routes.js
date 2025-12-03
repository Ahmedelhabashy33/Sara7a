import { home } from "./home.controller.js";

import { Router } from "express";

let homeRouter = Router();

homeRouter.get("/", home);

export default homeRouter;
