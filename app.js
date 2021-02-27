const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Middleares
app.use(bodyParser.json())
const productRoutes = require('./api/routes/productRoutes');
app.use('/products', productRoutes);

//Routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello Num'
    });
});



//Create Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App started at PORT http://localhost:${PORT}/`);
});