import './App.css';
import React, { useState} from 'react';


function App() {
const [warehouse, setWarehouse] = useState({});



const requestOptions = {
   method: 'POST'
}
const url = "https://basiccrudcs519api.azure-api.net/cosmos-function-app/get-list";
fetch(url, requestOptions).then(
   response => response.json()
).then(data =>console.log(data)).catch(err => 
   console.log(err))
//"ProductId" "Product" "Operation" "ShipmentId" "Date" "Count" "InvoiceId" "Recipient" "Address" "Phone"
return (
<div id='main-page'>
   
</div>

);
}
export default App;
