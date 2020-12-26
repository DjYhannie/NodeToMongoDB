const Todo = require('../model/todoModel')


const getList = (req, res) =>{
    Todo.find((err, todo)=>{
        if(err){
            res.send(err)
        }
        res.json(todo)
    })
};


const getListById = (req, res) =>{
    let todoID = req.params.id;

    Todo.findById(todoID,(err, todo)=>{
        if(err){
            res.send(err);
        }
        res.json(todo);

    })
};


//creating new todo
const addList = (req,res) =>{
    let todo = new Todo(
        {
        title : req.body.title,
        description : req.body.description,
        creator : req.body.creator 
        }
    )

    todo.save((err, todo)=>{
        if (err){
            res.send(err);
        }
        res.json(todo)
    });
};



const updateList = (req,res) =>{
    let todoID = req.params.id;
    let elementToUpdate = 
    {
        creator: req.body.newCreator,
    
    }

    Todo.findByIdAndUpdate(todoID,elementToUpdate,(err,elementToUpdate)=>{
        if (err){
            res.send(err)
        }
        res.json(elementToUpdate);
    });


};

const deleteList = ( req, res) =>{
    let todoID = req.params.id;
    
    Todo.findByIdAndDelete(todoID,(err,todo)=>{
        if(err){
            res.send(err)
        }
        res.json("Deleted Successfully")

    });
};


module.exports = {
    getList,
    getListById,
    addList,
    updateList,
    deleteList
}