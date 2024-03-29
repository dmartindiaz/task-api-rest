import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
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
}, {
    strict: true
})

const User = mongoose.model("User", user)

export { user, User }