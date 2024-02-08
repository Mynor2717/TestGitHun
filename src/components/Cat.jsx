import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({name : "Dexter", year : 5});

    const handleClick = () => { 
        setCat({...cat, year : cat.year + 1});
    };

    return (
        <>
        <h2>
            {cat.name} - {cat.year}
        </h2>
        <button onClick={handleClick} className="btn btn-dark mb-2">
            Update Year
        </button>
        
        </>
    )
}



export default Cat;

/*
En este apartado  estamos observando los spread operator esto consiste en 
mandar de vuelta la copia de algo que ya se tiene para no repertir o sobre escribir datos
un ay otra vez  */ 


/* Esto tambien se puede realizar con una funcion de callback 
de esta manera 

setCat((prev)) esto se refiere a mandar a llamar los datos previos del objeto 

luego en una funcion de flecha mandamos a llamar dichos datos previos 

setCat((prev) => ({...prev, year : cat.year + 1}))
con esto se puede hacer lo mismo de retornar los datos sin actualizar o mandar a llamar 
el nombre una y otra vez per ocon un callback */ 