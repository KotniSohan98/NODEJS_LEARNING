const logger = (req, res, next) => {
  console.log(`Logger1: ${req.method}: Request receive on ${req.url}`);
  next();
};

const logger2 = (req, res, next) => {
  console.log(`Logger2: ${req.method}: Request receive on ${req.url}`);
  next();
};

module.exports = { logger, logger2 };
