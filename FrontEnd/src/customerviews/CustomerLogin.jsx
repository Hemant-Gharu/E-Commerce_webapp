import { useState } from "react";
import axios from "axios";

const CustomerLogin = () => {
   const [uid, setUId] = useState();
   const [upass, setUPass] = useState();

   const handleUIdText = (evt) => {
      setUId(evt.target.value);
   }
   const handleUPassText = (evt) => {
      setUPass(evt.target.value);
   }
   const handleLoginButton = () => {
      axios.get("http://localhost:5050/customer/login/" + uid + "/" + upass).then((res) => {
         if (res.data.CUserId != undefined) {
            const root = ReactDOM.createRoot(document.getElementById("root"));
            var obj = {
               cfname: res.data.CustomerName,
               cpicname: res.data.CPicName,
               cid: res.data.Cid
            }
            root.render(<CustomerHome data={obj} />)
         } else {
            alert("Invalid Id/Password");
         }
      })
   }
   return (
      <div>
         <center>
            <h4 style={{ backgroundColor: "yellow" }}>Customer Login Form</h4>
            <table>
               <tr>
                  <td>User Id</td>
                  <td>
                     <input type="text" className="form-control" onChange={handleUIdText} />
                  </td>
               </tr>
               <tr>
                  <td>Password</td>
                  <td>
                     <input type="password" className="form-control" onChange={handleUPassText} />
                  </td>
               </tr>
               <tr>
                  <td></td>
                  <td>
                     <button type="submit" onChange={handleLoginButton}>Login</button>
                  </td>
               </tr>
            </table>
         </center>
      </div>
   )
};
export default CustomerLogin;