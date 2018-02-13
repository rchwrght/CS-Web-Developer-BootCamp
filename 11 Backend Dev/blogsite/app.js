var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer");

//APP CONFIG
mongoose.connect("mongodb://localhost/blog_site");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer()); //must always go after bodyParser

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
   title: String,
   image: String,
   body: String,
   created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "TEST BLOG",
//     image: "https://images.unsplash.com/photo-1459539235056-5045ca20e525?ixlib=rb-0.3.5&s=530efa3b660a7bd06072987a98c1bc34&auto=format&fit=crop&w=1050&q=80",
//     body: "Test infomation about a hard coded blog entry for us to have some data to work with whilst creating this app"
// });

//RESTUL ROUTES
app.get("/", function(req,res){
   res.redirect("/blogs") ;
});

//INDEX ROUTE
app.get("/blogs",function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log(err);
       } else {
            res.render("index", {blogs: blogs});
       }
    });
});

//NEW ROUTE
app.get("/blogs/new", function(req,res){
   res.render("new");
});


//CREATE ROUTE
app.post("/blogs", function(req,res){
   req.body.blog.body = req.sanitize(req.body.blog.body);
   //create new blog
   //then redirect to index
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render("new");
       } else {
           res.redirect("/blogs");
       }
   });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          res.redirect("/blogs");
      } else {
          res.render("show", {blog: foundBlog});
      }
   });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          res.redirect("/blogs");
      } else {
         res.render("edit", {blog: foundBlog});
      }
   });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DESTROY ROUTE
app.delete("/blogs/:id", function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs");
       }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog Site started");
})