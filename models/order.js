import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = Schema({
    items: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export const Order = mongoose.model("Order", OrderSchema);