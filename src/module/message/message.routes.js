
import { Router } from "express";
import {  messages } from "./message.controller.js";

let messageRouter = Router();

messageRouter.get("/message", messages);

export default messageRouter;
