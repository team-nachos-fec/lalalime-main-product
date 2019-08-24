const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lalalime', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Successfully connected to database yay');
});

const lalalimeSchema = new mongoose.Schema({
    images: Array,
    property: String,
    type: String,
    name: String,
    price: String,
    description: String,
    sizes: Array,
    breadcrumbs: Array
});

const Product = mongoose.model('Product', lalalimeSchema);

module.exports = Product;