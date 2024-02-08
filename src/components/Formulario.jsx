import Swal from "sweetalert2";
import { useState } from "react";


const Formulario = ({addTodo}) => {

    // const [title, setTitle] = useState('')
    // const [descripcion, setDescription] = useState('')
    // const [state, setState] = useState('pendiente')

    const [todo, setTodo] = useState({
        title: 'Todo #01',
        descripcion: 'Descripcion #01',
        state: 'pendiente',
        priority: true,
    })

    const {title, descripcion, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

         if (!title.trim() || !descripcion.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descrpcion Obligatorio!",
                
              });
         }
        addTodo({
            id: Date.now(),
            ...todo,
            state : state ==='completado'
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo agregado",
            showConfirmButton: false,
            timer: 1500,
          });
        // console.log(title, descripcion, state);

    };

    const handleChange = e => {

        const {name, type, checked, value} = e.target
        console.log(value)
        console.log(name)
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input typeof="text" placeholder="Ingrese ToDO"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}

            />

            <img src="" alt="" />

            <textarea className="form-control mb-2"
                placeholder="Ingrese descripcion"
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
            />
            <div className="form-check">
                <input type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />
                <label
                    htmlFor="inputCheck">Dar prioridad
                </label>
            </div>
            <select className="form-select mb-2" name="state" value={state}
                onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )

};


export default Formulario;

/* En este codigo estuvimos viendo lo que eran los useState 
que es para conrolaR EL ESTADO DE ALGUNOS ELEMENTOS Y LOS HOOKS 
Dichos elementos son cvontrolados tanto por el use estate como tambien sus nombres de valores


En esta parte en especifico se realizaba este ejemplo con los Objetos para poder cambiar su estado en tiempo real 
imagino a este punto que esto es parte de las SPA y mas adelante vere de que trata esto.*/