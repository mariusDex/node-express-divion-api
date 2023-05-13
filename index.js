const express = require("express")
const app = express()

require('dotenv').config();



const postsRouter = require('./routes/posts.router')



app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use("/divion", postsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port 3002")
})

app.get('/' , (req,res) => res.json('My Api running'))