const mongoose = require('mongoose');
const Wish = mongoose.model('Wish');

exports.getAddWishPage = 
    (req, res) => {
    res.render('add-wish', {
        pageTitle: "Add New Wish",
        path: "/admin/add-wish"
    });
}

exports.postAddWishes = (req, res) => {
    console.log(req.body.title);
    let newWish = new Wish();
    newWish.name = req.body.title
    newWish.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);            
        }
    });
}

exports.getWishes = (req, res) => {
    Wish.find((error, wishes) => {
        if(!error){
            res.render('wishlist', {
                pageTitle: 'Welcome to My Wishlist!',
                wishes: wishes,
                path: '/'
            });
        } else {
            console.log("Failed to retrieve the data");
        }
    });
}

exports.removeWish = (req, res) => {
    console.log(req.body.index);
    const checkedItemId = req.body.index;
    Wish.findByIdAndRemove(checkedItemId, function(error) {
        if(!error){
            console.log("Successfully deleted the wish!");
            res.redirect('/');
        }
    });
   // res.sendFile(path.join(rootDirectory, 'views', 'wishlist.html'));
}