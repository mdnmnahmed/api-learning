const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

router.get('/', (req, res) => {
    orderModel.find()
        .populate('product', 'name price _id')
        .then((data) => {
            res.status(200).json({
                message: 'All orders fetched',
                data
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error in Fetching Orders',
                err
            })
        })
});

router.post('/', (req, res) => {
    const newOrderData = new orderModel({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    })

    newOrderData.save()
        .then(data => {
            res.status(201).json({
                message: 'New Order Data Created',
                data
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error in New Order Data Created',
                err
            });
        })
});

router.get('/:orderId', (req, res) => {
    const { orderId } = req.params;
    orderModel.findById(orderId)
        .populate('product', 'name price _id')
        .then(data => {
            res.status(200).json({
                message: 'Order Fetched',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Order not Found',
                err
            })
        })
});


router.patch('/:orderId', (req, res) => {
    res.status(200).json({
        message: 'Updated Orders Data'
    })
});

router.delete('/:orderId', (req, res) => {
    const { orderId } = req.params;
    orderModel.findByIdAndRemove(orderId)
        .then(data => {
            if (data) {
                res.status(200).json({
                    message: 'Order Deleted',
                    data
                })
            } else {
                res.status(500).json({
                    message: 'Failed to Delete Order',
                    data
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to Delete Order',
                err
            })
        })
});



module.exports = router;