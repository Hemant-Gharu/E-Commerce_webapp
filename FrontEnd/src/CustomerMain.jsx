import React from "react";
import CustomerLogin from "./customerviews/CustomerLogin";
import CustomerReg from "./customerviews/CustomerReg";
import ReactDOM from "react-dom/client";

function CustomerMain(){
    const handleLoginButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<CustomerLogin></CustomerLogin>);
    }
    const handleRegisterationButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<CustomerReg></CustomerReg>);
    }
    return(
        <div>
            <h4 style={{backgroundColor:"yellow"}}>Welcome</h4>
            <h3>Customer Main Page</h3>
            <button onClick={handleLoginButton}>Login</button>
            <button onClick={handleRegisterationButton}>Registeration</button>
        </div>
    )
}
export default CustomerMain;