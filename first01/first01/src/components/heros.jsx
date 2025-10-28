const heros = [
    {
        name:"Tony Stark",
        age:"45",
        speciality:"Genius"
    },
    {
        name:"Bruce Banner",
        age:"46",
        speciality:"Scientist"
    },
    {
        name:"Natasha",
        age:"36",
        speciality:"Spy"
    }

]

const styles = {
       

    }

function Heros() {
    return <div>
        {
            heros.map((h) => <div>
                 <div id="one">Name: {h.name}</div> 
                 <div id="two">Age: {h.age}</div>
                 <div>Speciality: {h.speciality}</div> 
                   <hr></hr>
                </div>)
              
        }
    </div>
}

export default Heros;