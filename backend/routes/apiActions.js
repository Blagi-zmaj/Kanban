const Task = require('../database/models/task.js')

class taskActions{
    async getOneTask(req, res){
        let id = req.params.id;
        let listName = req. params.listName;
        try{
            let task = await Task.findById({_id: id});
            console.log('Found ID: ' + id);
            res.json(task);
        }catch(e){
            console.log('Error from downloading from database with error: ' + e);
        }
    };

    async getListAllTasks(req, res){
        try{
            let tasks = await Task.find({});
            tasks.map((task) => {
                console.log(task.content);
            });
            res.json(tasks);
        }catch(e){
            console.log('Error from downloading from database with error: ' + e);
        }
    };

    async writeNewTask(req, res){
        let content = req.body.content;
        let listName = req.body.listName;
        let taskObject = {
            content: content,
            listName: listName
        };
        let task;
        try{
            task = new Task(taskObject);
            await task.save(()=>{
                console.log(`Task with content: ${content} written. \nTask list name: ${listName}`);
            });
            res.json(task);
        }catch(e){
            console.log('Error on adding position to database with error: ' + e);
        }
    };

    async updateTask(req, res){
        let id = req.params.id;
        let listName = req.params.listName; 
        let newContent = req.body.content;
        let newListName = req.body.listName;
        let updatedTask = {content: newContent, listName: newListName};
        let task;
        try{
            task = await Task.findByIdAndUpdate(id, updatedTask, {useFindAndModify: false});
            console.log('Downloaded Task: ' + task);
            console.log('Downloaded content: ' + task.content);
            console.log('Downloaded listName: ' + task.listName);
            res.json(task);
        }catch(e){
            console.log('Cannot update task with error: ' + e);
        }
    };

    async deleteTask(req, res){
        let id = req.params.id;
        let listName = req.params.listName;
        try{
            await Task.findByIdAndDelete(id, () => {
                console.log(`Delete task with id: ${id} from list: ${listName}`);
            });
            res.sendStatus(200);
        }catch(e){
            console.log('Cannot delete task with error: ' + e);
        }
        
    };
};

module.exports = new taskActions();