import mongoose from "mongoose" 

const ActivitySchema  = new mongoose.Schema(
    {
        "title": {
            type:String,
            required:true,
        },
    },{timestamps:true}
)


const Activity = mongoose.model("Activity", ActivitySchema)

export default Activity