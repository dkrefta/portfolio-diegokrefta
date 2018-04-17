import React, {Component, PropTypes} from 'react';
import {Container} from '../../theme/grid';
import {
  Image,
  HeroImage,
  RevealP
 } from './Home.style';

export default class Home extends Component {
  static propTypes = {};

  render(){
    return (
      <Container>
      <HeroImage>
      <h1> Diego Krefta </h1>
      <h2> React Engineer </h2>
      </HeroImage>
      <RevealP hide={true}>
      AHAUHEUEAHUEAHUEAHAUEHEAUHEAUAHEUEAHUEAH
      </RevealP>
      </Container>
    );
  }
}
