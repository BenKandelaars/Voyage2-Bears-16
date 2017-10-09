import React from 'react';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';

const LeftArrow = (props) => (
    <div>
      <div className="LeftArrow" role="button" focusable="true" onClick={props.previousSlide} >
        <span className="fa fa-angle-left" style={{ fontSize: 35 }} aria-hidden="true" />
      </div>
    </div>
);


export default LeftArrow;
