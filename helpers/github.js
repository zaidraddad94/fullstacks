const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username,cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  // username = username.split(' ').join('');
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  //github api to get data for one user name all repos 
  // ther is dicumantaion for github api 
 request.get(options, function(err, res, body) {  
     let json = JSON.parse(body);
    // console.log()
    // console.log('befor ' , body)
    // if (err){
    //   cb(err,null)
    // }else{
      cb(json);
      
    // }
});



};




module.exports.getReposByUsername = getReposByUsername;