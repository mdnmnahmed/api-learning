const app = require('express')();


//Middleares
app.use((req, res, next) => {
    res.status(200).json({
        message: 'This is For every route'
    });
});


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