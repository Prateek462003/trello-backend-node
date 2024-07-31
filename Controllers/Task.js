import Task from "../Models/Task.js"

// CREATE
const createTask = async (req, res)=>{
    const task = new Task(req.body);
    try{
        const savedTask = await task.save();    
        res.status(200).json(savedTask);
    }catch(err){
        res.status(500).json(err);
    }
}

// READ
const getTask = async (req, res) => {
    const { userId } = req.query;
    try {
        const tasks = await Task.find({
            user: userId,
        });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE
const deleteTask = async (req, res) => {
    const {taskId} = req.query;     
    console.log("taskId is ", taskId);
    try {
        await Task.findByIdAndDelete(taskId);
        console.log("task deleted", taskId)
        res.status(200).json("Task has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
};



export {createTask, getTask, deleteTask}