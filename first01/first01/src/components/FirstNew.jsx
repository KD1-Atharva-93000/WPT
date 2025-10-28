function FirstNew(props) {
    return <div style={{
        border: "1px solid black",
        padding:"4px",
        margin:"5px",
        backgroundColor: "red",
        boxshadow:"2px"
    }}>         
       <div>Title: {props.title}</div>
       <div>Author: {props.author}</div>
       <div>Category: {props.category}</div>
       <div>Price: Rs.{props.price}/-</div>

    </div>
}

export default FirstNew