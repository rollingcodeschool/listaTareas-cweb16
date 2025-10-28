import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arrayTareas}) => {
  return (
    <ListGroup>
        {
            arrayTareas.map((item, indice)=> <ItemTarea key={indice}></ItemTarea>)
        }
    </ListGroup>
  );
};

export default ListaTareas;
