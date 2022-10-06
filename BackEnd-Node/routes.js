const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
    req.GetConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('select * from libros', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = routes