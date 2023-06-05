import "../styles/Input.css";
import React from 'react';
import PropTypes from 'prop-types';

function Input (props) {
    return ( 
        <div>
            <input className='Input' type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,

}

Input.defaultProps = {
    placeholder: 'Pesquise no Google ou escreva um url'
}

export default Input;
