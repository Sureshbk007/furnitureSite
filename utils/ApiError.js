class ApiError extends Error{
    constructor(errorCode, message, errors = [], stack = ""){
        super(message);
        this.errorCode = errorCode;
        this.message = message
        this.errors = errors;
        this.success = false;

        if(stack)
            this.stack = stack;
        else
            Error.captureStackTrace(this, this.constructor)
    }
}
export {ApiError};