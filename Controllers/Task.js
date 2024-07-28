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
    const { userId, status } = req.query;
    try {
        const tasks = await Task.find({
            user: userId,
            status: status
        });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
}

// DELETE
const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        await Task.findByIdAndDelete(taskId);
        res.status(200).json("Task has been deleted.");
    } catch (err) {
        res.status(500).json(err);
    }
};



export {createTask, getTask, deleteTask}