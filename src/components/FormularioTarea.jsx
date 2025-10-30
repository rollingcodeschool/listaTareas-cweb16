import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
const tareasLocalstorage = JSON.parse(localStorage.getItem('listaTareas')) || []
const [arrayTareas, setArrayTareas] = useState(tareasLocalstorage)
const [tarea, setTarea] = useState('')

useEffect(()=>{
  console.log('desde UseEffect')
  localStorage.setItem('listaTareas', JSON.stringify(arrayTareas))
},[arrayTareas])

const handleSubmit = (e)=>{
    e.preventDefault();
    //verificar que la tarea no este repetida
    const tareaBuscada = arrayTareas.find((itemTarea)=> itemTarea.toLowerCase() === tarea.toLowerCase().trim())
    if(tareaBuscada){
      return alert('Ya existe una tarea con ese nombre')
    }
    //tomar el valor del state tarea y almacenarlo en el arrayTareas
    setArrayTareas([...arrayTareas, tarea.trim()])
    //limpiar el state tarea
    setTarea('')
}

const borrarTarea = (nombreTarea)=>{
const arrayFiltrado = arrayTareas.filter((itemTarea)=> itemTarea !== nombreTarea)
//actualizar estado
setArrayTareas(arrayFiltrado)
}

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex">
            <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
