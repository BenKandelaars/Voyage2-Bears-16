import React, { Component } from 'react';
import CarouselItem from './CarouselItem';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { CarouselWrapper, CarouselList, CarouselListWrapper } from './style';


class CarouselView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 0,
      width: 0,
      activeIndex: 0,
    };
  }
  componentDidMount() {
    this.setState({
      width: this.width.getBoundingClientRect().width,
    });
  }
  handleOnClickLeft = () => {
    this.setState(prevState => ({ visible: prevState.visible + prevState.width }));
    this.setState(prevState => ({ activeIndex: prevState.activeIndex - 1 }));
  }
  handleOnClickRight = () => {
    this.setState(prevState => ({ visible: prevState.visible - prevState.width }));
    this.setState(prevState => ({ activeIndex: prevState.activeIndex + 1 }));
  }
  render () {
    return (
      <CarouselWrapper>
        <LeftArrow
          handleOnClickLeft={this.handleOnClickLeft}
          activeIndex={this.state.activeIndex}
        />
        <CarouselListWrapper>
          <CarouselList
            visible={this.state.visible}
          >
            <CarouselItem handleWidthSet={this.handleWidthSet}
              width={this.state.width}
              innerRef={width => { this.width = width; }}
            />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </CarouselList>
        </CarouselListWrapper>
        <RightArrow
          handleOnClickRight={this.handleOnClickRight}
          activeIndex={this.state.activeIndex}
        />
      </CarouselWrapper>
    );
  }
}

export default CarouselView;
