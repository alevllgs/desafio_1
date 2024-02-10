import Badge from 'react-bootstrap/Badge';


function Tags(props) {
    const {bg, raza} = props;
  return (

      <Badge bg={bg}>{raza}</Badge>   

  );
}

export default Tags;








