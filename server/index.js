const express = require('express');
const app = express();
const dbConnection = require('./config/dbConnection');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const foodRouter = require('./routes/foodRoute');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');
const adminRouter = require('./routes/adminRoute');

require('dotenv').config();

// Connecting to the Database
dbConnection();

const allowedOrigins = [process.env.ALLOWED_ORIGIN_1,process.env.ALLOWED_ORIGIN_2]; // Adjust this based on your frontend app's URL

app.use((req, res, next) => {
  if (!req.headers.origin) {
    // Allow requests without Origin header to proceed
    return next();
  }

  // Apply CORS for requests with Origin header
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        callback(new Error('No origin header, request blocked'));
      } else if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })(req, res, next);
});
app.use(cookieParser());
app.use(express.json());

// Api Endpoints
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req,res) => {
    res.send("<h1>Meal Mate Restaurant API</h1>");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Listen at PORT ${PORT}`);
});
