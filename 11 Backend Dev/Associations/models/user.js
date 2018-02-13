var mongoose = require("mongoose");

//User Model email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
        ]
});

module.exports = mongoose.model("User", userSchema);