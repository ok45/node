const express = require("express");
const app = express();
const todos = require("./controllers/todoController.js");

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "funkcni" })
});

app.post("/todos", todos.create);
app.get("/todos", todos.findAll);
app.put("/todos/:todoId", todos.update);
app.delete("/todos/:todoId", todos.delete);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});