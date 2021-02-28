// const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
//Middleares
app.use(bodyParser.json());
app.use(morgan('dev'));



//Routes
app.use('/products', require('./api/routes/productRoutes'));
app.use('/orders', require('./api/routes/orderRoutes'));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Num'
    });
});


//Handeling Error Routes
app.use((req, res, next) => {
    const error = new Error('Route not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


//Create Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App started at PORT http://localhost:${PORT}/`);
});