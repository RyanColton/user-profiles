var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./config')
var userCtrl = require('./controllers/userCtrl')
var profileCtrl = require('./controllers/profileCtrl')
var corsOptions = {
  origin: 'http://localhost:1138'
}

var app = express()

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
  secret: config.sessionSecret
}))
app.use(express.static(__dirname + '/public'))

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.profile)

app.listen(1138, function(){
  console.log('listening on port 1138')
})
