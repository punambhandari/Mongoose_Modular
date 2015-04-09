var Mongs=require('../controllers/mongs');

module.exports=function(app){

app.get('/',function(request,response){

	Mongs.index(request,response);
});

//route for new form
app.get('/mongooses/new',function(request,response){
//render the index page
	Mongs.new_form(request,response);
});

//create a new mongoose
app.post('/mongooses',function(request,response){
	Mongs.create_new(request,response);

});

//edit a mongoose (open the edit form with existing data)


app.get('/mongooses/:id/edit',function(request,response){
	Mongs.edit_form(request,response);
});

//update a mongoose
app.post('/mongooses/:id', function(request,response){
	Mongs.update(request,response);
})


//delete a mongoose

app.get('/mongooses/:id/destroy',function(request,response){
	//get the url and delete the file
	Mongs.destroy(request,response);
		
});

}
