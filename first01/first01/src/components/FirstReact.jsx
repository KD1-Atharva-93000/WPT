const person = {
    name:"Atharva",
    age:21,
    address:"Kolhapur"
}

const styles = {
    name:{
        border: "1px solid black",
        padding : "4px",
        margin : "4px"
    },
    address:{
        fontStyle :'italic'
    },
    age:{
        fontStyle:'arabic'
    }
}

function FirstReact() {
    return <>
       <div style={styles.name}>Name: {person.name} </div>
       <div style={styles.age}>Age: {person.age} </div>
       <div style={styles.address}>Address: {person.address} </div>
       
    
    </>

}

export default FirstReact