import mongoose from 'mongoose';
const { Schema } = mongoose;

const groupSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    members: {
        type: Array<String>,
        require: true
    },
    tasks: {
        type: Array<String>,
    },
    taskTypes: {
        type: Array<String>
    },
})