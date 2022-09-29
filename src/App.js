import './App.css';
import React, { useState, useEffect } from 'react';
const CreateOrder = "https:&emsp;&emsp;//basiccrudcs519.azurewebsites.net/api/CreateOrder?";
function App() {
const [ProductId, setProductId] = useState('');
const [Product, setProduct] = useState('');
const [Operation, setOperation] = useState('');
const [Date, setDate] = useState('');
const [Count, setCount] = useState('');
const [InvoiceId, setInvoiceId] = useState('');
const [ShipmentId, setShipmentId] = useState('');
const [Recipient, setRecipient] = useState('');
const [Address, setAddress] = useState('');
const [Phone, setPhone] = useState('');


const handleProductIdChange = event => {
setProductId(event.target.value);
};
const handleOperationChange = event => {
setOperation(event.target.value);
};
const handleProductChange = event => {
setProduct(event.target.value);
};
const handleDateChange = event => {
setDate(event.target.value);
};
const handleCountChange = event => {
setCount(event.target.value);
};
const handleInvoiceIdChange = event => {
setInvoiceId(event.target.value);
};
const handleShipmentIdChange = event => {
setShipmentId(event.target.value);
};
const handleRecipientChange = event => {
setRecipient(event.target.value);
};
const handleAddressChange = event => {
setAddress(event.target.value);
};
const handlePhoneChange = event => {
setPhone(event.target.value);
};

const submitOrder = (event) => {
  const subscriptionKey = "c86fdcdd30ef4f88b02679d30370c715";
  const jsonData = {
      "ProductId": ProductId, 
      "Product": Product, 
      "Operation": Operation, 
      "ShipmentId": ShipmentId, 
      "Date": Date, 
      "Count": parseInt(Count), 
      "InvoiceId": InvoiceId, 
      "Recipient":Recipient, 
      "Address":Address, 
      "Phone":Phone
    }
  
  const requestOptions = {
      method: 'POST',
      //Host: "basiccrudcs519api.azure-api.net",
      //headers: {"Ocp-Apim-Subscription-Key":subscriptionKey},
      body: JSON.stringify(jsonData)
  };
  
  
   const url = "https://basiccrudcs519api.azure-api.net/basicCRUDcs519/CreateOrder";
   fetch(url, requestOptions).then(
    response => response.json()
   ).then(data => console.log(data)).catch(
    function(error) {
    console.log(error);
    });
};
//use list of options to disable unneeded input fields
const options = ["Shipped", "Received", "Returned"];
const ifShipped = ["ShipmentId"];
const ifReceived = ["Phone", "Address", "InvoiceId", "Recipient"];
const ifReturned = ["Phone", "Address", "ShipmentId", "Recipient"];
const optionClick = (event) => {
   setOperation(event.target.id);
   options.forEach(item => {
      if(item!=Operation){
         document.getElementById(item).checked = false;
      }
   });
   switch(Operation){
      case "Shipped":
         ifShipped.forEach(item=> {
            document.getElementById(item).value = "";
            document.getElementById(item).disabled = true;
         });
         break;
      case "Received":
         ifReceived.forEach(item=> {
            document.getElementById(item).value = "";
            document.getElementById(item).disabled = true;
         });
         break
      case "Returned":
         ifReturned.forEach(item=> {
            document.getElementById(item).value = "";
            document.getElementById(item).disabled = true;
         });
         break
      default:
   }
}
//"ProductId" "Product" "Operation" "ShipmentId" "Date" "Count" "InvoiceId" "Recipient" "Address" "Phone"
return (
<div id='main-page'>
   <h1>
      This is the warehouse:
   </h1>
   Your operation is: 
   <div id="multipleOptions">
      <input type="radio" id="Shipped" value="Red" onChange={optionClick}/>Shipped
      <input type="radio" id="Received" value="Blue" onChange={optionClick}/>Received
      <input type="radio" id="Returned" value="Yellow" onChange={optionClick}/>Returned
   </div>
   <table>
      <thead>
         <tr>
            <th>Category</th>
            <th>Value</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>ProductId</td>
            <td><input
               type="text"
               id="ProductId"
               name="message"
               onChange={handleProductIdChange}
               value={ProductId}
               /></td>
         </tr>
         <tr>
            <td>Product</td>
            <td><input
               type="text"
               id="Product"
               name="message"
               onChange={handleProductChange}
               value={Product}
               /></td>
         </tr>
         <tr>
            <td>Operation</td>
            <td><input
               type="text"
               id="Operation"
               name="message"
               onChange={handleOperationChange}
               value={Operation}
               list = "defaultOperations"
               /></td>
         </tr>
         <tr>
            <td>Date</td>
            <td><input
               type="date"
               id="Date"
               name="message"
               onChange={handleDateChange}
               value={Date}
               /></td>
         </tr>
         <tr>
            <td>Phone</td>
            <td><input
               type="tel"
               id="Phone"
               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
               name="message"
               onChange={handlePhoneChange}
               value={Phone}
               /></td>
         </tr>
         <tr>
            <td>Count</td>
            <td><input
               type="number"
               id="Count"
               name="message"
               onChange={handleCountChange}
               value={Count}
               /></td>
         </tr>
         <tr>
            <td>ShipmentId</td>
            <td><input
               type="text"
               id="ShipmentId"
               name="message"
               onChange={handleShipmentIdChange}
               value={ShipmentId}
               /></td>
         </tr>
         <tr>
            <td>InvoiceId</td>
            <td><input
               type="text"
               id="InvoiceId"
               name="message"
               onChange={handleInvoiceIdChange}
               value={InvoiceId}
               /></td>
         </tr>
         <tr>
            <td>Recipient</td>
            <td><input
               type="text"
               id="Recipient"
               name="message"
               onChange={handleRecipientChange}
               value={Recipient}
               /></td>
         </tr>
         <tr>
            <td>Address</td>
            <td><input
               type="text"
               id="Address"
               name="message"
               onChange={handleAddressChange}
               value={Address}
               /></td>
         </tr>
      </tbody>
   </table>
   <h1>
      Result:
   </h1>
   <table>
      <thead>
         <tr>
            <th>Category</th>
            <th>Value</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>ProductId</td>
            <td className='final-value'>{ProductId}</td>
         </tr>
         <tr>
            <td>Product</td>
            <td className='final-value'>{Product}</td>
         </tr>
         <tr>
            <td>Operation</td>
            <td className='final-value'>{Operation}</td>
         </tr>
         <tr>
            <td>Date</td>
            <td className='final-value'>{Date}</td>
         </tr>
         <tr>
            <td>Phone</td>
            <td className='final-value'>{Phone}</td>
         </tr>
         <tr>
            <td>Count</td>
            <td className='final-value'>{Count}</td>
         </tr>
         <tr>
            <td>ShipmentId</td>
            <td className='final-value'>{ShipmentId}</td>
         </tr>
         <tr>
            <td>InvoiceId</td>
            <td className='final-value'>{InvoiceId}</td>
         </tr>
         <tr>
            <td>Recipient</td>
            <td className='final-value'>{Recipient}</td>
         </tr>
         <tr>
            <td>Address</td>
            <td className='final-value'>{Address}</td>
         </tr>
      </tbody>
   </table>
   <button id="submitFinalForm" onClick={event => submitOrder(event)}>Submit</button>
   <datalist id="defaultOperations">
   <option value="Shipped"></option>
   <option value="Received"></option>
   <option value="Returned"></option>
   </datalist>
</div>

);
}
export default App;
