const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    name: String,
    price: Number
});

module.exports = mongoose.model('api-learning-product', productSchema);