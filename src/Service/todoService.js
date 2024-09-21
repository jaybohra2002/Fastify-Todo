const fp=require('fastify-plugin');
class TodoService{
    constructor(TodoRepository){
        this.TodoRepository = TodoRepository;
    }
    async getAll(){
        return this.TodoRepository.getAll();
    }
    async createTodos(todoText){
        return this.TodoRepository.createTodo(todoText);
    }
    async getOne(id){
        console.log(id);
        return this.TodoRepository.getOne(id);
    }
    async deleteAll(){
        return this.TodoRepository.deleteAll();

    }
    async deleteOne(id){
        return this.TodoRepository.deleteOne(id);
    }
}
async function todoService(fastify,options){
    const {TodoRepository}=fastify;
    const service=new TodoService(TodoRepository);
    fastify.decorate('TodoService',service);


}
module.exports=fp(todoService);
