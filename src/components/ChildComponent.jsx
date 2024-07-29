import PropTypes from 'prop-types'; 

export const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildComponent.propTypes={
    Children: PropTypes.array,
}