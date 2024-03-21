import { useEffect, useState } from "react"
import axios from "axios"

const ShowStates = () => {
   const [stid, setStId] = useState()
   const [stname, setStName] = useState()
   const [slist, setSList] = useState([])

   useEffect(() => {
      axios.get("http://localhost:5050/state/showstate")
         .then((res) => {
            setSList(res.data);
         })
         .catch((err) => {
            console.log(err);
         })
   }, [])

   return (
      <div>
         <center>
            <h5>State List</h5>
            <table>
                  <tr>
                     <th>State ID</th>
                     <th>State Name</th>
                  </tr>
               {slist.map((item) => (
                     <tr>
                        <td>{item.stid}</td>
                        <td>{item.stname}</td>
                     </tr>
               ))}
         </table>
      </center>
      </div >
   )
}
export default ShowStates;