import axios from "axios"
import { useEffect, useState } from "react"

const ShowData = () => {
   const [show, setShow] = useState([])

   useEffect(() => {
      axios.get("http://localhost:5050/state/showstate")
         .then((res) => {
            setShow(res.data);
         })
         .catch((err) => {
            console.log(err);
         })
   }, [])

   return (
      <>
         <div>
            <table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th style={{padding: "0 4rem"}}>State Name</th>
                  </tr>
               </thead>
            </table>
            {show.map((item) => (
               <table>
                  <tbody>
                     <tr>
                        <td>{item.stid}</td>
                        <td style={{padding: "0 4rem"}}>{item.stname}</td>
                     </tr>
                  </tbody>
               </table>
            ))}
         </div>
      </>
   )
}
export default ShowData