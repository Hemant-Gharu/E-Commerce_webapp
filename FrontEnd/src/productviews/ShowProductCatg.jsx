import axios from "axios";
import { useEffect, useState } from "react";

const ShowProductCatg = () => {
   const [pcatglist, setPCatgList] = useState([])

   useEffect(() => {
      axios.get("http://localhost:5050/productcatg/showproductcatg")
         .then((res) => {
            setPCatgList(res.data)
         }).catch((err) => {
            console.log(err)
         })
   }, [])
   return (
      <div>
         <center>
            <table>
               <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
               </tr>
               {pcatglist.map((item) => (
                  <tr>
                     <td>{item.pcatgid}</td>
                     <td>{item.pcatgname}</td>
                  </tr>
               ))}
            </table>
         </center>
      </div>
   )
}
export default ShowProductCatg;