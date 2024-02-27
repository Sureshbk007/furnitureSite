import express from "express";
import validate from "../utils/validate.js";
const router = express.Router();

router.route("/signup").post((req, res) => {
  const { fullname, email, password } = req.body;
  const error = validate(fullname, email, password);
  if (error) {
    res.json(error);
  }
  console.log(req.body);
  res.json(req.body);
});
export default router;
