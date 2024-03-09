import validate from "../utils/validate.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const signup = async (req, res) => {
try {
      const { fullName, email, contact, password } = req.body;
      const errors = validate(fullName, email, contact, password);
      if (errors) {
        throw new ApiError(400, "Validation Error", errors);
      }
      const user = await User.create(req.body);
      res.json(new ApiResponse(200, user))

} catch (error) {
  // throw new ApiError(500, error.message)
  console.log(error)
  res.json({"hi":"hi"})
}
  }

  export { signup }