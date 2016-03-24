'use strict';

function collectNewPizzaInfo(event){

  event.preventDefault();

  var pizzaDataTable = document.getElementById('new-pizza-location-table');
  //console.log('Do the button clicks register?');

  var pizzaStoreNewName = event.target.newpizzastorename.value;

  var pizzaTime = event.target.newpizzatime.value;
  //console.log('pizzatime', pizzaTime);

  var minPizzaSales = parseInt(event.target.minpizzasales.value);
  //console.log('pizzasales', pizzaSales);

  var maxPizzaSales = parseInt(event.target.minpizzasales.value);
  //console.log('pizzasales', pizzaSales);

  var minPizzaDeliveries = parseInt(event.target.minpizzadeliveries.value);
  //console.log('pizzadeliveries', pizzaDeliveries);

  var maxPizzaDeliveries = parseInt(event.target.maxpizzadeliveries.value);

  var storeObject = new PizzaLocation(pizzaStoreNewName);
  storeObject.pushHourlyData(new HourlyData(pizzaTime, minPizzaSales, maxPizzaSales, minPizzaDeliveries, maxPizzaDeliveries));

  createTable(storeObject);

}

var createPizzaForm = document.getElementById('new-pizza-location-form');

createPizzaForm.addEventListener('submit', collectNewPizzaInfo);

// Random math function to generate the random numbers.
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creating an object constructor which is marked by the first letter being capititalized (PizzaLocation instead of pizzaLocation).
function PizzaLocation(name){
  this.name = name;
  this.hourlyData = [];
}

//This and the HourlyData object constructor work together to push data into an array that will eventually populate for each location.
PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

// Making a new PizzaLocation for each store.  Passing in the min/max values from the chart provided in the instructions.
var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 AM', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 AM', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 AM', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 AM', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('12:00 PM', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('1:00 PM', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('2:00 PM', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 PM', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 PM', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 PM', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 PM', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 PM', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 PM', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 PM', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 PM', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 PM', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12:00 AM', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 AM', 8, 15, 6, 16));

var firstHill = new PizzaLocation('firstHill');
firstHill.pushHourlyData(new HourlyData('8:00 AM', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00 AM', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00 AM', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00 AM', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('12:00 PM', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00 PM', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00 PM', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00 PM', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00 PM', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00 PM', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00 PM', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00 PM', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00 PM', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00 PM', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00 PM', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00 PM', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('12:00 AM', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00 AM', 8, 20, 6, 16));

var theInternationalDistrict = new PizzaLocation('theInternationalDistrict');
theInternationalDistrict.pushHourlyData(new HourlyData('8:00 AM', 0, 4, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('9:00 AM', 0, 4, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('10:00 AM', 0, 4, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('11:00 AM', 0, 7, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('12:00 PM', 0, 7, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('1:00 PM', 0, 7, 0, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('2:00 PM', 2, 15, 1, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('3:00 PM', 2, 15, 1, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('4:00 PM', 2, 15, 1, 4));
theInternationalDistrict.pushHourlyData(new HourlyData('5:00 PM', 10, 26, 4, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('6:00 PM', 10, 26, 4, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('7:00 PM', 10, 26, 4, 6));
theInternationalDistrict.pushHourlyData(new HourlyData('8:00 PM', 8, 22, 7, 15));
theInternationalDistrict.pushHourlyData(new HourlyData('9:00 PM', 8, 22, 7, 15));
theInternationalDistrict.pushHourlyData(new HourlyData('10:00 PM', 8, 22, 7, 15));
theInternationalDistrict.pushHourlyData(new HourlyData('11:00 PM', 0, 2, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyData('12:00 AM', 0, 2, 2, 8));
theInternationalDistrict.pushHourlyData(new HourlyData('1:00 AM', 0, 2, 2, 8));

var southLakeUnion = new PizzaLocation('southLakeUnion');
southLakeUnion.pushHourlyData(new HourlyData('8:00 AM', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('9:00 AM', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('10:00 AM', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('11:00 AM', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('12:00 PM', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('1:00 PM', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('2:00 PM', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('3:00 PM', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('4:00 PM', 5, 15, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('5:00 PM', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('6:00 PM', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('7:00 PM', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('8:00 PM', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('9:00 PM', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('10:00 PM', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('11:00 PM', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('12:00 AM', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00 AM', 5, 21, 16, 31));

var georgetown = new PizzaLocation('georgetown');
georgetown.pushHourlyData(new HourlyData('8:00 AM', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00 AM', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00 AM', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00 AM', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12:00 PM', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00 PM', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00 PM', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00 PM', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00 PM', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00 PM', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('6:00 PM', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('7:00 PM', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('8:00 PM', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('9:00 PM', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('10:00 PM', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('11:00 PM', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('12:00 AM', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('1:00 AM', 15, 20, 6, 21));

var ravenna = new PizzaLocation('ravenna');
ravenna.pushHourlyData(new HourlyData('8:00 AM', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00 AM', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00 AM', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00 AM', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12:00 PM', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00 PM', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00 PM', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00 PM', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00 PM', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00 PM', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00 PM', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00 PM', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00 PM', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00 PM', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00 PM', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00 PM', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12:00 AM', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 AM', 2, 4, 3, 11));

// this function creates a row for the table that will receive the data from the array.
function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

// This function just creates a head row for each table.
function genorateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}
//To create a header for each table.
function generateAHeader(name){
  var header = document.createElement('h1');
  header.textContent = name;

}

// This variable and function adds all the data into the table.  Since it is a function, I can do it over and over again.  I will want to do it for each location.
var tagTable = document.createElement('table');

function createTable (name) {

  generateAHeader(name);
  var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made']);
  tagTable.appendChild(firstRow);

  for (var i = 0; i < name.hourlyData.length; i++) {
    var theRow = genorateDataRow([name.hourlyData[i].time, name.hourlyData[i].pizzasSold, name.hourlyData[i].deliveriesMade]);
    tagTable.appendChild(theRow); }
}

//This is where I call the function for each location to create the actual tables.
createTable(ballard);
//document.getElementById('ballard').appendChild(tagTable);
createTable(firstHill);
//document.getElementById('firstHill').appendChild(tagTable);
createTable(theInternationalDistrict);
//document.getElementById('theInternationalDistrict').appendChild(tagTable);
createTable(southLakeUnion);
//document.getElementById('southLakeUnion').appendChild(tagTable);
createTable(georgetown);
//document.getElementById('georgetown').appendChild(tagTable);
createTable(ravenna);
document.getElementById('ravenna').appendChild(tagTable);
