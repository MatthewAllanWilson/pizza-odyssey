//To generate the random number for each set.

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStore(name) {

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

  var thisStoreInfo = {
    name: name,
    storeData: [
    [eightAM.time, eightAM.pizzasSold + ' pizzas sold', eightAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(eightAM.deliveriesMade / 3) + '.'],
    [nineAM.time, nineAM.pizzasSold + ' pizzas sold', nineAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(nineAM.deliveriesMade / 3) + '.'],
    [tenAM.time, tenAM.pizzasSold + ' pizzas sold', tenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(tenAM.deliveriesMade / 3) + '.'],
    [elevenAM.time, elevenAM.pizzasSold + ' pizzas sold', elevenAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(elevenAM.deliveriesMade / 3) + '.'],
    [twelvePM.time, twelvePM.pizzasSold + ' pizzas sold', twelvePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(twelvePM.deliveriesMade / 3) + '.'],
    [onePM.time, onePM.pizzasSold + ' pizzas sold', onePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(onePM.deliveriesMade / 3) + '.'],
    [twoPM.time, twoPM.pizzasSold + ' pizzas sold', twoPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(twoPM.deliveriesMade / 3) + '.'],
    [threePM.time, threePM.pizzasSold + ' pizzas sold', threePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(threePM.deliveriesMade / 3) + '.'],
    [fourPM.time, fourPM.pizzasSold + ' pizzas sold', fourPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(fourPM.deliveriesMade / 3) + '.'],
    [fivePM.time, fivePM.pizzasSold + ' pizzas sold', fivePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(fivePM.deliveriesMade / 3) + '.'],
    [sixPM.time, sixPM.pizzasSold + ' pizzas sold', sixPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(sixPM.deliveriesMade / 3) + '.'],
    [sevenPM.time, sevenPM.pizzasSold + ' pizzas sold', sevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(sevenPM.deliveriesMade / 3) + '.'],
    [eightPM.time, eightPM.pizzasSold + ' pizzas sold', eightPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(eightPM.deliveriesMade / 3) + '.'],
    [ninePM.time, ninePM.pizzasSold + ' pizzas sold', ninePM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(ninePM.deliveriesMade / 3) + '.'],
    [tenPM.time, tenPM.pizzasSold + ' pizzas sold', tenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(tenPM.deliveriesMade / 3) + '.'],
    [elevenPM.time, elevenPM.pizzasSold + ' pizzas sold', elevenPM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(elevenPM.deliveriesMade / 3) + '.'],
    [twelveAM.time, twelveAM.pizzasSold + ' pizzas sold', twelveAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(twelveAM.deliveriesMade / 3) + '.'],
    [oneAM.time, oneAM.pizzasSold + ' pizzas sold', oneAM.deliveriesMade + ' deliveries made. Recommended number of drivers is ' + Math.ceil(oneAM.deliveriesMade / 3) + '.']
    ]
  };

  var ballardUL = document.getElementById(thisStoreInfo.name);
  var ballardLI;
  for (var i = 0; i < thisStoreInfo.storeData.length; i++) {
    ballardLI = document.createElement('li');
    ballardLI.textContent = thisStoreInfo.storeData[i];
    ballardUL.appendChild(ballardLI);
  };
}

createStore('Ballard');
createStore('First Hill');
createStore('The International District');
createStore('South Lake Union');
createStore('Georgetown');
createStore('Ravena');
