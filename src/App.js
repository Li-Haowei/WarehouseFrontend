import './App.css';
import React, { useState} from 'react';


function App() {
const [warehouse, setWarehouse] = useState([]);



const requestOptions = {
   method: 'POST'
}
const url = "https://basiccrudcs519api.azure-api.net/cosmos-function-app/get-list";
fetch(url, requestOptions).then(
   response => response.json()
).then(data =>createTable(data)).catch(err => 
   console.log(err))
//"ProductId" "Product" "Operation" "ShipmentId" "Date" "Count" "InvoiceId" "Recipient" "Address" "Phone"
function createTable(data){
   console.log(data)
   setWarehouse(data);
   var content = "";
   warehouse.forEach(element => {
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
      count += "</tr>"

   });
   //document.getElementById('warehouse-table-body').innerHTML = content;
}
return (
<div id='main-page'>
   {JSON.stringify(warehouse) !== '[]'?
   <>
   </>
   :
   <>
   <p>Loading Data</p>
   </>
   }
</div>

);
}
export default App;
