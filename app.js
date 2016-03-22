
//To generate the random number for each set.

var timeArray = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM', '1:00 AM'];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var eightAM = {
  pizzasSold: getRandomIntInclusive(0,4),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '8:00 AM'
};

var nineAM = {
  pizzasSold: getRandomIntInclusive(0,4),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '9:00 AM'
};

var tenAM = {
  pizzasSold: getRandomIntInclusive(0,4),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '10:00 AM'
};

var elevenAM = {
  pizzasSold: getRandomIntInclusive(0,7),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '11:00 AM'
};

var twelvePM = {
  pizzasSold: getRandomIntInclusive(0,7),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '12:00 PM'
};

var onePM = {
  pizzasSold: getRandomIntInclusive(0,7),
  deliveriesMade: getRandomIntInclusive(0,4),
  time: '1:00 PM'
};

var twoPM = {
  pizzasSold: getRandomIntInclusive(2,15),
  deliveriesMade: getRandomIntInclusive(1,4),
  time: '2:00 PM'
};

var threePM = {
  pizzasSold: getRandomIntInclusive(2,15),
  deliveriesMade: getRandomIntInclusive(1,4),
  time: '3:00 PM'
};

var fourPM = {
  pizzasSold: getRandomIntInclusive(2,15),
  deliveriesMade: getRandomIntInclusive(1,4),
  time: '4:00 PM'
};

var fivePM = {
  pizzasSold: getRandomIntInclusive(15,35),
  deliveriesMade: getRandomIntInclusive(3,8),
  time: '5:00 PM'
};

var sixPM = {
  pizzasSold: getRandomIntInclusive(15,35),
  deliveriesMade: getRandomIntInclusive(3,8),
  time: '6:00 PM'
};

var sevenPM = {
  pizzasSold: getRandomIntInclusive(15,35),
  deliveriesMade: getRandomIntInclusive(3,8),
  time: '7:00 PM'
};

var eightPM = {
  pizzasSold: getRandomIntInclusive(12,31),
  deliveriesMade: getRandomIntInclusive(5,12),
  time: '8:00 PM'
};

var ninePM = {
  pizzasSold: getRandomIntInclusive(12,31),
  deliveriesMade: getRandomIntInclusive(5,12),
  time: '9:00 PM'
};

var tenPM = {
  pizzasSold: getRandomIntInclusive(12,31),
  deliveriesMade: getRandomIntInclusive(5,12),
  time: '10:00 PM'
};

var elevenPM = {
  pizzasSold: getRandomIntInclusive(5,20),
  deliveriesMade: getRandomIntInclusive(6,11),
  time: '11:00 PM'
};

var twelveAM = {
  pizzasSold: getRandomIntInclusive(5,20),
  deliveriesMade: getRandomIntInclusive(6,11),
  time: '12:00 AM'
};

var oneAM = {
  pizzasSold: getRandomIntInclusive(5,20),
  deliveriesMade: getRandomIntInclusive(6,11),
  time: '1:00 AM'
};



var ballard = {
  name: 'Ballard',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made.']
  ]
};

var pTagOne = document.getElementById('ballard-8am');
pTagOne.textContent = ballard.storeData[0];

var pTagTwo = document.getElementById('ballard-9am');
pTagTwo.textContent = ballard.storeData[1];

var pTagThree = document.getElementById('ballard-10am');
pTagThree.textContent = ballard.storeData[2];

var pTagFour = document.getElementById('ballard-11am');
pTagFour.textContent = ballard.storeData[3];

var pTagFive = document.getElementById('ballard-12pm');
pTagFive.textContent = ballard.storeData[4];

var pTagSix = document.getElementById('ballard-1pm');
pTagSix.textContent = ballard.storeData[5];

var pTagSeven = document.getElementById('ballard-2pm');
pTagSeven.textContent = ballard.storeData[6];

var pTagEight = document.getElementById('ballard-3pm');
pTagEight.textContent = ballard.storeData[7];

var pTagNine = document.getElementById('ballard-4pm');
pTagNine.textContent = ballard.storeData[8];

var pTagTen = document.getElementById('ballard-5pm');
pTagTen.textContent = ballard.storeData[9];

var pTagEleven = document.getElementById('ballard-6pm');
pTagEleven.textContent = ballard.storeData[10];

var pTagTwelve = document.getElementById('ballard-7pm');
pTagTwelve.textContent = ballard.storeData[11];

var pTagThirteen = document.getElementById('ballard-8pm');
pTagThirteen.textContent = ballard.storeData[12];

var pTagFourteen = document.getElementById('ballard-9pm');
pTagFourteen.textContent = ballard.storeData[13];

var pTagFifteen = document.getElementById('ballard-10pm');
pTagFifteen.textContent = ballard.storeData[14];

var pTagSixteen = document.getElementById('ballard-11pm');
pTagSixteen.textContent = ballard.storeData[15];

var pTagSeventeen = document.getElementById('ballard-12am');
pTagSeventeen.textContent = ballard.storeData[16];

var pTagEighteen = document.getElementById('ballard-1am');
pTagEighteen.textContent = ballard.storeData[17];














//var pizzasPerHour = [];
//var deliveriesPerHour = [];
//var hoursArray = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM', '1:00 AM'];
