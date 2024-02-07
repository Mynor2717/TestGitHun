const NoControlado = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('me diste click')
  }
  // document.addEventListener('submit', (evento) => {
  //   evento.preventDefault()
  // } )
    return (
       <form onSubmit={handleSubmit}>
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