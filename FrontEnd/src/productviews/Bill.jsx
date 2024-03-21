const Bill = (props)=>{
    var total = 0;
    return(
<div>
    <h6>Customer Bill</h6>
    <table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Quantity</th>
            <th>Amount</th>
        </tr>
        {props.data.map((item)=>(
            <tr>
                <td>{item.pid}</td>
                <td>{item.pname}</td>
                <td>{item.pprice}</td>
                <td>{item.oprice}</td>
                <td>{1}</td>
                <td>{item.oprice*1}</td>
                <td>
                    <img src={"http://localhost:5050/product/getproductimage"+item.ppicname} height={100} width={100}/>
                </td>
            </tr>
        ))}
    </table>
    {props.data.map((item)=>{
        total = total + item.oprice
    })}
    <h5>Total Bill = {total}</h5>
    <button onClick={handlePayNowClick}></button>
</div>
    )
}
export default Bill;