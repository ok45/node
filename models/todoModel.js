const { response } = require("express");
const sql = require("./db.js");

const Todo = function(todo) {
    this.text = todo.text,
    this.created_on = todo.created_on, 
    this.completed = todo.completed
}

Todo.create = (newTodo, result) => {
    sql.query("INSERT INTO todos SET ?", newTodo, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
        }
        console.log("created todo: ", {id: res.id});
        result(null, res)
    })
}

Todo.getAll = result => {
    sql.query('SELECT * FROM todos', (err, res) => {
        if (err){
            result(null, err);
            return;
        }
        result(null, res)
    })
}

Todo.updateById = (id, todo, result) => {
    sql.query(
        "UPDATE todos SET completed = ? WHERE id = ?", 
        [todo.completed, id],
        (err, res) => {
            if(err){
                result(null, err);
                return;
            }
            if(res.affectedRows ==0){
                result({kind:"not found"}, null);
                return;
            }
            result(null, res)
        }
    )
}

Todo.remove = (id, result) => {
    sql.query("DELETE FROM todos WHERE id = ?", id, (err, res) => {
        if (err){
            result(null, err);
            return;
        }
        if (res.affectedRows ==0) {
            result({kind:"notfound"}, null);
            return;
        }
    })
}
module.exports = Todo;