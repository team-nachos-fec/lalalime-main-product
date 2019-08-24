const mongoose = require('mongoose');
const Product = require('./index.js');

let topCategories = ['Dresses', 'Sweaters', 'Tank Tops'];
let bottomCategories = ['Pants', 'Shorts', 'Skirts'];
let tops = ['Dress', 'Sweater', 'Tank'];
let bottoms = ['Pant', 'Short', 'Skirt'];
let prefixes = ['Breeze By', 'Ebb To Street', 'On The Fly', 'The Everyday', 'In Movement', 'Fast and Free', 'Forward Flow', 'Calm and Collected', 'Hotty Hot', 'Back in Action', 'Swiftly Relaxed', 'Cross Chill', 'Glyde Along', 'Stronger as One', 'Street to Shore', 'Day Tripper', 'Here To There', 'Inner Glow', 'Monday Best', 'Throw It On'];
let prices = ['$98.00 USD', '$68.00 USD', '$150.00 USD', '$122.00 USD', '$93.00 USD', '$148.00 USD', '$74.00 USD', '$49.00 USD', '$65.00 USD', '$88.00 USD']; 
let bottomSizes = [0, 2, 4, 6, 8, 10, 12, 14];
let topSizes = [2, 4, 6, 8, 10, 12];
let topImages = [
    [
      ['Black', 'https://bit.ly/2MzZGZI', 'https://bit.ly/2MzZBoS', 'https://bit.ly/30vLRyL'],
      ['Antique Bark', 'https://bit.ly/2zhs0qZ', 'https://bit.ly/2zhs2z7', 'https://bit.ly/2KPkUR8'],
      ['Light Grey', 'https://bit.ly/31Tz6hA', 'https://bit.ly/33WIqmT', 'https://bit.ly/2L3usqB']
    ],
    [
      ['Almost Blue', 'https://bit.ly/2Lj0vDd', 'https://bit.ly/33UzbU3', 'https://bit.ly/2HpmuqJ'],
      ['Pink Bliss', 'https://bit.ly/2Zo0UZV', 'https://bit.ly/2Mx0iiB', 'https://bit.ly/2ZfjtUX'],
      ['Alpine White', 'https://bit.ly/2zu3EKV', 'https://bit.ly/323GjMj', 'https://bit.ly/2PcKqnI']
    ],
    [
        ['French Clay', 'https://bit.ly/2ZtwIAu', 'https://bit.ly/323Gnvx', 'https://bit.ly/2HnWv2X'],
        ['Brick Rose', 'https://bit.ly/2KREbBj', 'https://bit.ly/33VBq9K', 'https://bit.ly/2Zjl6QN'],
        ['Lunar Rock', 'https://bit.ly/2MAjc8e', 'https://bit.ly/31WNHJh', 'https://bit.ly/30vJ08R']
    ]
]; 

let bottomDesc = [
    [
        'These high-rise, all-sport pants use zoned compression to keep you supported in all the right places. Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel.',
        'These soft, high-rise pants minimize distractions and maximize comfort as you flow through your yoga practice.'
    ],
    [
        'Sweat to your heart\'s content in these lightweight cross-sport shorts that are lined for coverage. They have a secret stash pocket in the liner and a discreet zippered pocket on the back waistband for keys, cards, gels, or cash.',
        'Run fast and free in these barely-there-feeling shorts with lots of storage.'
    ],
    [
        'From the court to the trails, keep necessities close in this skirt with built-in storage.',
        'Designed with versatility in mind, this lightweight, elegant skirt follows your every move.'
    ]
]

let topDesc = [[
    'This lightweight dress is perfect for bright summer days—it\'s made from sweat-wicking fabric that offers UV protection while you\'re strolling in the sun.',
    'Getting to and from the studio just got a whole lot cuter. This fun dress has breathable coverage and feels super soft.'
],
[
    'Feel cozy without overheating in this sweater. It\'s tightly knit where you want warmth, and looser—think open-hole knit—in areas that need to breathe.',
    'Designed with warmth and versatility in mind, this transitional layering piece is perfect for travel days and walks to the studio.'
],
[
    'Feel the breeze on your skin in this relaxed-fit tank. We added open-hole ventilation for airflow during your sweatiest sessions.',
    'This lightweight tank was designed to be your go-to layering piece pre- and post workout.'
]];

let generateRandomIndex = (array) => {
    var randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

let generateTopProduct = () => {
    let outputArray = [];
    for (var i = 0; i < tops.length; i++) {
        for (var j = 0; j < 17; j++) {
            let oneProduct = {};
            // Select product colors randomly
            let randomImages = generateRandomIndex(topImages);
            let randomImagesArray = [];
            for (randomImages; randomImages >= 0; randomImages--) {
                randomImagesArray.push(topImages[i][randomImages])
            }
            // Select product colors randomly 
            oneProduct['images'] = randomImagesArray;
            oneProduct['property'] = 'top';
            oneProduct['type'] = tops[i];
            oneProduct['name'] = prefixes[generateRandomIndex(prefixes)] + " " + tops[i];
            oneProduct['price'] = prices[generateRandomIndex(prices)];
            oneProduct['description'] = topDesc[i][generateRandomIndex(topDesc[i])];
            oneProduct['sizes'] = topSizes;
            oneProduct['breadcrumbs'] = ['Tops', topCategories[i]];
            outputArray.push(oneProduct);
        }
    }
    return outputArray;
}

let generateBottomProduct = () => {
    let outputArray = [];
    for (var i = 0; i < bottoms.length; i++) {
        for (var j = 0; j < 17; j++) {
            let oneProduct = {};
            // Select product colors randomly
            let randomImages = generateRandomIndex(topImages);
            let randomImagesArray = [];
            for (randomImages; randomImages >= 0; randomImages--) {
                randomImagesArray.push(topImages[i][randomImages])
            }
            // Select product colors randomly
            oneProduct['images'] = randomImagesArray;
            oneProduct['property'] = 'bottom';
            oneProduct['type'] = bottoms[i];
            oneProduct['name'] = prefixes[generateRandomIndex(prefixes)] + " " + bottoms[i];
            oneProduct['price'] = prices[generateRandomIndex(prices)];
            oneProduct['description'] = bottomDesc[i][generateRandomIndex(bottomDesc[i])];
            oneProduct['sizes'] = bottomSizes;
            oneProduct['breadcrumbs'] = ['Bottoms', bottomCategories[i]];
            outputArray.push(oneProduct);
        }
    }
    return outputArray;
}

let allProducts = () => {
    return generateTopProduct().concat(generateBottomProduct());
}

let seedData = () => { 
    let hundredProducts = allProducts();
    Product.insertMany(hundredProducts)
    .then(() => console.log('Database seeded yay!'))
    .catch((err) => console.log('Unable to seed', err))
}