import axios from "axios";
import { useEffect, useState } from "react";

const CityForm = () => {
   const [ctid, setCtId] = useState()
   const [ctname, setCtName] = useState([])
   const [stid, setStId] = useState()
   const [stlist, setStList] = useState([])

   const handleCtId = (evt) => {
      setCtId(evt.target.value)
   }
   const handleCtName = (evt) => {
      setCtName(evt.target.value)
   }
   const handleStateSelect = (evt) => {
      setStId(evt.target.value)
   }
   useEffect(() => {
      axios.get("http://localhost:5050/state/showstate/").then((res) => {
         setStList(res.data);
      }).catch((err) => {
         console.log(err);
      })
      axios.get("http://localhost:5050/city/showcity").then((res) => {
         setCtId(res.data.length + 1 + 100);
      }).catch((err) => {
         console.log(err);
      })
   }, [])
   const handleSaveButton = () => {
      axios.post("http://localhost:5050/city/addcity/" + ctid + "/" + ctname + "/" + stid).then((res) => {
         alert("City Saved");
      }).catch((err) => {
         alert(err);
      })
   }

   return (
      <div>
         <center>
            <table>
               <tr>
                  <td>City ID</td>
                  <td>{ctid}</td>
               </tr>
               <tr>
                  <td>City Name</td>
                  <td><input type="text" onChange={handleCtName} /></td>
               </tr>
               <tr>
                  <td>State</td>
                  <td>
                     <select onClick={handleStateSelect}>
                        {stlist.map((item) => (
                           <option value={item.stid}>{item.stname}</option>
                        ))}
                     </select>
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>
                     <button type="submit" onClick={handleSaveButton}>Save</button>
                  </td>
               </tr>
            </table>
         </center>
      </div>
   )
}
export default CityForm;