var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//Import model from post.js
var Post = require("./models/post");

//Import User model from user.js
var User = require("./models/user")

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create({
//   title:"How to cook the best burger",
//   conent:"Blah blah blah"
// }, function(err, post){
//     console.log(post);
// });

// Post.create({
//     title:"How to cook the best burger part 4",
//     content:"part 4 part 3 part 4"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post._id);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

//Find User
//Find all posts for that user
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });