import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import {motion} from 'framer-motion'
const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.molasses
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="./sliderImg.png" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  componentDidMount() {
    this.autoplayInterval = setInterval(() => {
      this.setState(prevState => ({
        goToSlide: prevState.goToSlide === this.slides.length - 1 ? 0 : prevState.goToSlide + 1
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.autoplayInterval);
  }
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };

  render() {
    return (
      <div
       className="container"
        style={{ width: "80%",  margin: "0 auto" }}
        
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        
      </div>
    );
  }
}
