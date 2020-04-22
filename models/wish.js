const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: {
        type: String
    }
});

mongoose.model('Wish', wishSchema);