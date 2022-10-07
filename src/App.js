import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
const [warehouse, setWarehouse] = useState([]);



const requestOptions = {
   method: 'POST'
}

function sortTable(index){
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById('warehouse');
   switching = true;
   while(switching){
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length-1); i++) {
         shouldSwitch = false;
         x = rows[i].getElementsByTagName('td')[index];
         y = rows[i+1].getElementsByTagName('td')[index];
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
            shouldSwitch = true;
            break;
         }  
      }
      if(shouldSwitch){
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
         switching = true;
      }
   }
}

function loadData(data){
   /*if table id warehouse exists, delete it*/
   if(document.getElementById('warehouse')){
      document.getElementById('warehouse').remove();
   }
   var content = "";
   setWarehouse(data);
   content += "<table id='warehouse'>"
   content += "<thead>"
   content += "<tr>"
   content += "<th>ID</th>"
   content += "<th>ProductId<button id='productid'>SORT</button></th>"
   content += "<th>Product</th>"
   content += "<th>Operation<button id='operation'>SORT</button></th>"
   content += "<th>Date</th>"
   content += "<th>Phone</th>"
   content += "<th>Count</th>"
   content += "<th>ShipmentId</th>"
   content += "<th>InvoiceId</th>"
   content += "<th>Recipient</th>"
   content += "<th>Address</th>"
   content += "</tr>"
   content += "</thead>"
   data.forEach(element =>
      {
         content += "<tr>";
         content += "<td>" + element._id + "</td>";
         content += "<td>" + element.ProductId + "</td>";
         content += "<td>" + element.Product + "</td>";
         content += "<td>" + element.Operation + "</td>";
         content += "<td>" + element.Date + "</td>";
         content += "<td>" + element.Phone + "</td>";
         content += "<td>" + element.Count + "</td>";
         content += "<td>" + element.ShipmentId + "</td>";
         content += "<td>" + element.InvoiceId + "</td>";
         content += "<td>" + element.Recipient + "</td>";
         content += "<td>" + element.Address + "</td>";
         content += "</tr>"
      }
      );
      content += "</table>"
      return content;
}
/*when document is ready, bind displaySummary function to id named get-summary*/
//document.addEventListener('DOMContentLoaded', function(){});
/**/
if(document.getElementById('get-summary')){
   document.getElementById('get-summary').onclick = function(){
      document.getElementById('main-page').innerHTML=displaySummary();
      document.getElementById('get-warehouse').className = "";
      document.getElementById('get-summary').className = "active";
   }
}
if(document.getElementById('get-warehouse')){
   document.getElementById('get-warehouse').onclick = function(){
      document.getElementById('main-page').innerHTML=loadData(warehouse);
      document.getElementById('get-summary').className = "";
      document.getElementById('get-warehouse').className = "active";
      document.getElementById('operation').onclick = function(){sortTable(3);}
      document.getElementById('productid').onclick = function(){sortTable(1);}
   }
}


function displaySummary(){
   
   console.log('clicked')
   /*If table id warehouse exists, remove it*/
   if(document.getElementById('warehouse')){
      document.getElementById('warehouse').remove();
   }
   var content = "";
   content += "<table id='warehouse'>"
   content += "<thead>"
   content += "<tr>"
   content += "<th>Date</th>"
   content += "<th>Product Name</th>"
   content += "<th>Product ID</th>"
   content += "<th>Quantity Received</th>"
   content += "<th>Quantity Shipped</th>"
   content += "<th>Quantity Returned</th>"
   content += "<th>Quantity On Hand</th>"
   content += "</tr>"
   content += "</thead>"
   var dict = {};
   warehouse.forEach(element =>
      {
         /*Count the number of operation for each product on the same date*/
         if(dict[element.Date] == undefined){
            //dict[element.Date] = {"ProductId": element.ProductId, "Quantity Received": element.Product, "Quantity Shipped": element.Operation, "Quantity Returned": element.Count};
            if(element.Operation == "Received"){
               dict[element.Date] = {"Product Name": element.Product, "ProductId": element.ProductId, "Quantity Received": element.Count, "Quantity Shipped": 0, "Quantity Returned": 0};
            }else if (element.Operation == "Shipped"){
               dict[element.Date] = {"Product Name": element.Product, "ProductId": element.ProductId, "Quantity Received": 0, "Quantity Shipped": element.Count, "Quantity Returned": 0};
            }else if (element.Operation == "Returned"){
               dict[element.Date] = {"Product Name": element.Product, "ProductId": element.ProductId, "Quantity Received": 0, "Quantity Shipped": 0, "Quantity Returned": element.Count};
            }
         }else{
            if(element.Operation == "Received"){
               dict[element.Date]["Quantity Received"] += element.Count;
            }else if (element.Operation == "Shipped"){
               dict[element.Date]["Quantity Shipped"] += element.Count;
            }else if (element.Operation == "Returned"){
               dict[element.Date]["Quantity Returned"] += element.Count;
            }
         }
      }
      );
      /*Loop through the dictionary and create HTML*/
      for (var key in dict) {
         if (dict.hasOwnProperty(key)) {
            /*a row display the key value*/
            content += "<tr>";
            content += "<td>" + key + "</td>";
            content += "</tr>";
            content += "<tr>";
            content += "<td>" + " " + "</td>";
            content += "<td>" + dict[key]["Product Name"] + "</td>";
            content += "<td>" + dict[key]["ProductId"] + "</td>";
            content += "<td>" + dict[key]["Quantity Received"] + "</td>";
            content += "<td>" + dict[key]["Quantity Shipped"] + "</td>";
            content += "<td>" + dict[key]["Quantity Returned"] + "</td>";
            content += "<td>" + (dict[key]["Quantity Received"] - dict[key]["Quantity Shipped"] - dict[key]["Quantity Returned"]) + "</td>";
            content += "</tr>"
         }
      }

      content += "</table>"
      return content;
      
}

const url = "https://cosmos-function-app.azurewebsites.net/api/get-list?code=eMsR2mRXKVx6TrRyQiWTmXkPICVjxtoL4Cc5QwW7eFJO26XdAScWdQ==&clientId=apim-basiccrudcs519API";
/*
fetch(url, requestOptions).then(
   response => response.json()
).then(data =>  {document.getElementById('main-page').innerHTML=loadData(data);
                  document.getElementById('operation').onclick = function(){sortTable(3);}
                  document.getElementById('productid').onclick = function(){sortTable(1);}
               }).catch(err => 
   console.log(err))
   */
//"ProductId" "Product" "Operation" "ShipmentId" "Date" "Count" "InvoiceId" "Recipient" "Address" "Phone"

/*Fetch only once with useEffect*/
useEffect(() => {
   fetch(url, requestOptions).then(
      response => response.json()
   ).then(data =>  {document.getElementById('main-page').innerHTML=loadData(data);
                  document.getElementById('operation').onclick = function(){sortTable(3);}
                  document.getElementById('productid').onclick = function(){sortTable(1);}
                  }).catch(err => 
      console.log(err))
}, []);

return (
<div>
<div className="topnav">
  <button className="active" id='get-warehouse' >Warehouse</button>
  <button id='get-summary'>Summary</button>
  <button >About</button>
</div>
<div id='main-page'>

</div>
</div>
);
}

export default App;
