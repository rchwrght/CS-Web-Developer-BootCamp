var mongoose = require("mongoose");

//Post Model title, content
//Declare Schema
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
//Declare Model and send out
module.exports = mongoose.model("Post", postSchema);