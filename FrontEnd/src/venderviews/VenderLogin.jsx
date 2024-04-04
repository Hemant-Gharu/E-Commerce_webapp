import axios from "axios";
import { useState } from "react";
import VenderHome from "./VenderHome";

const VenderLogin = () => {
    const [uid, setUId] = useState();
    const [upass, setUPass] = useState();

    const handleUIdText = (evt) => {
        setUId(evt.target.value);
    }
    const handleUPassText = (evt) => {
        setUPass(evt.target.value);
    }
    const handleLoginButton = () => {
        axios.get("http://localhost:5050/vender/login/" + uid + "/" + upass).then((res) => {
            if (res.data.VUserId != undefined) {
                const root = ReactDOM.createRoot(document.getElementById("root"));
                var obj = {
                    vfname: res.data.VenderName,
                    vpicname: res.data.VPicName,
                    vid: res.data.Vid
                }
                root.render(<VenderHome data={obj}></VenderHome>)
            } else {
                alert("Invalid Id/Password");
            }
        })
    }
    return (
        <div>
            <center>
                <h4 style={{ backgroundColor: "green", color: "white" }}>Vender Login Form</h4>
                <div style={{ backgroundColor: "bisque", borderRadius: "100" }}>
                    <table>
                        <tr>
                            <td>User Id</td>
                            <td>
                                <input type="text" onChange={handleUIdText} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" onChange={handleUPassText} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleLoginButton}>Login</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </center>
        </div>
    )
}
export default VenderLogin;