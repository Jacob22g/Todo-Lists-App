const express = require('express')
const cors = require('cors')
const listRouter = require('./routers/list')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 5000

//middleware 
app.use(cors())
app.use(express.json()) // req.body

//ROUTES//
app.use(listRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is runing on port '+port)
})