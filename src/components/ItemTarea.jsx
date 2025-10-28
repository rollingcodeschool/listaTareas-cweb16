// import  ListGroup  from "react-bootstrap/ListGroup";
import  { ListGroup, Button }  from "react-bootstrap";

const ItemTarea = () => {
    return (
         <ListGroup.Item className="d-flex justify-content-between align-items-center">Tarea 1 <Button variant="outline-danger">❌</Button></ListGroup.Item>
    );
};

export default ItemTarea;