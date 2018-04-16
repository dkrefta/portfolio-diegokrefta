import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
   render (){
     return (
       <Grid>
         <Jumbotron>
           <h2> Welcome to my Portfolio </h2>
           <p> React Engineer </p>
           <Link to="/about">
             <Button bsStyle='primary'> Saiba mais </Button>
           </Link>
           </Jumbotron>
           <Row className="show-grid text-center">
           <Col xs={10} sm={12} className="person-wrapper" >
           <Image src="assets/diegokrefta.jpg" circle className="profile-pic" />
         <h3> Diego Krefta </h3>
       <p> JavaScript Preacher that Loves React.js and Search Engine Optimization </p>
     </Col>
     </Row>
       </Grid>
     )
   }
}
