// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((sighting) => {

    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
  

var date_submit = d3.select("#filter-btn-date");
var city_submit = d3.select("#filter-btn-city");
var state_submit = d3.select("#filter-btn-state");
var country_submit = d3.select("#filter-btn-country");
var shape_submit = d3.select("#filter-btn-shape");

date_submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputForm1 = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue1 = inputForm1.property("value");
 
    var filteredDate = tableData.filter(datum => datum.datetime === inputValue1);

    tbody.text("");

    filteredDate.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
      
city_submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputForm2 = d3.select("#city");

    // Get the value property of the input element
    var inputValue2 = inputForm2.property("value");

    var filteredCity = tableData.filter(datum => datum.city === inputValue2);

    tbody.text("");

    filteredCity.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

state_submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputForm3 = d3.select("#state");

    // Get the value property of the input element
    var inputValue3 = inputForm3.property("value");

    var filteredState = tableData.filter(datum => datum.state === inputValue3);

    tbody.text("");

    filteredState.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

country_submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputForm4 = d3.select("#country");

    // Get the value property of the input element
    var inputValue4 = inputForm4.property("value");

    var filteredCountry = tableData.filter(datum => datum.country === inputValue4);

    tbody.text("");

    filteredCountry.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

shape_submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputForm5 = d3.select("#shape");

    // Get the value property of the input element
    var inputValue5 = inputForm5.property("value");

    var filteredShape = tableData.filter(datum => datum.shape === inputValue5);

    tbody.text("");

    filteredShape.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
