import axios from "axios";
import { useEffect, useState } from "react";
import cart from '../assets/shopping_cart.png'
import Bill from "./Bill";
import ReactDOM from "react-dom/client";

const ProductList = (props) => {
   const [plist, setPList] = useState([]);
   const [itemcount, setItemcount] = useState(0);
   const [selitemlist, setSelItemList] = useState([]);

   const handleBuyButton = (item) => {
      setItemcount(itemcount + 1);
      var obj = {
         cid: props.data,
         buylist: item
      }
      selitemlist.push(obj);
   }
   useEffect(() => {
      axios.get("http://localhost:5050/product/showproduct/")
         .then((res) => {
            setPList(res.data);
         }).catch((err) => {
            alert(err);
         })
   }, []);
   const handleBillButton = () => {
      // alert(selitemlist[0].buylist.pname)
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<Bill data={selitemlist}></Bill>)
   }
   return (
      <div>
         <div>
            <label>Customer Id {props.data}</label>
            <center>
               <h3 style={{ backgroundColor: "green", color: "white" }}>My Cart</h3>
               <img src={cart} width={50} height={50} />
               <label>{itemcount}</label>
               <button type="submit" onClick={handleBillButton}>Bill</button>
               <h3 style={{ backgroundColor: "orangered", color: "white" }}>Products List</h3>
            </center>
         </div>
         <center>
            <h4>Product List</h4>
            <table>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Offer Price</th>
                  <th>CatgId</th>
                  <th>Photo</th>
                  <th></th>
               </tr>
               {plist.map((item) => (
                  <tr>
                     <td>{item.pid}</td>
                     <td>{item.pname}</td>
                     <td>{item.pprice}</td>
                     <td>{item.oprice}</td>
                     <td>{item.pcatgid}</td>
                     <td>
                        <img src={"http://localhost:5050/product/getproductimage/" + item.ppicname} height={100} width={100} />
                     </td>
                     <td>
                        <button type="submit" onClick={() => handleBuyButton(item)}>Buy</button>
                     </td>
                  </tr>
               ))}
            </table>
         </center>
      </div>
   )
}
export default ProductList;