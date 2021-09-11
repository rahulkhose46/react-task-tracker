import React from 'react';
import PropTypes from 'prop-types';

const addBtnStyle = {
    padding: '10px',
    height: '30px',
    margin: '10px 10px'
}


const Button = ({bgColor,btnText,onClick}) =>{

    const btnStyle = {...addBtnStyle,'backgroundColor': bgColor}

     return (
        <button onClick={onClick} className="card-header-icon button is-link" style={btnStyle}>{btnText}</button>
     )
}

Button.defaultProps = {
     bgColor:'#485fc7'
}
Button.propTypes = {
    bgColor:PropTypes.string,
    btnText:PropTypes.string,
    onClick:PropTypes.func
}

export default Button;