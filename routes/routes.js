module.exports = app => {
    const todos = require("../controllers/todoController.js");

    app.post("/todos", todos.create);
    app.get("/todos", todos.findAll);
    app.put("/todos/:todoId", todos.update);
    app.delete("/todos/:todoId", todos.delete);
}