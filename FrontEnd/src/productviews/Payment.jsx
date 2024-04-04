import axios from "axios";
import { useEffect, useState } from "react"

const Bill = (props) => {
    const [mydate, setMyDate] = useState();
    const [custdata, setCustData] = useState();
    const [cname, setCName] = useState();
    const [caddress, setCAddress] = useState();
    const [ccontact, setCContact] = useState();
    const [sitems, setSItem] = useState([]);
    var total = 0;

    useEffect(() => {
        for (var i = 0; i < props.data.selitems.length; i++) {
            sitems.push(props.data.selitems[i]);
        }
        // alert("item count in sitem="+sitems.length);
        sitems.push(props.data.selitems);
        // alert("item count="+props.data.selitems.length);
        axios.get("http://localhost:2201/customer/getcustomerdetails/" + props.data.cid).then((res) => {
            setCName(res.data.CustomerName);
            setCAddress(res.data.CAddress);
            setCContact(res.data.CContact);
            mydateFun();
        }).catch((err) => {
            alert(err);
        })
    }, []);

    function mydateFun() {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        console.log(currentDate);
        setMyDate(currentDate);
    }
    function refreshPage() {
        window.location.reload(false);
    }

    const handleRemoveButton = (pid) => {
        alert("Selected item will remove from cart " + pid);
        for (var i = 0; i < sitems.length; i++) {
            if (sitems[i].pid == pid) {
                sitems.splice(i, 1);
            }
        }
        /* alert("remaining items "+props.data.selitems.length);
        for(var i=0; i<props.data.selitems.length; i++){
            alert(props.data.selitems[i].pname);
        } */
        // refreshPage();
    }
    const [selitems, setSelItems] = useState([]);
    var total = 0;

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        var myamount = total * 100;
        // creating a new order
        const result = await axios.post("http://localhost:2201/payment/orders/" + myamount);

        if (result) {
            alert("Server error. Are you online?");
            return;
        }

        //Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_8CxHBNt1Qn8",
            // "rzp_test_r6FiJh76SI", //Enter the key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Universal Informatics Pvt. Ltd. Indore",
            description: "Test Transaction",
            image: { logo },
            order_id: order_id,
            handle: async function (resonse) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: resonse.razorpay_payment_id,
                    razorpayOrderId: resonse.razorpay_order_id,
                    razorpaySignature: resonse.razorpay_signature
                };
                alert(data.razorpayPaymentId);
                const result = await axios.post("http://localhost:2201/payment/success", data);

                alert(result.data);
            },
            prefill: {
                name: "Universal Informatics",
                email: "universal@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Universal Informatics Indore Pvt. Ltd. "
            },
            theme: {
                color: "#61dafb"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    return (
        <div>
            <table>
                <tr>
                    <td>Customer Id</td>
                    <td>{props.data.cid}</td>
                </tr>
                <tr>
                    <td>Customer Name</td>
                    <td>{cname}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{caddress}</td>
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>{ccontact}</td>
                </tr>
                <tr>
                    <td>Bill Date</td>
                    <td>{mydate}</td>
                </tr>
            </table>
            <center>
                <h4 style={{ backgroundColor: "green" }}>Bill</h4>
                <table border={1}>
                    <tr>
                        <td>ID</td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Photo</td>
                        <td>Remove</td>
                    </tr>
                    {props.data.selitems.map((item) => (
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.oprice}</td>
                            <img src={"http://localhost:2201/product/getproductimage/" + item.ppicname} height="50" width="50" />
                            <td>
                                <button type="submit" onClick={() => handleRemoveButton(item.pid)} >Remove</button>
                            </td>
                        </tr>
                    ))}
                </table>
                {props.data.selitems.map((item) => {
                    total = total + item.oprice;
                })}
                <h4 style={{ backgroundColor: "green" }}>Total Amount = {total}</h4>
                <button type="submit" onClick={displayRazorpay}>Pay Now</button>
            </center>
        </div>
    )
}
export default Bill;