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
        ['Black', 'https://tinyurl.com/y2lc6p2y', 'https://tinyurl.com/y2hnvhdu', 'https://tinyurl.com/yxg38rye', 'https://tinyurl.com/y6mhk96l', 'https://tinyurl.com/y56b852x', 'https://tinyurl.com/y3hp5739'],
        ['Moonwalk', 'https://tinyurl.com/y2unpv2k', 'https://tinyurl.com/y2flsqmj', 'https://tinyurl.com/yywfr6b9', 'https://tinyurl.com/y4egmnrr', 'https://tinyurl.com/y33wpc6k', 'https://tinyurl.com/yyuss7rc'],
        ['Red Dust', 'https://tinyurl.com/yxuckh6g', 'https://tinyurl.com/yxbkmqd9', 'https://tinyurl.com/yyvwwnpl', 'https://tinyurl.com/y44m6awn', 'https://tinyurl.com/y2t6fh6q', 'https://tinyurl.com/y4hs6wqk'],
        ['Riverstone', 'https://tinyurl.com/y3chr6r9', 'https://tinyurl.com/y4kynjv3', 'https://tinyurl.com/y2ml9f3t', 'https://tinyurl.com/y4dep634', 'https://tinyurl.com/y6fnm5jb', 'https://tinyurl.com/y4csa8of']
    ],
    [
        ['Black', 'https://tinyurl.com/yy8prrgt', 'https://tinyurl.com/y24k7z2g', 'https://tinyurl.com/y69cpr8e', 'https://tinyurl.com/y64nyla4', 'https://tinyurl.com/y4c2eqgr', 'https://tinyurl.com/y3y4cjq4'],
        ['Heathered Moonwalk', 'https://tinyurl.com/y48nybmx', 'https://tinyurl.com/y4ubfafg', 'https://tinyurl.com/yxakou4d', 'https://tinyurl.com/y4ppnefr', 'https://tinyurl.com/yyl86w9o', 'https://tinyurl.com/y3n4offh'],
        ['Heathered Muse', 'https://tinyurl.com/yyov7zmu', 'https://tinyurl.com/y2jted7h', 'https://tinyurl.com/y48lnjbf', 'https://tinyurl.com/y37jxvbu', 'https://tinyurl.com/y6qkowbe', 'https://tinyurl.com/yxv2csbh'],
        ['Heathered Plumful', 'https://tinyurl.com/y67lorgw', 'https://tinyurl.com/y5jeqlsk', 'https://tinyurl.com/y2bcjmzh', 'https://tinyurl.com/y6n54p24', 'https://tinyurl.com/yxvxvem3', 'https://tinyurl.com/y4n8yewj'],
        ['Landscape Green', 'https://tinyurl.com/y4t7765b', 'https://tinyurl.com/y42567lo', 'https://tinyurl.com/yxr6gvsp', 'https://tinyurl.com/y2d5rkgz', 'https://tinyurl.com/y58hgzcp', 'https://tinyurl.com/y6x5vfnl'],
        ['Ultra Light Grey', 'https://tinyurl.com/y5awrvaz', 'https://tinyurl.com/y5xskjq3', 'https://tinyurl.com/y2vqqyb4', 'https://tinyurl.com/y345km96', 'https://tinyurl.com/y37mfxh5', 'https://tinyurl.com/y5fkqpgq']
    ],
    [
        ['Alpine White', 'https://tinyurl.com/yxbm472n', 'https://tinyurl.com/y5ehb5nq', 'https://tinyurl.com/y4cfr425', 'https://tinyurl.com/y2jymusv', 'https://tinyurl.com/y3am8maq', 'https://tinyurl.com/y2apftyj'],
        ['Black', 'https://tinyurl.com/yxch6kgu', 'https://tinyurl.com/y3cfv6nb', 'https://tinyurl.com/y3d2d42x', 'https://tinyurl.com/y6tukhuy', 'https://tinyurl.com/y4ch4tcn', 'https://tinyurl.com/y4bk2rfm'],
        ['Frosted Mulberry', 'https://tinyurl.com/yy8fo3zw', 'https://tinyurl.com/y5lnxqj7', 'https://tinyurl.com/yxgxors6', 'https://tinyurl.com/y6c3qhen', 'https://tinyurl.com/y2txb37h', 'https://tinyurl.com/y3vm683s'],
        ['Grey Sage', 'https://tinyurl.com/y2w4pv52', 'https://tinyurl.com/y57rtmpz', 'https://tinyurl.com/yxwyuwbr', 'https://tinyurl.com/y2yahfyn', 'https://tinyurl.com/y3fs2hlf', 'https://tinyurl.com/y5olnwq2'],
        ['Rustic Clay', 'https://tinyurl.com/y55tq8ws', 'https://tinyurl.com/y4lkgbja', 'https://tinyurl.com/y47c3zj6', 'https://tinyurl.com/y48efmpd', 'https://tinyurl.com/y3feqsfx', 'https://tinyurl.com/y54saamm'],
        ['Stripe White Black', 'https://tinyurl.com/yy6az8py', 'https://tinyurl.com/y6gpsr7o', 'https://tinyurl.com/y6qjgy6r', 'https://tinyurl.com/y2ptwntp', 'https://tinyurl.com/y5dr9nm2', 'https://tinyurl.com/y6xp495k']
    ]
]

let bottomImages = [
    [/* Pants */
        ['Dark Olive', 'https://tinyurl.com/y2755vjx', 'https://tinyurl.com/y2x8v5g7', 'https://tinyurl.com/y6bd8vt3', 'https://tinyurl.com/yysr5jf6', 'https://tinyurl.com/y3s6jav4', 'https://tinyurl.com/y6hvmamp'],
        ['Dark Red', 'https://tinyurl.com/y489o5d6', 'https://tinyurl.com/y3bwe8xy', 'https://tinyurl.com/y69zycf8', 'https://tinyurl.com/y3hvjw5q', 'https://tinyurl.com/y226cn3l', 'https://tinyurl.com/yy9ml2kq'],
        ['Incognito Camo', 'https://tinyurl.com/y2newj56', 'https://tinyurl.com/y59dozn9', 'https://tinyurl.com/y5p23kew', 'https://tinyurl.com/y6xhguez', 'https://tinyurl.com/yyszz3cl', 'https://tinyurl.com/yyulhxxx'],
        ['Night Diver', 'https://tinyurl.com/yychqzah', 'https://tinyurl.com/y4guata2', 'https://tinyurl.com/y64k7v7q', 'https://tinyurl.com/y4n3jyh2', 'https://tinyurl.com/y5atna5j', 'https://tinyurl.com/y5h7cbpo'],
        ['Tempest Blue', 'https://tinyurl.com/y5f7v5mg', 'https://tinyurl.com/y4prp785', 'https://tinyurl.com/y4sknooa', 'https://tinyurl.com/y4gzcwe5', 'https://tinyurl.com/y56skwph', 'https://tinyurl.com/y62cdzpp'],
        ['Stride Emboss Black', 'https://tinyurl.com/y3nlcmos', 'https://tinyurl.com/yyj46oc3', 'https://tinyurl.com/yxaqpwsc', 'https://tinyurl.com/y4vl69n7', 'https://tinyurl.com/y577q6c6', 'https://tinyurl.com/yyu4cm6q']
    ],
    [/* Shorts */
        ['Black', 'https://tinyurl.com/yyreh8q8', 'https://tinyurl.com/y4qnnqzd', 'https://tinyurl.com/yxhtear4', 'https://tinyurl.com/y5cqe4eq', 'https://tinyurl.com/y2rwmqox', 'https://tinyurl.com/y4o8ht5e'],
        ['Heartthrob', 'https://tinyurl.com/y3wzak2g', 'https://tinyurl.com/y5p5uesq', 'https://tinyurl.com/y4thnwfd', 'https://tinyurl.com/y3tabykr', 'https://tinyurl.com/yxw5sp83', 'https://tinyurl.com/y6jjenqq'],
        ['Heather Lux', 'https://tinyurl.com/yyzkq3u3', 'https://tinyurl.com/y4owdmu8', 'https://tinyurl.com/y38fee78', 'https://tinyurl.com/y2afssrn', 'https://tinyurl.com/y5xwywyu', 'https://tinyurl.com/yyqvav2x'],
        ['Jet Stream', 'https://tinyurl.com/y2jf2zhs', 'https://tinyurl.com/y6ny23s6', 'https://tinyurl.com/yxzdrphy', 'https://tinyurl.com/yy9l4rpe', 'https://tinyurl.com/y3kn28qj', 'https://tinyurl.com/yxracuj3'],
        ['Marvel', 'https://tinyurl.com/y5r5zumq', 'https://tinyurl.com/yxb5x6d2', 'https://tinyurl.com/y5edn3vc', 'https://tinyurl.com/y2pfqbou', 'https://tinyurl.com/y3f3yo7g', 'https://tinyurl.com/y4zafkjf'],
        ['White', 'https://tinyurl.com/yxwnpkzf', 'https://tinyurl.com/yypbyvze', 'https://tinyurl.com/y4fnnb8h', 'https://tinyurl.com/y53xud2g', 'https://tinyurl.com/yyn4zbdv', 'https://tinyurl.com/y27ggqfj']
    ],
    [/* Skirts */
        ['Black', 'https://tinyurl.com/y3ta3ou2', 'https://tinyurl.com/y3oyqrg4', 'https://tinyurl.com/y5d4n55e', 'https://tinyurl.com/yxrrdkxe', 'https://tinyurl.com/yy92qdxz', 'https://tinyurl.com/y5eyp72f'],
        ['Cherry Cola', 'https://tinyurl.com/y4cteyer', 'https://tinyurl.com/y46fz7d6', 'https://tinyurl.com/y3kxkso6', 'https://tinyurl.com/yxl87nmk', 'https://tinyurl.com/y4a6ewmd', 'https://tinyurl.com/y2br6e63'],
        ['Frontier', 'https://tinyurl.com/yyvmv448', 'https://tinyurl.com/y52gzpzh', 'https://tinyurl.com/y55h8k86', 'https://tinyurl.com/y6kalfl8', 'https://tinyurl.com/y5ruezmh', 'https://tinyurl.com/y44z3mpp'],
        ['Grey Sage', 'https://tinyurl.com/y2d8novw', 'https://tinyurl.com/y5sgtgy6', 'https://tinyurl.com/yxdbkete', 'https://tinyurl.com/y25smj5k', 'https://tinyurl.com/y4lrdk6a', 'https://tinyurl.com/y32oz8yd'],
        ['Misty Merlot', 'https://tinyurl.com/yxhk6pp8', 'https://tinyurl.com/y5lo6dfh', 'https://tinyurl.com/y49t24rq', 'https://tinyurl.com/y4r8xjte', 'https://tinyurl.com/y3qfv3f8', 'https://tinyurl.com/yyy5ktdw'],
        ['Silverstone', 'https://tinyurl.com/yyvealyn', 'https://tinyurl.com/y3nkpkph', 'https://tinyurl.com/y599g4rv', 'https://tinyurl.com/yyb43j7o', 'https://tinyurl.com/y5pvewxq', 'https://tinyurl.com/yyz2wtvk']
    ]
]





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
        let copyArray = topImages[i].slice(0);
        for (var j = 0; j < 17; j++) {
            let secondCopy = copyArray.slice(0);
            let oneProduct = {};
            // Select product colors randomly
            let randomImagesArray = [];
            for (var x = 0; x < 3; x++) {
                let randomIndex = generateRandomIndex(secondCopy);
                randomImagesArray.push(secondCopy[randomIndex]);
                secondCopy.splice(randomIndex, 1);
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
        let copyArray = bottomImages[i].slice(0);
        for (var j = 0; j < 17; j++) {
            let secondCopy = copyArray.slice(0);
            let oneProduct = {};
            // Select product colors randomly
            let randomImagesArray = [];
            for (var x = 0; x < 3; x++) {
                let randomIndex = generateRandomIndex(secondCopy);
                randomImagesArray.push(secondCopy[randomIndex]);
                secondCopy.splice(randomIndex, 1);
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