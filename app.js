require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./config/database');


connect();

const accountRouter = require('./routes/account.route');
const warehouseRouter = require('./routes/warehouse.route');
const officeRouter = require('./routes/office.route');
const orderRouter = require('./routes/order.route');
const transRouter = require('./routes/transaction.route');
const customerRouter = require('./routes/customer.route');
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('views'));
app.use(cors());

app.use('/account', accountRouter);
app.use('/warehouse', warehouseRouter);
app.use('/office', officeRouter);
app.use('/order', orderRouter);
app.use('/transaction', transRouter);
app.use('/customer', customerRouter);

app.listen(process.env.APP_PORT, function() {
    console.log("RESTful API running on port: " + process.env.APP_PORT);
})

