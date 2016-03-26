'use strict';

function addToExistingTable(location) {
  for (var i = 0; i < location.hourlyData.length; i++) {
    var theRow = genorateDataRow([location.hourlyData[i].time, location.hourlyData[i].pizzasSold, location.hourlyData[i].deliveriesMade]);
    document.getElementById(location.name).appendChild(theRow); }
}

function collectNewPizzaInfo(event){

  event.preventDefault();

  var pizzaStoreNewName = event.target.newpizzastorename.value;
  var pizzaTime = event.target.newpizzatime.value;
  var minPizzaSales = parseInt(event.target.minpizzasales.value);
  var maxPizzaSales = parseInt(event.target.minpizzasales.value);
  var minPizzaDeliveries = parseInt(event.target.minpizzadeliveries.value);
  var maxPizzaDeliveries = parseInt(event.target.maxpizzadeliveries.value);

  var storeObject = new PizzaLocation(pizzaStoreNewName);
  storeObject.pushHourlyData(new HourlyData(pizzaTime, minPizzaSales, maxPizzaSales, minPizzaDeliveries, maxPizzaDeliveries));

  if (document.getElementById(pizzaStoreNewName)) {
    addToExistingTable(storeObject);
  } else {
    renderStoreToPage(storeObject);
  }
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
var ballard = new PizzaLocation('Ballard');
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

var firstHill = new PizzaLocation('First Hill');
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

var theInternationalDistrict = new PizzaLocation('The International District');
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

var southLakeUnion = new PizzaLocation('South Lake Union');
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

var georgetown = new PizzaLocation('Georgetown');
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

var ravenna = new PizzaLocation('Ravenna');
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

// This variable and function adds all the data into the table.  Since it is a function, I can do it over and over again.  I will want to do it for each location.
function createTable (location) {
  var tagTable = document.createElement('table');
  tagTable.setAttribute('id', location.name);
  var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made']);
  tagTable.appendChild(firstRow);

  for (var i = 0; i < location.hourlyData.length; i++) {
    var theRow = genorateDataRow([location.hourlyData[i].time, location.hourlyData[i].pizzasSold, location.hourlyData[i].deliveriesMade]);
    tagTable.appendChild(theRow);
  }

  return tagTable;
}

function createHeader (location) {
  var locationHeading = document.createElement('h1');
  locationHeading.textContent = location.name;
  return locationHeading;
}

function renderStoreToPage (location){
  var locationHeading = createHeader(location);
  var locationTable = createTable(location);
  document.getElementById('all-store-data').appendChild(locationHeading);
  document.getElementById('all-store-data').appendChild(locationTable);
}

//This is where I call the function for each location to create the actual tables.
renderStoreToPage(ballard);
renderStoreToPage(firstHill);
renderStoreToPage(theInternationalDistrict);
renderStoreToPage(southLakeUnion);
renderStoreToPage(georgetown);
renderStoreToPage(ravenna);
