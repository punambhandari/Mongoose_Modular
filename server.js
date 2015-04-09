var express=require("express");
var app=express();
var bodyParser=require('body-parser');
var multer = require('multer');
var fs = require('fs');

app.use(multer({dest:'./static/',rename:function(fieldname,fiilename){
	return fiilename+Date.now();
},onFileUploadStart:function(file){
	if (file.originalname == "") return false;
	console.log(file.originalname + 'is uploading')
},onFileUploadComplete: function (file) {	
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

app.use(bodyParser.urlencoded(
	{
	extended: true
	}));

//set views folder for all statuc content
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + "/static"));

//config for mongoose (database)
var mongoose = require('./config/mongoose');

//routes
require('./config/route')(app);


app.listen(8000, function() {
 console.log("listening on port 8000");
});