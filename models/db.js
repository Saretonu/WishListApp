const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://tonusare:PrsKl9zLsZgceSzX@cluster0-etpju.mongodb.net/wishlistDB');
require('./wish');
