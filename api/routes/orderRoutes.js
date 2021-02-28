const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Orders Data'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        message: 'New Order Data',
        data: req.body
    });
});

router.get('/:orderId', (req, res) => {
    const id = req.params.orderId;
    if (id == 'special') {
        res.status(200).json({
            message: 'Order Special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Order Others ID',
            id: id
        });
    }
});


router.patch('/:orderId', (req, res) => {
    res.status(200).json({
        message: 'Updated Orders Data'
    })
});

router.delete('/:orderId', (req, res) => {
    const { orderId } = req.params;
    res.status(200).json({
        message: `${orderId} Order is Deleted`
    })
});



module.exports = router;