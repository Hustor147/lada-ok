import"./Telo.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {Card, CardBody,CardTitle,CardText,Button } from "reactstrap";

const Telo = (props) => {


    return(
        <>
        
        
           

        <Card
        style={{
                width: '18rem'
                }}
                >
  <img
    alt="Sample"
    src={props.image}
  />

  <CardBody>
    <CardTitle tag="h5">
      {props.title}
    </CardTitle>
    <CardText>
      {props.text}
    </CardText>
    <Button>
      <a href="Anteny.html"> Button</a>
    </Button>
  </CardBody>
</Card>
        
        
        
       
        </>

    )
}
export default Telo