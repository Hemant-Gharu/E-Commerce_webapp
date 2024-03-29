import axios from "axios";
import { useEffect, useState } from "react"

const ProductForm = () => {
   const [pid, setPId] = useState()
   const [pname, setPName] = useState()
   const [pprice, setPPrice] = useState()
   const [oprice, setOPrice] = useState()
   const [ppicname, setPPicName] = useState()
   const [ppcatgid, setPcatgId] = useState()
   const [ppcatglist, setPcatgList] = useState([])

   const handlePIdText = (evt) => {
      setPId(evt.target.value)
   }
   const handlePNameText = (evt) => {
      setPName(evt.target.value)
   }
   const handlePPriceText = (evt) => {
      setPPrice(evt.target.value)
   }
   const handleOPriceText = (evt) => {
      setOPrice(evt.target.value)
   }
   const handlePPicNameText = (evt) => {
      setPPicName(evt.target.value)
   }
   const handlePCatgSelect = (evt) => {
      setPcatgId(evt.target.value)
   }

   const [image, setImage] = useState({ preview: '', data: '' })
   const [status, setStatus] = useState('')
   const handleSubmit = async (evt) => {
      evt.preventDefault();
      let formData = new FormData();
      formData.append('file', image.data);
      const response = await fetch('http://localhost:5050/product/saveproductimage', {
         method: 'POST',
         body: formData
      })
      if (response) { setStatus("Product Photo Uploaded " + response.statusText) }
   }
   const handleFileChange = (evt) => {
      const img = {
         preview: URL.createObjectURL(evt.target.files[0]),
         data: evt.target.files[0]
      }
      setImage(img);
      setPPicName(evt.target.files[0].name);
   }
   useEffect(() => {
      axios.get("http://localhost:5050/productcatg/showproductcatg/")
         .then((res) => {
            setPcatgList(res.data);
         }).catch((err) => {
            alert(err);
         })
      axios.get("http://localhost:5050/product/showproduct/")
         .then((res) => {
            setPId(res.data.length + 1)
         }).catch((err) => {
            alert(err);
         })
   }, [])//dependency array is not added by sir
   const handleSaveButton = () => {
      var p = {
         pid: pid,
         pname: pname,
         pprice: pprice,
         oprice: oprice,
         ppicname: ppicname,
         ppcatgid: ppcatgid
      }
      axios.post("http://localhost:5050/product/saveproduct", p)
      .then((res) => {
         alert("Data Saved");
      }).catch((err) => {
         alert(err);
      })
   }

   return (
      <div>
         <h5>Product Entry Form</h5>
         <table>
            <tr>
               <td>Product Id</td>
               <td><input type="text" onChange={handlePIdText} /></td>
            </tr>
            <tr>
               <td>Product Name</td>
               <td><input type="text" onChange={handlePNameText} /></td>
            </tr>
            <tr>
               <td>Price</td>
               <td><input type="text" onChange={handlePPriceText} /></td>
            </tr>
            <tr>
               <td>Offer Price</td>
               <td><input type="text" onChange={handleOPriceText} /></td>
            </tr>
            <tr>
               <td>Category</td>
               <td>
                  <select onClick={handlePCatgSelect}>
                     {ppcatglist.map((item) => (
                        <option value={item.pcatgid}>{item.pcatgname}</option>
                     ))}
                  </select>
               </td>
            </tr>
            <tr>
               <td>Photo</td>
               <td>
                  <div>
                     {image.preview && <img src={image.preview} width={100} height={100} />}
                     <hr />
                     <form>
                        <input type="file" name="file" onChange={handleFileChange} />
                        <button type="submit" onClick={handleSubmit}>Upload</button>
                     </form>
                     {status && <h4>{status}</h4>}
                  </div>
               </td>
            </tr>
            <tr>
               <td></td>
               <td>
                  <button type="submit" onClick={handleSaveButton}>Save</button>
               </td>
            </tr>
         </table>
      </div>
   )
}
export default ProductForm