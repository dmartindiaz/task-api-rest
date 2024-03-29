import mongoose from 'mongoose';
const { Schema } = mongoose;

const groupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    members: {
        type: Array<String>,
        required: true
    },
    tasks: {
        type: Array<String>,
    },
    taskTypes: {
        type: Array<String>
    },
})