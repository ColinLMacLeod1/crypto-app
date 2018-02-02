const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const config = require('config')
const yes = require('yes-https')

//Middleware
app.use(cors())
app.use(bodyParser.json())
if(process.env.NODE_ENV=='production') app.use(yes());

//Constants
const port = config.get('Presets.port')

//Serving files
const indexPath = path.join(__dirname, './dist/index.html');
const publicPath = express.static(path.join(__dirname, './dist'));
app.use('/', publicPath);
app.get('/', function(_,res){ res.sendFile(indexPath) });




// Server Port
app.listen(process.env.PORT || port,function() {
	console.log('App listening on port', port)
})
