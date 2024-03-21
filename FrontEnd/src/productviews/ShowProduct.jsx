import { useEffect, useState } from "react";
import axios from "axios"

const ShowProduct = () => {
   const [plist, setPList] = useState([])
   useEffect(() => {
      axios.get("http://localhost:5050/product/showproduct")
         .then((res) => {
            setPList(res.data);
         }).catch((err) => {
            alert(err);
         })
   }, [])
   return (
      <div>
         <center>
            <h4>Product List</h4>
            <table>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Offer Price</th>
                  <th>Catg ID</th>
                  <th>Photo</th>
               </tr>
               {plist.map((item) => (
                  <tr>
                     <td>{item.pid}</td>
                     <td>{item.pname}</td>
                     <td>{item.pprice}</td>
                     <td>{item.oprice}</td>
                     <td>{item.pcatgid}</td>
                     <td>
                        <img src={"http://localhost:5050/product/getproductimage/" + item.ppicname} height={100} width={80} />
                     </td>
                     <td>
                        <button>Buy</button>
                     </td>
                  </tr>
               ))}
            </table>
         </center>
      </div>
   )
}
export default ShowProduct;