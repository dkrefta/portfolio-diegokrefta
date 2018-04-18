import React, { Component, PropTypes } from "react";
import { Container } from "../../theme/grid";
import { Image, HeroImage, RevealP } from "./Home.style";
import WhenInView from "../../components/WhenInView/WhenInView";

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1> Diego Krefta </h1>
          <h2> React Engineer </h2>
        </HeroImage>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <p>
                Only think about one thing at a time. Dont get greedy. I think
                there's an artist hidden in the bottom of every single one of
                us. Work on one thing at a time. Dont get carried away - we have
                plenty of time. If you hypnotize it, it will go away. With
                practice comes confidence.
              </p>
            </RevealP>
          )}
        </WhenInView>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <p>
                {" "}
                I was blessed with a very steady hand; and it comes in very
                handy when youre doing these little delicate things. Just take
                out whatever you dont want. Itll change your entire perspective.
                Making all those little fluffies that live in the clouds. Clouds
                are free they come and go as they please.
              </p>
            </RevealP>
          )}
        </WhenInView>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
        <p>
          {" "}
          I was blessed with a very steady hand; and it comes in very handy when
          youre doing these little delicate things. Just take out whatever you
          dont want. Itll change your entire perspective. Making all those
          little fluffies that live in the clouds. Clouds are free they come and
          go as they please.
        </p>
      </Container>
    );
  }
}
