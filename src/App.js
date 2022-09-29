import './App.css';
import React, { useState, useEffect } from 'react';
const CreateOrder = "https:&emsp;&emsp;//basiccrudcs519.azurewebsites.net/api/CreateOrder?";
function App() {
const [ProductId, setProductId] = useState(' ');
const [Product, setProduct] = useState(' ');
const [Operation, setOperation] = useState(' ');
const [Date, setDate] = useState(' ');
const [Count, setCount] = useState(' ');
const [InvoiceId, setInvoiceId] = useState(' ');
const [ShipmentId, setShipmentId] = useState(' ');
const [Recipient, setRecipient] = useState(' ');
const [Address, setAddress] = useState(' ');
const [Phone, setPhone] = useState(' ');
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
      body: JSON.stringify(jsonData),
      credentials: "include"
  };
  
  
   const url = "https://basiccrudcs519api.azure-api.net/basicCRUDcs519/CreateOrder";
   fetch(url, requestOptions).then(
    response => response.json()
   ).then(data => console.log(data)).catch(
    function(error) {
    console.log(error);
    });
};
//{"ProductId":&emsp;&emsp;"3", "Product":&emsp;&emsp;"ShipNothing", "Operation":&emsp;&emsp;"Shipped", "ShipmentId":&emsp;&emsp;"NothingId", "Date":&emsp;&emsp;"today?", "Count":&emsp;&emsp;100, "InvoiceId":&emsp;&emsp;"NothingInvoice", "Recipient":&emsp;&emsp;"NotYourDad", "Address":&emsp;&emsp;"corner store", "Phone":&emsp;&emsp;"123456"}
return (
<div id='main-page'>
   <h1>
      This is the warehouse:
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
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleProductIdChange}
               value={ProductId}
               /></td>
         </tr>
         <tr>
            <td>Product</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleProductChange}
               value={Product}
               /></td>
         </tr>
         <tr>
            <td>Operation</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleOperationChange}
               value={Operation}
               /></td>
         </tr>
         <tr>
            <td>Date</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleDateChange}
               value={Date}
               /></td>
         </tr>
         <tr>
            <td>Phone</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handlePhoneChange}
               value={Phone}
               /></td>
         </tr>
         <tr>
            <td>Count</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleCountChange}
               value={Count}
               /></td>
         </tr>
         <tr>
            <td>ShipmentId</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleShipmentIdChange}
               value={ShipmentId}
               /></td>
         </tr>
         <tr>
            <td>InvoiceId</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleInvoiceIdChange}
               value={InvoiceId}
               /></td>
         </tr>
         <tr>
            <td>Recipient</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleRecipientChange}
               value={Recipient}
               /></td>
         </tr>
         <tr>
            <td>Address</td>
            <td><input
               type="text"
               id="message"
               name="message"
               onChange={handleAddressChange}
               value={Address}
               /></td>
         </tr>
      </tbody>
   </table>
   <h1>
      This is the final form:
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
   <button onClick={event => submitOrder(event)}>Submit</button>
</div>

);
}
export default App;
