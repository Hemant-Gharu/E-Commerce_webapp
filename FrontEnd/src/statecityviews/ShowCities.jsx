import axios from "axios"
import { useEffect, useState } from "react"

const ShowCities = () => {
  const [ctid, setCtId] = useState()
  const [ctname, setCtName] = useState()
  const [stid, setStId] = useState()
  const [stname, setStName] = useState()
  const [ctlist, setCtList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5050/city/showcity").then((res) => {
      setCtList(res.data)
    }).catch((err) => {
      alert(err);
    })
  }, [])
  return (
    <div>
      <center>
        <table>
          <thead>
            <tr>
              <th>City ID</th>
              <th>City Name</th>
              <th>State ID</th>
            </tr>
          </thead>
          {ctlist.map((item) => (
            <tbody>
              <tr>
                <td>{item.ctid}</td>
                <td>{item.ctname}</td>
                <td>{item.stid}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </center>
    </div>
  )
}
export default ShowCities