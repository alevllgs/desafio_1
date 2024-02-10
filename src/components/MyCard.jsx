import {Card} from 'react-bootstrap';
import Tags from './Tags';


function MyCard(props) {
  const {imagen, nombre, descripcion, bg, raza} = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags bg={bg} raza={raza}/>
      
      </Card.Body>
 
    </Card>
  );
}

export default MyCard;

