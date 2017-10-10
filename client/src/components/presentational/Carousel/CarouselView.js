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
              {...this.props}
            />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
            <this.props.Card {...this.props} />
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
