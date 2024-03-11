const asynHandler = (asyncFn) => (req, res, next) => {
  asyncFn(req, res).catch((err) => next(err));
};

export default asynHandler;
