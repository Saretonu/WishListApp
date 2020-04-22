const express = require('express');
const bodyParser = require('body-parser');
//it is crucially important to import model dependency BEFORE the route!
require('./models/db');
const path = require('path');
const userRoute = require('./routes/wishlist');//injecting code from shop.js
const adminRoute = require('./routes/admin');//injecting code from admin.js
const errorPage = require('./controllers/404');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute);


app.use(errorPage.getErrorPage);


app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
});