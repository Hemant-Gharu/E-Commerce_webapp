import axios from "axios";
import { useEffect, useState } from "react";

const Bill = (props) => {
   console.log("props ",props.data);
   var total = 0;
   const [customername, setCustomerName] = useState();
   const [caddress, setCAddress] = useState();
   const [ccontact, setCContact] = useState();
   const [cemail, setCEmail] = useState();

   useEffect(() => {
      axios.get("http://localhost:5050/customer/customerdetails/" + props.data[0].cid).then((res) => {
         // console.log(props.data[0].cid);
         setCustomerName(res.data.CustomerName);
         setCAddress(res.data.CAddress);
         setCContact(res.data.CContact);
         setCEmail(res.data.CEmail);
      }).catch((err) => {
         alert(err);
      })
   })
   const handlePayNowClick = () => {

   }
   return (
      <div>
         <label>Customer Id {props.data[0].cid}</label>
         <div style={{ backgroundColor: "beige" }}>
            <table>
               <tr>
                  <td>Customer Name</td>
                  <td>{customername}</td>
               </tr>
               <tr>
                  <td>Address</td>
                  <td>{caddress}</td>
               </tr>
               <tr>
                  <td>Contact</td>
                  <td>{ccontact}</td>
               </tr>
               <tr>
                  <td>Email</td>
                  <td>{cemail}</td>
               </tr>
            </table>
         </div>
         <center>
            <h6>Customer Bill</h6>
            <table>
               <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Offer Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
               </tr>
               {
                  //props.data[0]
                  props.data.map((item) => (
                     <tr>
                        <td>{item.buylist.pid}</td>
                        <td>{item.buylist.pname}</td>
                        <td>{item.pprice}</td>
                        <td>{item.buylist.oprice}</td>
                        <td>{1}</td>
                        <td>{item.buylist.oprice * 1}</td>
                        <td>
                           <img src={"http://localhost:5050/product/getproductimage" + item.buylist.ppicname} height={100} width={100} />
                        </td>
                     </tr>
                  ))
               }
            </table>
            {props.data.map((item) => {
               total = total + item.buylist.oprice
            })}
            <h5>Total Bill = {total}</h5>
            <button onClick={handlePayNowClick}>Pay Bill</button>
         </center>
      </div>
   )
}
export default Bill;