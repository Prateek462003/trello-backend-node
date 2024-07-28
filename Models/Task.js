import mongoose, { Schema } from "mongoose"

const TaskSchema  = new mongoose.Schema(
    {
        "title": {
            type:String,
            required:true,
        },
        "description":{
            type:String,
        },
        "status":{
            type:String,
            required:true,
        },
        "priority":{
            type:String,
        },
        "deadline":{
            type:String,
        },
        "user" : {
            type:Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },
    },{timestamps:true}
)


const Task = mongoose.model("Task", TaskSchema)

export default Task