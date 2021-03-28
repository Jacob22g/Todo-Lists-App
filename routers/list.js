const express = require('express')
const router = new express.Router()
const pool = require('../db')

//
// in real life app I would have add: 
// add validation: check all requset parameters
// seperate the query's to diffeent files
// DELETE commands will be a column named is_deleted instead of delete is a real application
//

router.post('/lists', async (req,res) => {
    try {
        const { list_name } = req.body
        const newList = await pool.query(
            'INSERT INTO lists (list_name) VALUES($1) RETURNING *',
             [list_name]
        )
        res.status(201).json(newList.rows)
    } catch (err) {
        console.error(err)
    }
})

router.get('/lists', async (req,res) => {
    try {
        const allLists = await pool.query('SELECT * FROM lists ORDER BY created_at asc')
        res.json(allLists.rows)
    } catch (err) {
        console.error(err)
    }
})

router.delete('/lists/:id', async (req,res) => {
    try {
        const { id } = req.params
        const deletedList = await pool.query('DELETE FROM lists WHERE list_id=$1 RETURNING *', [id])
        res.json(deletedList.rows[0])
    } catch (err) {
        console.error(err)
    }
})

module.exports = router