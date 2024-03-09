import express from "express";
import validate from "../utils/validate.js";
const router = express.Router();

router.route("/login").post((req, res) => {
  const { fullname, email, contact, password } = req.body;
  console.log(req.body);
  console.log("Validating...........");
  const error = validate(fullname, email, contact, password);
  if (error) {
    res.json(error);
  }
  res.json(req.body);
});
export default router;
