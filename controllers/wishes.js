//const wishes = [];
const Wish = require('../models/wish');

exports.getAddWishPage = 
    (req, res) => {
    res.render('add-wish', {
        pageTitle: "Add New Wish",
        path: "/admin/add-wish"
    });
}

exports.postAddWishes = (req, res) => {
    console.log(req.body.title);
    //wishes.push({title: req.body.title});
    const wish = new Wish(req.body.title);
    wish.saveWish();
    res.redirect('/');
}

exports.getWishes = (req, res) => {
    
    Wish.fetchAllWishes((wishes)=>{
        res.render('wishlist', {
        pageTitle: 'Welcome to My Wishlist!',
        wishes: wishes,
        path: '/'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'wishlist.html'));
}

exports.removeWish = (req, res) => {
    const wish = new Wish();
    wish.deleteWish(req.body.index);
    res.redirect('/');
   // res.sendFile(path.join(rootDirectory, 'views', 'wishlist.html'));
}