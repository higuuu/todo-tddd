const request = require("supertest");

const endpoint = "/todo";

const newTodo = require("../mock-data/new-todo.json")

const app = require("../../app")

describe(endpointUrl, () => {
    it("POST" + endpointUrl, async ()=>{
        const response = await request(app)
        .post(endpointUrl)
        .send(newTodo)
        expect(resopnse.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title)
        expect(response.body.done).toBe(newTodo.done)
    })
})