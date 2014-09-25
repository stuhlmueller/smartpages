var withUniqueIdentifier = function(url){
    return url + "?" + Math.random();
}

var linkData = [
    { url: withUniqueIdentifier("http://www.buzzfeed.com/kaylayandoli/when-youre-here-youre-horrified"),
      title: "14 Restaurant Horror Stories That'll Make You Want To Order Takeout",
      score: 0,
      id: 0 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/abefg/we-turned-a-bunch-of-weird-snacks-into-ice-cream-flavors"),
      title: "We Turned A Bunch Of Weird Snacks Into Ice Cream Flavors",
      score: 0,
      id: 1 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/chelseamarshall/things-that-mean-something-different-when-you-have-a-cat"),
      title: "21 Words That Mean Something Different When You Have A Cat",
      score: 0,
      id: 2 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/samimain/dog-uses-sunroof-experiences-nirvana"),
      title: "Dog Uses Sunroof, Experiences Nirvana",
      score: 0,
      id: 3 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/samstryker/hoggy-hoggy-hogwarts-tell-us-secrets"),
      title: "27 Secrets Hogwarts Students Won't Tell You",
      score: 0,
      id: 4 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/kristinchirico/facts-that-will-change-the-way-you-look-at-pigs"),
      title: "14 Facts That Will Change The Way You Look At Pigs",
      score: 0,
      id: 5 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/candacelowry/things-that-would-only-happen-in-germany"),
      title: "28 Of The Most German Things To Ever Happen",
      score: 0,
      id: 6 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/nickkubinski/5-purrrfect-cat-hacks"),
      title: "5 Purrrfect Cat Hacks",
      score: 0,
      id: 7 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/zachkornfeld/13-awkward-moments-only-harry-potter-fans-will-understand"),
      title: "13 Awkward Moments Only Harry Potter Fans Will Understand",
      score: 0,
      id: 8 },
    { url: withUniqueIdentifier("http://www.buzzfeed.com/norbertobriceno/bacon-sucks-yo"),
      title: "Hey Bacon, You Suck And Sausages Are Better",
      score: 0,
      id: 9 }
];

var numLinks = linkData.length;      
var numUserTypes = 3;  // Number of distinct user prototypes

// IDs of links clicked for each previous user
var pastUsers = [
    [0, 1, 9, 1, 1],   // food
    [0, 1, 9, 1, 9],   // food
    [2, 3, 5, 7, 5, 7, 3, 2],   // animals
    [4, 8, 4, 8, 4, 8],  // harry potter
    [6, 9, 6, 9, 6]  // german, sausages
];

// IDs of links clicked by current user
var currentUser = [];
