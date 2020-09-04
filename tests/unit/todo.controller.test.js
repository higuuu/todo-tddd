const TodoController = require("../../controllers/todo.controller")

descriibe("TodoController.createTodo", ()=>{
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function")
    })
})