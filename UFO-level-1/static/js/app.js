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

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")

// Create function to filter through specific data items
function select(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    //display input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(event => event.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", select)

displayData(tableData)



