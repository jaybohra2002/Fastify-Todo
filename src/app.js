const fp=require('fastify-plugin');
const apiROuter=require('./Routes/Api/apiRouter');
const db = require('./db/db.config');
const todoService = require('./Service/todoService');
const todoRepository = require('./Repository/todoRepository');
async function app(fastify,options){
    await fastify.register(db);
    await fastify.register(todoRepository);
    await fastify.register(todoService);
    
    await fastify.register(apiROuter,{prefix:'/api'});
}
module.exports=fp(app);