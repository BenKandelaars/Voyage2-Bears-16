import React, { Component } from 'react';
import RightArrow from './Components/RightArrow';
import LeftArrow from './Components/LeftArrow';
import { CarouselWrapper, CarouselList, CarouselListWrapper } from './styles';

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
  render() {
    const slides = () => {
      const arr = [];
      for (let i = 1; i < this.props.cardCount; i += 1) {
        arr.push(<this.props.Card itemNo={i} {...this.props} />);
      }
      return arr;
    };

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
            <this.props.Card
              getRef={(el) => { this.width = el; }}
              itemNo={'0'}
              {...this.props}
            />
            {slides()}
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
