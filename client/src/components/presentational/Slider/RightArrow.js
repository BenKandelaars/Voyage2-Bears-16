import React from 'react';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';

const RightArrow = (props) => (
  <div>
    <div className="RightArrow" role="button" focusable="true" onClick={props.nextSlide}>
      <span className="fa fa-angle-right" style={{ fontSize: 35 }} aria-hidden="true" />
    </div>
  </div>
);

export default RightArrow;
