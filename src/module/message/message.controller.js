import QRCode from "qrcode";
import { message } from "../../../database/models/message.model.js";

export const messages = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}/user/${req.session.userId}`;

  let qrCodeUrl = "";

  try {
    qrCodeUrl = await QRCode.toDataURL(url);
    console.log("QR generated successfully");
  } catch (err) {
    console.error("QR Error:", err);
    qrCodeUrl = "";
  }

  let messages = await message.find({ user: req.session.userId });

  if (req.session.isLoggedIn) {
    res.render("message.ejs", {
      session: req.session,
      url,
      qrCodeUrl,
      messages,
    });
  } else {
    res.redirect("/login");
  }
};
