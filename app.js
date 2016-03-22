
//To generate the random number for each set.

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creating a variable for each hour with the provided random number parameters.
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

//Sample code from Duncan

// function addHourlySalesDataToLocation(storeLocation, pizzaSold, deliveryMade) {
//   storeLocation.hourlyData.push( {
//     time: time,
//     pizzaSold: pizzaSold,
//     deliveryMade: deliveryMade,
//     driversNeeded: Math.ceil(deliveryMade / 3)
//   } );
// }

//addHourlySalesDataToLocation(firstHill, '8:00am', getRandomIntInclusive(0,4));

// var firstHill = {
//   name: 'First Hill',
//   hourlyData: [
//     {
//       time: '8:00am',
//       pizzaSold: getRandomIntInclusive(0,4),
//       deliveryMade: getRandomIntInclusive(0,4),
//       //driversNeeded: Math.ceil()
//     },
//
//   ]
// };


// var firstHillUL = document.getElementById('First-Hill');
// var eightOClockLI;
// for (var i = 0; i < firstHill.hourlyData.length; i++) {
//   eightOClockLI = document.createElement('li');
//   eightOClockLI.textContent = firstHillUL.hourlyData[0].time + ' pizzas sold: ' + firstHill.hourlyData[0].pizzaSold;
//   firstHillUL.appendChild(eightOClockLI);
// };

//Creating the objects for each store.
var ballard = {
  name: 'Ballard',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

var firstHill = {
  name: 'First Hill',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

var theInternationalDistrict = {
  name: 'The International District',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

var southLakeUnion = {
  name: 'South Lake Union',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

var georgetown = {
  name: 'Georgetown',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

var ravena = {
  name: 'Ravena',
  storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + (oneAM.deliveriesMade / 3) + '.']
  ]
};

//Creating the tags to list on the webpage.

var ballardUL = document.getElementById(ballard.name);
var ballardLI;
for (var i = 0; i < ballard.storeData.length; i++) {
  ballardLI = document.createElement('li');
  ballardLI.textContent = ballard.storeData[i];
  ballardUL.appendChild(ballardLI);
};

var firstHillUL = document.getElementById(firstHill.name);
var firstHillLI;
for (var i = 0; i < firstHill.storeData.length; i++) {
  firstHillLI = document.createElement('li');
  firstHillLI.textContent = firstHill.storeData[i];
  firstHillUL.appendChild(firstHillLI);
};

var theInternationalDistrictUL = document.getElementById(theInternationalDistrict.name);
var theInternationalDistrictLI;
for (var i = 0; i < theInternationalDistrict.storeData.length; i++) {
  theInternationalDistrictLI = document.createElement('li');
  theInternationalDistrictLI.textContent = theInternationalDistrict.storeData[i];
  theInternationalDistrictUL.appendChild(theInternationalDistrictLI);
};

var southLakeUnionUL = document.getElementById(southLakeUnion.name);
var southLakeUnionLI;
for (var i = 0; i < southLakeUnion.storeData.length; i++) {
  southLakeUnionLI = document.createElement('li');
  southLakeUnionLI.textContent = southLakeUnion.storeData[i];
  southLakeUnionUL.appendChild(southLakeUnionLI);
};

var georgetownUL = document.getElementById(georgetown.name);
var georgetownLI;
for (var i = 0; i < georgetown.storeData.length; i++) {
  georgetownLI = document.createElement('li');
  georgetownLI.textContent = georgetown.storeData[i];
  georgetownUL.appendChild(georgetownLI);
};

var ravenaUL = document.getElementById(ravena.name);
var ravenaLI;
for (var i = 0; i < ravena.storeData.length; i++) {
  ravenaLI = document.createElement('li');
  ravenaLI.textContent = ravena.storeData[i];
  ravenaUL.appendChild(ravenaLI);
};
