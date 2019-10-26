// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// Use Object.entries to get key, value pair in the table
// Then loop through to add to the table
function displayData(data){ 
    tbody.text("")
    data.forEach(function(event){
    new_tr = tbody.append("tr")
    Object.entries(event).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var cityInputText = d3.select("#city")
var stateInputText = d3.select("#state")
var countryInputText = d3.select("#country")
var shapeInputText = d3.select("#shape")
var button = d3.select("filter-btn")

// Create function to filter through specific data items
function select1(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// Create function to filter through specific data items
function select2(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(cityInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.city===cityInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// Create function to filter through specific data items
function select3(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(stateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.state===stateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// Create function to filter through specific data items
function select4(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(countryInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.country===countryInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// Create function to filter through specific data items
function select5(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(shapeInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.shape===shapeInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", select1)
cityInputText.on("change", select2)
stateInputText.on("change", select3)
countryInputText.on("change", select4)
shapeInputText.on("change", select5)