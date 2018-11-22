const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// creat schema for the data that beng saved in the data base 


//todo find away to make the object prime so ther will be no doblication  
let repoSchema = mongoose.Schema({
 
  userName : String ,
  repoName : String ,
  htmlUrl  : String
 
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  
  //make new obj for each repo and save it in the database 

 //console.log("data data data ",data)
  var repo = new Repo({
  	userName : data.owner.login,
  	repoName : data.name,
  	htmlUrl : data.html_url 
  });
repo.save(function (err){
	if (err) 
		{return handleError(err);
		} else {
			console.log(' seved !!!!!!!!!!! ')
		  }
})
}

module.exports.save = save;
module.exports.Repo=Repo



