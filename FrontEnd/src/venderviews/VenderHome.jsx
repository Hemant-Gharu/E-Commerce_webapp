import  ReactDOM  from "react-dom/client";
import ProductForm from "../productviews/ProductForm"
import ShowProduct from "../productviews/ShowProduct"

const VenderHome = (props)=>{
const handleAddProductButton=()=>{
    const root=ReactDOM.createRoot(document.getElementById("root"));
    var vid = props.data.vid;
    root.render(<ProductForm data={vid}></ProductForm>)
}
const handleShowProductButton=()=>{
    const root=ReactDOM.createRoot(document.getElementById("root"));
    var vid = props.data.vid;
    root.render(<ShowProduct data={vid}></ShowProduct>)
}
    return(
        <div>
            Vender Id {props.data.vid}
            <h4 style={{backgroundColor:"yellow"}}>Vender Home Page</h4>
            <h5>Welcome {props.data.vfname}</h5>
            <img src={"http://localhost:5050/vender/getimage/"+props.data.vpicname} height={100} width={100} />
            <button type="submit" onClick={handleAddProductButton}>Add Product</button>
            <button type="submit" onClick={handleShowProductButton}>View Product</button>
        </div>
    )
}
export default VenderHome;