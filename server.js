const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.json(
        {
        hello: 'world'
    })
})
app.listen(2000);
// app.listen(port, () => {
//     console.log(`port run kar rha h idhr ${port}`)
// })