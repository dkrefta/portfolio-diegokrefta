import React, {Component} from 'react'
import  {Grid, Col, Image } from 'react-bootstrap'
import './About.css'

export default class About extends Component {
   render () {
     return (
       <div>
      <img src="assets/ailymotto.com.png" className="header-image"/>
    <Grid>
    <Col xs={12} sm={8} smOffeset={2}>
    <Image src="assets/diegokrefta.jpg" className="about-profile-pic" rounded />
  <h3> Diego Krefta </h3>
<p> This is truly an almighty mountain. We have no limits to our world. We're only limited by our imagination. These little son of a guns hide in your brush and you just have to push them out. I like to beat the brush. </p>
<p>The little tiny Tim easels will let you down. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer.</p>
    </Col>
     </Grid>
       </div>
     );
   }
}
