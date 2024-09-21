const v1Router = require("./V1/v1Router");

async function apiROuter(fastify, options){
    fastify.register(v1Router,{prefix:'/v1'});
}
module.exports=apiROuter;