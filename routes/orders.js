import express from "express";
import { Order } from "../models/order.js";

const router = express.Router();

router.get('/', async (_, res) => {
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch(err) {
        res.status(404).json(err);
    }
})
router.post('/', async (req, res) => {
    const newOrder = new Order({
        items: req.body.items,
        name: req.body.name,
        address: req.body.address,
    })

    try {
        await newOrder.save()
        res.json("Your Order is in the Works!")
    } catch(err) {
        res.status(422).json(err);
    }
})
router.patch('/:orderId', (req, res) => {
    res.json('PATCH Success')
})
router.delete('/:orderId', async (req, res) => {
    const id = req.params.orderId;
    
    try {
        const order = await Order.findOneAndDelete(id);
        res.json({id: order._id})
    } catch(err) {
        res.status(422).json(err)
    }
})

export const orders = router;