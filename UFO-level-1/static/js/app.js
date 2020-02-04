// from data.js
var tableData = data;

var tbody = d3.select("tbody");
//Using the UFO dataset provided in the form of an array of JavaScript
// objects, write code that appends a table to your web page and then adds
// new rows of data for each UFO sighting.
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// //Use a date form in your HTML document and write JavaScript code that 
// //will listen for events and search through the date/time column to find
// // rows that match user input.
var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");
  var inputElement = d3.select("#datetime"); 
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
  console.log(filteredData);


  filteredData.forEach((ufoSelect) => {
    var row = tbody.append("tr");
    Object.entries(ufoSelect).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
});
