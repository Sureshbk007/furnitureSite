class ApiError extends Error {
  constructor(code, status = "", message, stack = "") {
    super(message);
    this.code = code;
    this.status = status;
    this.message = message;

    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}
export default ApiError;
