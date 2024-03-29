import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
    user: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    tasks: {
        type: Array<String>,
    },
    taskTypes: {
        type: Array<String>
    },
    groups: {
        type: Array<String>
    }
})

export { user }