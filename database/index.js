const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Successfully connected to database yay');
});

const lalalimeSchema = new mongoose.Schema({
    top: {
      tanktop: {
            images: Array,
            name: String,
            price: String,
            description: String,
            colors: Array,
            sizes: Array,
            breadcrumbs: Array
      },
      dresses: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
      sweaters: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
      jacketsAndCoats: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
      hoodiesAndSweatshirts: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
      shortSleeveShirts: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
      longSleeveShirts: {
        images: Array,
        name: String,
        price: String,
        description: String,
        colors: Array,
        sizes: Array,
        breadcrumbs: Array
      },
    },
    bottoms: {
        pants: {
            images: Array,
            name: String,
            price: String,
            description: String,
            colors: Array,
            sizes: Array,
            breadcrumbs: Array
        },
        shorts: {
            images: Array,
            name: String,
            price: String,
            description: String,
            colors: Array,
            sizes: Array,
            breadcrumbs: Array
        },
        skirts: {
            images: Array,
            name: String,
            price: String,
            description: String,
            colors: Array,
            sizes: Array,
            breadcrumbs: Array
        }
    }
})

const Product = mongoose.model()

