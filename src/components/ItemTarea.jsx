// import  ListGroup  from "react-bootstrap/ListGroup";
import  { ListGroup, Button }  from "react-bootstrap";

const ItemTarea = ({item, borrarTarea}) => {
    return (
         <ListGroup.Item className="d-flex justify-content-between align-items-center">{item }<Button variant="outline-danger" onClick={()=> borrarTarea(item)}>❌</Button></ListGroup.Item>
    );
};

export default ItemTarea;