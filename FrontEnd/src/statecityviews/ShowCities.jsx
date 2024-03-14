import axios from "axios"
import { useEffect, useState } from "react"

const ShowCities = ()=>{
const [ctid, setCtId] = useState()
const [ctname, setCtName] = useState()
const [stid, setStId] = useState()
const [stname, setStName] = useState()
const [ctlist, setCtList] = useState([])

useEffect(()=>{
  axios.get("http://localhost:5050/city/showcity").then((res)=>{
    setCtList(res.data)
  }).catch((err)=>{
    console.log(err);
  })
},[])

  return(
    <div>
      <center>
        <table>
          <tr>
            <td>City ID</td>
            <td>City Name</td>
            <td>State ID</td>
          </tr>
          {ctlist.map((item)=>(
            <tr>
              <td>{item.ctid}</td>
              <td>{item.ctname}</td>
              <td>{item.stid}</td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  )
}
export default ShowCities