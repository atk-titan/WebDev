const zod = require('zod');

const createTodo = zod.object({
    title : zod.string(),
    description: zod.string().max(100),
});

const updateTodo = zod.Schema({
    id : zod.string()
});

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
};