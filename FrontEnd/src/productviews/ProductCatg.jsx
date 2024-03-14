import { useEffect, useState } from "react";
import axios from "axios";

const ProductCatg = () => {
  const [pcatgid, setPCatgId] = useState([]);
  const [pcatgname, setPCatgName] = useState();

  const handlePCatgNameText = (evt) =>{
    setPCatgName(evt.target.value); 
  }
  const handleSaveButton = ()=>{
    axios.post("http://localhost:5050/productcatg/addproductcatg/"+pcatgid+"/"+pcatgname).then((res)=>{
      console.log("Product Category Saved")
    }).catch((err)=>{
      alert(err);
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:5050/productcatg/showproductcatg/").then((res)=>{
      setPCatgId(res.data.length+1)
    }).catch((err)=>{
      alert(err);
    })
  },[])

  return(
    <div>
      <center>
        <table>
          <tr>
            <td>Category ID</td>
            <td>{pcatgid}</td>
          </tr>
          <tr>
            <td>Category Name</td>
            <td>
              <input type="text" onChange={handlePCatgNameText}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit" onClick={handleSaveButton}>Save</button></td>
          </tr>
        </table>
      </center>
    </div>
  )
};
export default ProductCatg;
