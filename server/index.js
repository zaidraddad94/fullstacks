const express = require('express');
// const db = require('../database/index.js');
var bodyParser = require('body-parser')
var helper = require('../helpers/github.js')
let app = express();

var db = require('../database/index')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));
bodyParser.raw()

app.post('/repos', function (req, res) {
	
  
  // This route should take the github username provided
  // and get the repo information from the github API, then
  //   save the repo information in the database
//console.log("user name " , req.body)


//call the helper function 
//give him user name and cll back 
helper.getReposByUsername(req.body.data , function (data) {
	//console.log("CCCCCC",req.body)


	//this for loop to lop throw the array of repos and sen one to the data base each time 
for(var i = 0; i < data.length ; i++){
	db.save(data[i])
	
	//console.log( "DAT",data[i])
	

}
//console.log("DATA",data)
res.send(data)

//the send to send the array of repose to the front end 

  })

});
// zr to do make a get function that return 25 item from the data base 
app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

//let port = 1128;
var port = process.env.PORT || 3000 ;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

