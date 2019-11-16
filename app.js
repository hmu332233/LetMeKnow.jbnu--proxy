const express = require('express');
const app = express();

const createError = require('http-errors');

if (process.env.NODE_ENV === 'development') {
  const logger = require('morgan');
  app.use(logger('dev'));
  app.use(function(req, res, next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    next();
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  let apiError = err;

  if (!err.status) {
    apiError = createError(err);
  }

  // set locals, only providing error in development
  res.locals.message = apiError.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {};

  return res.status(apiError.status).json({ message: apiError.message });
});

module.exports = app;
