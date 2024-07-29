import React from 'react'
import PropTypes from 'prop-types'; 

export const ColorSample = (props) => {
    const {color}=props;
  return (
    <div style={{backgroundColor: color, padding:"28px", color:"white"}}>
        <p>This Component has a background color of {color}</p>
    </div>
  )
}

ColorSample.propTypes = {
    color: PropTypes.oneOf(["red","blue", "orange"]).isRequired
    }
