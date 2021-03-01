const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'api-learning-product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('api-learning-order', orderSchema);