import React, {Component} from 'react';
import './News.css'
import {Grid, Col, Image, Row} from 'react-bootstrap'

export default class News extends Component {
   render (){
     return (
       <div>
        <Image src="assets/header-img.jpg" className="header-image" />
      <Grid>
      <h2> News </h2>
    <Row>
      <Col xs={12} sm={8} className="main-section">
      <p>Don't hurry. Take your time and enjoy. And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Everything is happy if you choose to make it that way. If you've been in Alaska less than a year you're a Cheechako.</p>

<p>It's a good way of getting rid of all your anxieties and hostilities. It's life. It's interesting. It's fun. If we're going to have animals around we all have to be concerned about them and take care of them.</p>

<p>Steve wants reflections, so let's give him reflections. The man who does the best job is the one who is happy at his job. Every highlight needs it's own personal shadow. Isn't it fantastic that you can change your mind and create all these happy things? Let's put some happy trees and bushes back in here. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.</p>
     </Col>
     <Col xs={12} sm={4} className="sidebar-section">
     <Image src="assets/header-img.jpg" />
     <p>Steve wants reflections, so let's give him reflections. The man who does the best job is the one who is happy at his job. Every highlight needs it's own personal shadow. Isn't it fantastic that you can change your mind and create all these happy things? Let's put some happy trees and bushes back in here. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.</p>
   </Col>
   </Row>
  </Grid>
</div>
     )
   }
}
