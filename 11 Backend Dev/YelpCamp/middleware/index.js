var Campground = require("../models/campground");
var Comment = require("../models/comment");

//all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
    if(req.isAuthenticated()){ //Are They Logged In
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                
                //Extra condidition to prevent app crash found by other students can also be written as an or statement (see routes)
                if(!foundCampground) {
                    req.flash("error", "Item not found");
                    return res.redirect("back");
                }
                
                if(foundCampground.author.id.equals(req.user._id)){ //Are they the author of the campground
                   next();
                } else {
                    req.flash("error", "Permission Denied");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function (req, res, next){
    if(req.isAuthenticated()){ //Are They Logged In
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                req.flash("error", "Comment not found");
                res.redirect("back");
            } else {
                
                //Extra condidition to prevent app crash found by other students
                if(!foundComment) {
                    req.flash("error", "Item not found");
                    return res.redirect("back");
                }
                
                if(foundComment.author.id.equals(req.user._id)){ //Are they the author of the comment
                   next();
                } else {
                    req.flash("error", "Permission Denied");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;