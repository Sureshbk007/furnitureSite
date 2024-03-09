import validate from "../utils/validate.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signup = (req, res) => {
    const { fullname, email, contact, password } = req.body;
    const errors = validate(fullname, email, contact, password);
    if (errors) {
      res.json(new ApiError(400, "Validation Error", errors))
    }
    res.json(new ApiResponse(200, req.body, "Sign up successfully"))
  }

  export { signup }