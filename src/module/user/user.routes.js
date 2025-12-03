import { Router } from "express";
import { logOut, sendMsg, user } from "./user.controller.js";

const userRouter = Router();

userRouter.get("/user/:id", user);
userRouter.post("/sendMsg/:id", sendMsg);
userRouter.get("/logOut", logOut);


userRouter.get("/user", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect(`/user/${req.session.userId}`);
  } else {
    res.redirect("/login");
  }
});

export default userRouter;
