import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: String,
        required: true
    },
    steps: {
        type: Array,
        default: ["Less important","Important", "Very important"]
    }
})

export { taskTypeSchema }