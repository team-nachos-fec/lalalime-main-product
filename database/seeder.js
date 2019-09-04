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
        ['Black', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/colorimg.jpeg', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/1.jpeg', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/2.jpeg', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/3.jpeg', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/4.jpeg', 'https://lalalime-s3-bucket.s3-us-west-1.amazonaws.com/dresses/Get+Going/Black/5.jpeg'],
        ['Moonwalk', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/colorimg.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/1.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/2.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/3.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/4.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Moonwalk/5.jpeg'],
        ['Red Dust', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/colorimg.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/1.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/2.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/3.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/4.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Red Dust/5.jpeg'],
        ['Riverstone', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/colorimg.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/1.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/2.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/3.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/4.jpeg', 's3://lalalime-s3-bucket/dresses/Get Going/Riverstone/5.jpeg']
    ],
    [
        ['Black', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Black/5.jpeg'],
        ['Heathered Moonwalk', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Moonwalk/5.jpeg'],
        ['Heathered Muse', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Muse/5.jpeg'],
        ['Heathered Plumful', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Heathered Plumful/5.jpeg'],
        ['Landscape Green', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Landscape Green/5.jpeg'],
        ['Ultra Light Grey', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/colorimg.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/1.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/2.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/3.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/4.jpeg', 's3://lalalime-s3-bucket/sweaters/Forward Flow Poncho/Ultra Light Grey/5.jpeg']
    ],
    [
        ['Alpine White', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Alpine White/5.jpeg'],
        ['Black', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Black/5.jpeg'],
        ['Frosted Mulberry', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Frosted Mulberry/5.jpeg'],
        ['Grey Sage', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Grey Sage/5.jpeg'],
        ['Rustic Clay', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Rustic Clay/5.jpeg'],
        ['Stripe White Black', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/colorimg.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/1.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/2.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/3.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/4.jpeg', 's3://lalalime-s3-bucket/tanktops/Love Tank Pleated/Stripe White Black/5.jpeg']
    ]
]

let bottomImages = [
    [/* Pants */
        ['Dark Olive', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Olive/5.jpeg'],
        ['Dark Red', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Dark Red/5.jpeg'],
        ['Incognito Camo', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Incognito Camo Multi Grey/5.jpeg'],
        ['Night Diver', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Night Diver/5.jpeg'],
        ['Tempest Blue', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Tempest Blue/5.jpeg'],
        ['Stride Emboss Black', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/colorimg.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/1.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/2.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/3.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/4.jpeg', 's3://lalalime-s3-bucket/pants/Align Pant 28"/Stride Emboss Black/5.jpeg']
    ],
    [/* Shorts */
        ['Black', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Black/5.jpeg'],
        ['Heartthrob', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heartthrob/5.jpeg'],
        ['Heather Lux', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Heather Lux/5.jpeg'],
        ['Jet Stream', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Jet Stream/5.jpeg'],
        ['Marvel', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/Marvel/5.jpeg'],
        ['White', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/colorimg.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/1.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/2.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/3.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/4.jpeg', 's3://lalalime-s3-bucket/shorts/HH Short 2 Long 4"/White/5.jpeg']
    ],
    [/* Skirts */
        ['Black', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Black/5.jpeg'],
        ['Cherry Cola', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Cherry Cola/5.jpeg'],
        ['Frontier', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Frontier/5.jpeg'],
        ['Grey Sage', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Grey Sage/5.jpeg'],
        ['Misty Merlot', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Misty Merlot/5.jpeg'],
        ['Silverstone', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/colorimg.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/1.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/2.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/3.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/4.jpeg', 's3://lalalime-s3-bucket/skirts/On The Fly 2 Skirt/Silverstone/5.jpeg']
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