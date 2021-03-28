const express = require('express')
const cors = require('cors')
const listRouter = require('./routers/list')
const taskRouter = require('./routers/task')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

//middleware 
app.use(cors())
app.use(express.json()) // allow access to req.body

// app.use(express.static(path.join(__dirname, 'client/build')))

if(process.env.NODE_ENV === "production"){
    //serve static content
    app.use(express.static(path.join(__dirname, 'client/build')))
}

//ROUTES//
app.use(listRouter)
app.use(taskRouter)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })

app.listen(port, () => {
    console.log('server is runing on port '+port)
})