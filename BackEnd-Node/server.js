const express = require('express')
const app = express()
const routes = require('./routes')
const connection = require('./database')

app.set('port', process.env.PORT || 9000)

app.get('/', (req, res) =>
    res.send('Welcome to my api for node.js')
)

app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'))
    connection.connect(function (err) {
        if(err) throw err;
        console.log('Database Connected')
    })
})