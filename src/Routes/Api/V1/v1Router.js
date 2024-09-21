const TodoRouter = require("./Todos");

async function v1Router(fastify, options){
    fastify.register(TodoRouter,{prefix:'/todos'});
}
module.exports=v1Router;