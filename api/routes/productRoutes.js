const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

router.get('/', (req, res) => {
    productModel.find()
        .exec()
        .then(data => {
            if (data.length > 0) {
                res.status(200).json({
                    message: 'All Products Fetched',
                    data
                });
            } else {
                res.status(200).json({
                    message: 'There is no Data',
                    data
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to fetch All Products',
                err
            })
        });
});

router.post('/', (req, res) => {
    const newProduct = new productModel(req.body);

    newProduct.save()
        .then(data => {
            res.status(201).json({
                message: 'New Product created successfully',
                data: newProduct
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to save new Product',
                err
            });
        })
});

router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    productModel.findById(productId)
        .exec()
        .then(data => {
            if (data) {     //For checking Data is not Null
                res.status(200).json({
                    message: 'Product Found',
                    data
                })
            } else {
                res.status(500).json({
                    message: 'Product Not Found',
                    data
                })
            }
        })
        .then(err => {
            res.status(500).json({
                message: 'Product Not Found',
                err
            })
        })
});


router.patch('/:productId', (req, res) => {
    const { productId: _id } = req.params; //Extracting productId & giving a name _id at the same time
    const updateProductData = req.body;
    productModel.findByIdAndUpdate(_id, updateProductData, { new: true })
        .then(data => {
            res.status(200).json({
                message: 'Product Updated',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to Update Product',
                err
            })
        })

});

router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    productModel.findByIdAndRemove(productId)
        .then(data => {
            if (data) {
                res.status(200).json({
                    message: 'Product deleted',
                    data
                });
            } else {
                res.status(500).json({
                    message: 'Failed to delete product, product not Found',
                    data
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to delete product',
                err
            });
        })
});



module.exports = router;