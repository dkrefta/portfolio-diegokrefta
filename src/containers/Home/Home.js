import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import {Container} from '../../theme/grid';
import {
  Image,
  HeroImage
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
      <p>
      asdf
      </p>
      </Container>
    );
  }
}
