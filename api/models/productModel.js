const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productImg: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('api-learning-product', productSchema);