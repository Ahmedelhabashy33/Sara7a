
import { message } from './../../../database/models/message.model.js';



export const user =  (req, res) => {

  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }

  if (req.params.id == req.session.userId) {
    return res.render("user.ejs", {
      session: req.session,
      userId:req.params.id
    });
  }

  res.redirect(`/user/${req.session.userId}`);
};

export const sendMsg = async (req, res) => {
    req.body.user = req.params.id;
  await message.insertMany(req.body);
  res.redirect("/user/" + req.params.id);
}

export const logOut = async (req, res) => {

  req.session.destroy(function (err) {
          res.redirect("/login");

  });
  

};