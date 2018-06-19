import React from 'react';
import './Label.scss';


function Label(props){
    console.log( 'Label Component T',props);

    return (<div className="label-style">{props.label}</div>)
}

export default Label;