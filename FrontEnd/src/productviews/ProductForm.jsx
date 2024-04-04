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

   const handlePIdText = (event) => {
      setPId(event.target.value)
   }
   const handlePNameText = (event) => {
      setPName(event.target.value)
   }
   const handlePPriceText = (event) => {
      setPPrice(event.target.value)
   }
   const handleOPriceText = (event) => {
      setOPrice(event.target.value)
   }
   // const handlePPicNameText = (event) => {
   //    setPPicName(event.target.value)
   // }
   const handlePCatgSelect = (event) => {
      setPcatgId(event.target.value)
   }

   const [image, setImage] = useState({ preview: '', data: '' })
   const [status, setStatus] = useState('')
   const handleSubmit = async (event) => {
      event.preventDefault();
      let formData = new FormData();
      formData.append('file', image.data);
      const response = await fetch('http://localhost:5050/product/saveproductimage', {
         method: 'POST',
         body: formData
      })
      if (response) { setStatus("Product Photo Uploaded " + response.statusText) }
   }
   const handleFileChange = (event) => {
      const img = {
         preview: URL.createObjectURL(event.target.files[0]),
         data: event.target.files[0]
      }
      setImage(img);
      setPPicName(event.target.files[0].name);
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