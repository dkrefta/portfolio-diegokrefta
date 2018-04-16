import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
   render (){
     return (
       <Grid>
         <Jumbotron>
           <h1>Code for Life </h1>
         <h2> React Engineer </h2>
           <Link to="/about">
             <Button bsStyle='primary'> Saiba mais </Button>
           </Link>
           </Jumbotron>
           <Row className="show-grid">
           <Col md={6} mdPush={6} className="person-wrapper" >
           <Image src="assets/diegokrefta.jpg" circle className="profile-pic" />
         <h3> Diego Krefta </h3>
       <p> JavaScript Preacher that Loves React.js and Search Engine Optimization </p>
     </Col>
     </Row>
     <Row className="texto">
     <Col md={6} mdPush={6}>
     <p> teste </p>
   </Col>
     </Row>
       </Grid>

     )
   }
}
