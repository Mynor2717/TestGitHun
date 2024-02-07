import { useRef } from "react";

const NoControlado = () => {

  const form = useRef(null) // useRef Sirve para hacer una referencia al DOM pero no al  verdadero Dom sino al virtual Dom de react

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('me diste click')
    
    const data = new FormData(form.current);
    console.log([...data.entries()]);

    const dataObject = Object.fromEntries([...data.entries()]);
    console.log(dataObject);
  }
  // document.addEventListener('submit', (evento) => {
  //   evento.preventDefault()
  // } )
    return (
       <form onSubmit={handleSubmit} ref={form}>
         <input typeof="text" placeholder="Ingrese ToDO" 
         className="form-control mb-2"
          name="title"/>

          <img src="" alt="" />  

           <textarea className="form-control mb-2"
            placeholder="Ingrese descripcion"
            name="descripcion"
            />

           <select className="form-select mb-2"name="state">
             <option value="pendiente">Pendiente</option>
             <option value="completado">Completado</option>
           </select>
           <button type="submit" className="btn btn-primary">Enviar</button>
       </form>
    )

};


export default NoControlado;