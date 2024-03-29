import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
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
        require: true
    },
    taskType: {
        type: String,
        require: true,
    },
    taskTypePlace: {
        type: String,
        require: true,
    }
})

export { taskSchema }