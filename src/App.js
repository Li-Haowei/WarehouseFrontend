import './App.css';
import React, { useState} from 'react';


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
const [Task, setTask] = useState('');


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
