const fp=require('fastify-plugin');
class TodoRepository{
    constructor(db){
        this.db = db;
    }
    async getAll(){
        return this.db.todos;
    }
    async createTodo(todoText){
        const todoList=this.db.todos;
        this.db.todos.push({
            text:todoText,
            id:todoList.length
        });
        return this.db.todos;
    }
    async getOne(id){
        console.log(this.db.todos)
        const response= this.db.todos.find(todo => todo.id == id);
        return response;
    }
    async deleteAll(){

    }
    async deleteOne(id){

    }
}
async function todoRepository(fastify,options){
    const {db}=fastify;
    const repo=new TodoRepository(db);
    fastify.decorate('TodoRepository',repo);


}
module.exports=fp(todoRepository);
