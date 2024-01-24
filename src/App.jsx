import PropTypes from "prop-types";

const CustomButton = ({ onClick }) => {
    return <button onClick={onClick}>Click me</button>;
};

const RenderName = (props) => {
    return <div>{props.name}</div>;
  };

RenderName.PropTypes = {
    name: PropTypes.string.isRequired
}

RenderName.defaultProps = {
    name: 'Zach'
}

export default CustomButton;
