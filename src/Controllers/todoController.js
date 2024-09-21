async function getAllTodos(req,res){
    try {
        const {TodoService}=this;
        console.log(TodoService);
        const response= await TodoService.getAll();
    return res.status(200).send({response});
    } catch (error) {
        console.log(error);
    }
    
}
async function createTodos(req,res){
    try {
        const {TodoService}=this;
        console.log(TodoService);
    const response=await TodoService.createTodos(req.body.todotext);
    return res.status(201).send({response});
    } catch (error) {
        console.log(error);
    }
    
}
async function getOneTodo(req,res){
    try {
        const{TodoService}=this;
        const id=req.params.id;
        console.log(id);
        const response=await TodoService.getOne(id);
        return res.status(200).send({response});
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    getAllTodos,
    createTodos,
    getOneTodo
}