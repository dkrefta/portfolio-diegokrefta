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
           </Jumbotron>
           <Link to="/about">
             <Button bsStyle='primary'> Saiba mais </Button>
           </Link>
       </Grid>
     )
   }
}