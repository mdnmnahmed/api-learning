const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//Middleares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //  https://nnn.web.app
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authoriztion');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
})


//Connection with DB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log("Connected with MongoDB ");
    })
    .catch((err) => {
        console.log("Error in with MongoDB ", err);
    });


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