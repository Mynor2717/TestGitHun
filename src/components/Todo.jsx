const Todo = ({todo}) => {
    const {title, state, descripcion, priority, id} = todo;
    return <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                <p className={`${state && 'text-decoration-line-through'}`}>{descripcion}</p>
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                    <button className="btn btn-sm btn-info">Actualizar</button>
                </div>
            </div>
            <span className="badge text-bg-success">{priority && "Prioridad"}</span>
        </div>
    </li>
};

export default Todo