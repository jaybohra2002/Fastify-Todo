const { getAllTodos, createTodos, getOneTodo } = require("../../../../Controllers/todoController");

async function TodoRouter(fastify, options){
    fastify.get('/',getAllTodos);
    fastify.post('/',createTodos);
    fastify.get('/:id',getOneTodo);
}
module.exports=TodoRouter;