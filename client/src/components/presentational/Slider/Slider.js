import React from 'react';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import img from './img/image-1.jpg';
import img2 from './img/image-2.jpg';
import img3 from './img/image-3.jpg';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1,
    };
  }
  nextSlide = () => { 
    if (this.state.slideCount < 3) {
      this.setState({
        slideCount: this.state.slideCount + 1, 
      });
    } else {}
  }

  previousSlide = () => {
    if (this.state.slideCount > 1) {
      this.setState({
        slideCount: this.state.slideCount - 1,
      });
    } else {}
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="SliderView">
          <div className="SliderArrows">
            <RightArrow nextSlide={this.nextSlide} />
            <LeftArrow previousSlide={this.previousSlide} />
          </div>
          <div>
            { this.state.slideCount === 1 ? <SlideOne /> : null }
            { this.state.slideCount === 2 ? <SlideTwo /> : null }
            { this.state.slideCount === 3 ? <SlideThree /> : null }
          </div>
          <div className="Description" />
        </div>
      </div>
    );
  }
}

export default Slider;


const SlideOne = () => (
  <img src={img} width={347} height={240} alt="" />
);
const SlideTwo = () => (
  <img src={img2} width={347} height={240} alt="" />
);
const SlideThree = () => (
  <img src={img3} width={347} height={240} alt="" />
);

