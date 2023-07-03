const express = require('express');
const morgan = require('morgan');

// const tourRouters = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

////1) middle ware
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware 👋');

  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

////// Mounting routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/////Servers
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
