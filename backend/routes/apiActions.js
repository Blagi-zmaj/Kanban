class taskActions{
    getOneTask(req, res){
        res.send('Get one task');
    };

    getAllTasks(req, res){
        res.send('Get all tasks');
    };

    writeNewTask(req, res){
        res.send('Write one task');
    };

    updateTask(req, res){
        res.send('Update one task');
    };

    deleteTask(req, res){
        res.send('Delete one task');
    };
};

module.exports = new taskActions();