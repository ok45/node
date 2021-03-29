const Todo = require('../models/todoModel.js');

exports.create = (req, res) => {
    if(!req.body){
        console.log(req)
        res.status(res.send({
            message: "empty"
        }))
    }
    const todo = new Todo({
        text: req.body.text,
        created: Date.now(),
        completed: false,
    })

    Todo.create(todo, (err, data) => {
        if (err){
            res.status(500).send({
                message:"error"
            })
        }
        else res.send(data)
        
    })
}

exports.findAll = (req, res) => {
    Todo.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error"
          });
        else res.send(data);
      });
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}
