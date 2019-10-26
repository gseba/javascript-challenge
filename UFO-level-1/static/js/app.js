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

