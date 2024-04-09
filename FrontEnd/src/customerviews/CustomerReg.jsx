import { useEffect, useState } from "react";
import axios from "axios";

const CustomerReg = () => {
   const [cuserid, setCUserId] = useState();
   const [cuserpass, setCUserPass] = useState();
   const [customername, setCustomerName] = useState();
   const [stid, setStId] = useState();
   const [ctid, setCtId] = useState();
   const [caddress, setCAddress] = useState();
   const [ccontact, setCContact] = useState();
   const [cemail, setCEmail] = useState();
   const [cpicname, setCPicName] = useState();
   const [cid, setCId] = useState();
   const [stlist, setStList] = useState([]);
   const [ctlist, setCtList] = useState([]);
   const [image, setImage] = useState({ preview: '', data: '' });
   const [status, setStatus] = useState('');

   const handleCUserIdText = (evt) => {
      setCUserId(evt.target.value);
   }
   const handleCUserPassText = (evt) => {
      setCUserPass(evt.target.value);
   }
   const handleCustomerNameText = (evt) => {
      setCustomerName(evt.target.value);
   }
   const handleStateSelect = (evt) => {
      setStId(evt.target.value);
      axios.get("http://localhost:5050/city/showcitybystate/" + evt.target.value)
         .then((res) => {
            setCtList(res.data);
         }).catch((err) => {
            alert(err);
         })
   }
   const handleCitySelect = (evt) => {
      setCtId(evt.target.value);
   }
   const handleCAddressText = (evt) => {
      setCAddress(evt.target.value);
   }
   const handleCContactText = (evt) => {
      setCContact(evt.target.value);
   }
   const handleEmailText = (evt) => {
      setCEmail(evt.target.value);
   }
   const handleSubmit = async (evt) => {
      evt.preventDefault();
      let formData = new FormData();
      formData.append('file', image.data);
      const response = await fetch("http://localhost:5050/customer/savecustomerimage", {
         method: 'POST',
         body: formData
      })
      if (response) { setStatus('File Uploaded ' + response.statusText) }
   }
   const handleFileChange = (evt) => {
      const img = {
         preview: URL.createObjectURL(evt.target.files[0]),
         data: evt.target.files[0]
      }
      setImage(img);
      setCPicName(evt.target.files[0].name);
   }
   const handleRegisterButton = () => {
      var obj = {
         CUserId: cuserid,
         CUserPass: cuserpass,
         CustomerName: customername,
         StId: stid,
         CtId: ctid,
         CAddress: caddress,
         CContact: ccontact,
         CEmail: cemail,
         CPicName: cpicname,
         Cid: cid
      };
      axios.post("http://localhost:5050/customer/register", obj)
         .then((res) => {
            // console.log(res);
            alert("Customer Registration Done");
         }).catch((err) => {
            alert(err);
         })
   }
   useEffect(() => {
      {
         axios.get("http://localhost:5050/state/showstate/")
            .then((res) => {
               setStList(res.data);
            }).catch((err) => {
               alert(err);
            })
      }
   })
   return (
      <div >
         <center>
            <h4 style={{ backgroundColor: 'green', color: 'white', borderRadius: "10px" }}>Customer Registration</h4>
         </center>
         <center>
            <div style={{ backgroundColor: 'gray', border: 'solid', padding: 10, borderRadius: 15, height: "510px", width: "600px" }}>
               <table>
                  <tr>
                     <td>Customer User ID</td>
                     <td>
                        <input type="text" onChange={handleCUserIdText} placeholder="Customer User ID" className="form-control" />
                     </td>
                  </tr>
                  <tr>
                     <td>Password</td>
                     <td>
                        <input type="password" onChange={handleCUserPassText} placeholder="Fill Password" className="form-control" />
                     </td>
                  </tr>
                  <tr>
                     <td>Customer Name</td>
                     <td>
                        <input type="text" onChange={handleCustomerNameText} placeholder="Customer Name" />
                     </td>
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
                     <td>City</td>
                     <td>
                        <select onClick={handleCitySelect}>
                           {ctlist.map((item) => (
                              <option value={item.ctid}>{item.ctname}</option>
                           ))}
                        </select>
                     </td>
                  </tr>
                  <tr>
                     <td>Address</td>
                     <td>
                        <input type="text" onChange={handleCAddressText} required />
                     </td>
                  </tr>
                  <tr>
                     <td>Email</td>
                     <td>
                        <input type="email" onChange={handleEmailText} required />
                     </td>
                  </tr>
                  <tr>
                     <td>Contact No</td>
                     <td>
                        <input type="number" onChange={handleCContactText} required minLength={10} maxLength={10} />
                     </td>
                  </tr>
                  <tr>
                     <td>Select Photo</td>
                     <td>
                        {image.preview && <img src={image.preview} width='100' height='100' />}
                        <hr />
                        <form onSubmit={handleSubmit}>
                           <input type="file" name="file" onChange={handleFileChange} />
                           <button type="submit">Submit</button>
                        </form>
                        {status && <h4>{status}</h4>}
                     </td>
                  </tr>
                  <tr>
                     <td></td>
                     <td>
                        <button type="submit" onClick={handleRegisterButton}>Register</button>
                     </td>
                  </tr>
               </table>
            </div>
         </center>
      </div>
   )
}
export default CustomerReg;