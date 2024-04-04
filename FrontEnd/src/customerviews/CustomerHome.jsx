import ReactDOM from "react-dom/client";
import ProductList from "../productviews/ProductList"

const CustomerHome = (props) => {
   const handleShopingButton = () => {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      var cid = props.data.cid;
      root.render(<ProductList data={cid} />);
   }
   return (
      <div>
         Customer Id {props.data.cid}
         <h4 style={{ backgroundColor: "yellow" }}>Customer Home Page</h4>
         <h5>Welcome {props.data.cfname}</h5>
         <img src={"http://localhost:5050/customer/getimage/" + props.data.cpicname} height={100} width={100} />
         <button type="submit" onClick={handleShopingButton}>Shoping</button>
      </div>
   );
};
export default CustomerHome;