const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Products Data'
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Products Data in POST Req',
        data: req.body
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    if (id == 'special') {
        res.status(200).json({
            message: 'Products Special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Products Others ID',
            id: id
        });
    }
});


router.patch('/:productId', (req, res) => {
    res.status(200).json({
        message: 'Updated Product Data'
    })
});

router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    res.status(200).json({
        message: `${productId} Product is Deleted`
    })
});



module.exports = router;