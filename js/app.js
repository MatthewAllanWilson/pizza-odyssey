'use strict';

function collectPizzaInfo(event){

  event.preventDefault();

  var pizzaDataTable = document.getElementById('pizza-location-table');
  //console.log('Do the button clicks register?');

  var pizzaTime = event.target.pizzatime.value;
  //console.log('pizzatime', pizzaTime);

  var pizzaSales = parseInt(event.target.pizzasales.value);
  //console.log('pizzasales', pizzaSales);

  var pizzaDeliveries = parseInt(event.target.pizzadeliveries.value);
  //console.log('pizzadeliveries', pizzaDeliveries);

  var pizzaRow = document.createElement('tr');

  var timeColumn = document.createElement('td');
  timeColumn.textContent = pizzaTime;
  pizzaRow.appendChild(timeColumn);

  var salesColumn = document.createElement('td');
  salesColumn.textContent = pizzaSales;
  pizzaRow.appendChild(salesColumn);

  var deliveriesColumn = document.createElement('td');
  deliveriesColumn.textContent = pizzaDeliveries;
  pizzaRow.appendChild(deliveriesColumn);

  pizzaDataTable.appendChild(pizzaRow);

//Neec to return createTable();.

}

var createPizzaForm = document.getElementById('pizza-location-form');

createPizzaForm.addEventListener('submit', collectPizzaInfo);

//This is the one I will need to do for real.

// function collectNewPizzaInfo(event){
//
//   event.preventDefault();
//
//   var pizzaDataTable = document.getElementById('new-pizza-location-table');
//   //console.log('Do the button clicks register?');
//
//   var pizzaTime = event.target.newpizzatime.value;
//   //console.log('pizzatime', pizzaTime);
//
//   var minPizzaSales = parseInt(event.target.minpizzasales.value);
//   //console.log('pizzasales', pizzaSales);
//
//   var maxPizzaSales = parseInt(event.target.minpizzasales.value);
//   //console.log('pizzasales', pizzaSales);
//
//   var minPizzaDeliveries = parseInt(event.target.minpizzadeliveries.value);
//   //console.log('pizzadeliveries', pizzaDeliveries);
//
//   var pizzaRow = document.createElement('tr');
//
//   var timeColumn = document.createElement('td');
//   timeColumn.textContent = pizzaTime;
//   pizzaRow.appendChild(timeColumn);
//
//   var salesColumn = document.createElement('td');
//   salesColumn.textContent = minPizzaSales;//This will need to be calculated with random.
//   pizzaRow.appendChild(salesColumn);
//
//   var deliveriesColumn = document.createElement('td');
//   deliveriesColumn.textContent = minPizzaDeliveries;//This will need to be calculated with random
//   pizzaRow.appendChild(deliveriesColumn);
//
//   pizzaDataTable.appendChild(pizzaRow);
//
// //Neec to return createTable();.
//
// }
//
// var createPizzaForm = document.getElementById('new-pizza-location-form');
//
// createPizzaForm.addEventListener('submit', collectNewPizzaInfo);

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

var firstHill = new PizzaLocation('First-Hill');
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

var theInternationalDistrict = new PizzaLocation('The-International-District');
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

var southLakeUnion = new PizzaLocation('South-Lake-Union');
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
  var secondRow = genorateDataRow([name.hourlyData[0].time, name.hourlyData[0].pizzasSold, name.hourlyData[0].deliveriesMade]);
  var thirdRow = genorateDataRow([name.hourlyData[1].time, name.hourlyData[1].pizzasSold, name.hourlyData[1].deliveriesMade]);
  var fourthRow = genorateDataRow([name.hourlyData[2].time, name.hourlyData[2].pizzasSold, name.hourlyData[2].deliveriesMade]);
  var fifthRow = genorateDataRow([name.hourlyData[3].time, name.hourlyData[3].pizzasSold, name.hourlyData[3].deliveriesMade]);
  var sixthRow = genorateDataRow([name.hourlyData[4].time, name.hourlyData[4].pizzasSold, name.hourlyData[4].deliveriesMade]);
  var seventhRow = genorateDataRow([name.hourlyData[5].time, name.hourlyData[5].pizzasSold, name.hourlyData[5].deliveriesMade]);
  var eigthRow = genorateDataRow([name.hourlyData[6].time, name.hourlyData[6].pizzasSold, name.hourlyData[6].deliveriesMade]);
  var ninthRow = genorateDataRow([name.hourlyData[7].time, name.hourlyData[7].pizzasSold, name.hourlyData[7].deliveriesMade]);
  var tenthRow = genorateDataRow([name.hourlyData[8].time, name.hourlyData[8].pizzasSold, name.hourlyData[8].deliveriesMade]);
  var eleventhRow = genorateDataRow([name.hourlyData[9].time, name.hourlyData[9].pizzasSold, name.hourlyData[9].deliveriesMade]);
  var twelfthRow = genorateDataRow([name.hourlyData[10].time, name.hourlyData[10].pizzasSold, name.hourlyData[10].deliveriesMade]);
  var thirteenthRow = genorateDataRow([name.hourlyData[11].time, name.hourlyData[11].pizzasSold, name.hourlyData[11].deliveriesMade]);
  var fourteenthRow = genorateDataRow([name.hourlyData[12].time, name.hourlyData[12].pizzasSold, name.hourlyData[12].deliveriesMade]);
  var fifteenthRow = genorateDataRow([name.hourlyData[13].time, name.hourlyData[13].pizzasSold, name.hourlyData[13].deliveriesMade]);
  var sixteenthRow = genorateDataRow([name.hourlyData[14].time, name.hourlyData[14].pizzasSold, name.hourlyData[14].deliveriesMade]);
  var seventeenthRow = genorateDataRow([name.hourlyData[15].time, name.hourlyData[15].pizzasSold, name.hourlyData[15].deliveriesMade]);
  var eighteenthRow = genorateDataRow([name.hourlyData[16].time, name.hourlyData[16].pizzasSold, name.hourlyData[16].deliveriesMade]);
  var ninteenthRow = genorateDataRow([name.hourlyData[17].time, name.hourlyData[17].pizzasSold, name.hourlyData[17].deliveriesMade]);

  tagTable.appendChild(firstRow);
  tagTable.appendChild(secondRow);
  tagTable.appendChild(thirdRow);
  tagTable.appendChild(fourthRow);
  tagTable.appendChild(fifthRow);
  tagTable.appendChild(sixthRow);
  tagTable.appendChild(seventhRow);
  tagTable.appendChild(eigthRow);
  tagTable.appendChild(ninthRow);
  tagTable.appendChild(tenthRow);
  tagTable.appendChild(eleventhRow);
  tagTable.appendChild(twelfthRow);
  tagTable.appendChild(thirteenthRow);
  tagTable.appendChild(fourteenthRow);
  tagTable.appendChild(fifteenthRow);
  tagTable.appendChild(sixteenthRow);
  tagTable.appendChild(seventeenthRow);
  tagTable.appendChild(eighteenthRow);
  tagTable.appendChild(ninteenthRow);

  //document.getElementById('ballard').appendChild(tagTable);
}
//This is where I call the function for each location to create the actual tables.
createTable(ballard);
document.getElementById('ballard').appendChild(tagTable);
createTable(firstHill);
document.getElementById('firstHill').appendChild(tagTable);
createTable(theInternationalDistrict);
document.getElementById('theInternationalDistrict').appendChild(tagTable);
createTable(southLakeUnion);
document.getElementById('southLakeUnion').appendChild(tagTable);
createTable(georgetown);
document.getElementById('georgetown').appendChild(tagTable);
createTable(ravenna);
document.getElementById('ravenna').appendChild(tagTable);
