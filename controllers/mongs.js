var mongoose = require('mongoose');
var Mong =mongoose.model('Mong');
var fs = require('fs');
var mongs={};


mongs.index= function(request,response){

	Mong.find({},function(err,mongooses){
		if(err)
		{
			console.log(err);
		}
		else
		{
			response.render("index",{mongooses:mongooses});
		}
	});
};

mongs.new_form = function(request,response){

	response.render("new");
};


mongs.create_new = function(request,response){
	if(done==true){
			var file=request.files;
			var url=file.picture.name;
			var data =request.body;
			data.url=url;
			}
		var mong= new Mong(data);

		mong.save(function(err){
			if(err)
			{
			console.log("error");	
			}
			else
			{
				response.redirect('/');
			}

		});

};

mongs.edit_form=function(request,response){
	Mong.find({_id:request.params.id},function(err,mongoose){
		console.log(mongoose);
		response.render('edit',{mongoose:mongoose});
});
};

mongs.update=function(request,response){
		var data =request.body;
		var file=request.files;
		console.log("FILEEEE" + file);
		var url="";
		if(file.picture !=undefined)
		{
		url=file.picture.name;	
		}
			if(url!="")
			{
			Mong.update({_id:request.params.id},{name:data.name,country:data.country
				,description:data.description,author:data.author,url:url}, function(err,mongoose){
					if(err)
					{
						console.log(err);
					}
					else
					{
						response.redirect('/');
					}
				});
			}
			else
			{
			Mong.update({_id:request.params.id},{name:data.name,country:data.country,
				description:data.description,author:data.author},function(err,mongoose){
					if(err)
					{
						console.log(err);
					}
					else
					{
						response.redirect('/');
					}
				});
			}

};
mongs.destroy = function(request,response){
		var url="";
		Mong.find({_id:request.params.id},function(err,mongoose){
			console.log("FILEEEE" + mongoose);
			url="./static/"+ mongoose[0].url;
			console.log("YUPEEEE" + url);

				Mong.remove({_id:request.params.id},function(err,mongoose){
				//delete the file
				fs.unlinkSync(url);
				response.redirect('/');
			});
		});
}


module.exports = mongs;

