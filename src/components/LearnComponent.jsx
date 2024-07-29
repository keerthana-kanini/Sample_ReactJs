import React from 'react'
import PropTypes from 'prop-types'; 

export const LearnComponent = (props) => {
  const {handleClick} = props;
  return (
    <div>
      <h1>LearnComponent</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>

  )
}
