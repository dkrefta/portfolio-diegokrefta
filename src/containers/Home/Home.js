import React, {Component, PropTypes} from 'react';
import {Container} from '../../theme/grid';
import {
  Image,
  HeroImage,
  RevealP
 } from './Home.style';
 import WhenInView from '../../components/WhenInView/WhenInView'

export default class Home extends Component {
  static propTypes = {};

  render(){
    return (
      <Container>
      <HeroImage>
      <h1> Diego Krefta </h1>
      <h2> React Engineer </h2>
      </HeroImage>
      <WhenInView>
      {({ isInView }) =>
      <RevealP hide={!isInView}>
      AHAUHEUEAHUEAHUEAHAUEHEAUHEAUAHEUEAHUEAH
      </RevealP>
    }
      </WhenInView>
      </Container>
    );
  }
}
