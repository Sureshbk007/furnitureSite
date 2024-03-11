const globalError = (err, req, res, next) => {
  err.code = err.code || 500;
  err.status = err.status || "error";
  err.message = err.message || "Internal Server Error ";

  res.status(err.code).json({
    code: err.code,
    status: err.status,
    message: err.message,
  });
};

export default globalError;
