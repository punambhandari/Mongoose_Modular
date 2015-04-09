var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
name:String,
country:String,
description:String,
author:String,
url:String
})

mongoose.model('Mong',MongooseSchema);