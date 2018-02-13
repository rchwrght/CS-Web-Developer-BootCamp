var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_");

//Post Model title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

//User Model email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //embed data has to be defined before this point
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "test@abc.com",
//     name: "Test Model"
// });

// newUser.posts.push({
//     title: "how to brew potions",
//     content: "Get me to do it for you"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflectins on Apples",
//     content: "Apples are really cool"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({name: "Test Model"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title:"Three things I really hate",
            content: "Voldemort, Voldermort, Voldermort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});