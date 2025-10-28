
function Product2(props){
    const pname = props.name || "Dummy Product"
    const pcompany = props.company ||"Unknown"
    const pprice = props.price || 0.0


    return <div>
        <h3> Name: {pname}</h3>
        <div>Company: {pcompany}</div>
        <div>Price: {pprice}</div>
        <div style={{
            fontStyle:'italic'
        }}>
          {props.children}
        </div>
    </div>
}

export default Product2