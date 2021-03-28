const express = require('express')
const router = new express.Router()
const pool = require('../db')

//create a todo
router.post('/todos', async (req, res) => {
    try {

        const { description, list_id } = req.body

        const newTodo = await pool.query(
            'INSERT INTO todo (description, list_id) VALUES($1, $2) RETURNING *',
             [description, list_id]
        )

        res.json(newTodo.rows)

    } catch (err) {
        console.error(err)
    }
})

//get all todos
router.get('/todos', async (req, res) => {
    try {

        const allTodos = await pool.query('SELECT * FROM todo ORDER BY created_at asc')

        res.json(allTodos.rows)

    } catch (err) {
        console.error(err)
    }
})

//gat a todo
router.get('/todos/:id', async (req, res) => {
    try {

        const { id } = req.params
        // VALIDATION: check if id is an integer
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [id])

        res.json(todo.rows[0])

    } catch (err) {
        console.error(err)
    }
})

//TODO: change id to list_id

//gat all todos of a list
router.get('/lists/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todos = await pool.query('SELECT * FROM todo WHERE list_id=$1 ORDER BY created_at asc', [id])
        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

//update a todo
router.put('/todos/:id', async (req, res) => {
    try {

        const { id } = req.params
        const { description, completed } = req.body

        const update = await pool.query("UPDATE todo SET description = $1, completed=$2 WHERE todo_id=$3", [description, completed, id])
        // const updatedTodo = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [id])
        
        res.json('updated')

    } catch (err) {
        console.error(err)
    }
})

//delete a todo
router.delete('/todos/:id', async (req, res) => {
    try {

        const { id } = req.params

        const deletedTodo = await pool.query('DELETE FROM todo WHERE todo_id=$1 RETURNING *', [id])

        res.json(deletedTodo.rows[0])

    } catch (err) {
        console.error(err)
    }
})


module.exports = router