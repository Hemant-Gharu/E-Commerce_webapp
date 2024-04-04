import axios from "axios";
import { useEffect, useState } from "react";

const VenderReg = () => {
    const [vuserid, setVUserId] = useState();
    const [vuserpass, setVUserPass] = useState();
    const [vendername, setVenderName] = useState();
    const [vaddress, setVAddress] = useState();
    const [vcontact, setVContact] = useState();
    const [vemail, setVEmail] = useState();
    const [vpicname, setVPicName] = useState();
    const [vid, setVId] = useState();
    const [image, setImage] = useState({ preview: '', data: '' });
    const [status, setStatus] = useState('');

    const handleVUserIdText = (evt) => {
        setVUserId(evt.target.value);
    }
    const handleVUserPassText = (evt) => {
        setVUserPass(evt.target.value);
    }
    const handleVenderNameText = (evt) => {
        setVenderName(evt.target.value);
    }
    const handleVAddressText = (evt) => {
        setVAddress(evt.target.value);
    }
    const handleVContactText = (evt) => {
        setVContact(evt.target.value);
    }
    const handleVEmailText = (evt) => {
        setVEmail(evt.target.value);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let formData = new FormData();
        formData.append('file', image.data);
        const resonse = await fetch("http://localhost:5050/vender/savevenderimage", {
            method: "POST",
            body: formData
        })
        if (resonse) {
            setStatus("File Uploaded " + resonse.statusText)
        }
    }
    const handleFileChange = (evt) => {
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0]
        }
        setImage(img);
        setVPicName(evt.target.files[0].name);
    }
    const handleRegisterButton = () => {
        var obj = {
            VUserId: vuserid,
            VUserPass: vuserpass,
            VenderName: vendername,
            VAddress: vaddress,
            VContact: vcontact,
            VEmail: vemail,
            VPicName: vpicname,
            Vid: vid
        };
        axios.post("http://localhost:5050/vender/register", obj).then((res) => {
            alert("Vender Registration Done");
        }).catch((err) => {
            alert(err);
        })
    }
    useEffect(() => {
        {
            axios.get("http://localhost:5050/vender/getvendercount/").then((res) => {
                setVId(res.data.length + 1);
            }).catch((err) => {
                alert(err);
            })
        }
    })
    return (
        <div style={{ backgroundColor: "bisque", border: "solid", borderRadius: "150", height: "600px", width: "600px" }}>
            <table>
                <tr>
                    <td>Vender Id</td>
                    <td>{vid}</td>
                </tr>
                <tr>
                    <td>Vender User Id</td>
                    <td>
                        <input type="text" onChange={handleVUserIdText} placeholder="Vender User Id" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="password" onChange={handleVUserPassText} placeholder="Vender User Id" />
                    </td>
                </tr>
                <tr>
                    <td>Customer Name</td>
                    <td>
                        <input type="text" onChange={handleVenderNameText} placeholder="Vender Name" />
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input type="text" onChange={handleVAddressText} required />
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="email" onChange={handleVEmailText} required />
                    </td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td>
                        <input type="number" onChange={handleVContactText} required minLength={10} maxLength={10} />
                    </td>
                </tr>
                <tr>
                    <td>Select Photo</td>
                    <td>
                        {image.preview && <img src={image.preview} width='100' height='100'></img>}
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
    )
}
export default VenderReg;