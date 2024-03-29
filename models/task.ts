import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    assigned:{
        type: Array<String>,
  
    },
    createdBy: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        required: true,
    },
    taskTypePlace: {
        type: String,
        required: true,
    }
}, {
    strict: true
})

const Task = mongoose.model("Task", taskSchema)
export { taskSchema, Task }