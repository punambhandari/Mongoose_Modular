var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/mongoose");

// require fs for loading the model files
var fs = require('fs');

// require the path module
var path = require("path");

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// fancy function that reads all of the files from a specific location (models_path)
//and then does something (requires) for each of the js files in the location
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		// require all of the js files -- remember that require RUNS the code even if there is no module.exports in the file
		require(models_path + '/' + file);
	}
});
