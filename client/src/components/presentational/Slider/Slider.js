import React from 'react';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';
// import FontAwesome from 'react-fontawesome';
import img from './img/image-1.jpg';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 347,
      height: 240,
    };
  }
  nextSlide() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="SliderView">
          <div className="SliderArrows">
            <RightArrow />
            <LeftArrow />
          </div>
          <img src={img} className="Img" alt="" width="347px" height="240px" />
        </div>
        <div className="Description" />
      </div>
    );
  }
}

export default Slider;

const RightArrow = () => (
  <div>
    <div className="RightArrow" role="button" focusable="true" onClick={this.nextSlide}>
      <span className="fa fa-angle-right" style={{fontSize: 35 }} aria-hidden="true" />
    </div>
  </div>
);


const LeftArrow = () => (
  <div>
    <div className="LeftArrow" role="button" focusable="true" onClick={this.nextSlide}>
      <span className="fa fa-angle-left" style={{fontSize: 35 }} aria-hidden="true" />
    </div>
  </div>
);
