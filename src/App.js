import './App.css';
import React, { useState} from 'react';

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
   var content = "";
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
const url = "get-list url + api key";
fetch(url, requestOptions).then(
   response => response.json()
).then(data =>  {document.getElementById('main-page').innerHTML=loadData(data);
                  document.getElementById('operation').onclick = function(){sortTable(3);}
                  document.getElementById('productid').onclick = function(){sortTable(1);}
               }).catch(err => 
   console.log(err))
//"ProductId" "Product" "Operation" "ShipmentId" "Date" "Count" "InvoiceId" "Recipient" "Address" "Phone"

return (
<div id='main-page'>

</div>
);
}

export default App;
