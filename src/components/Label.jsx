import React from 'react';

function Label(props){
    console.log( 'Label Component T',props);
    /*const height = .height;
    const width = size.width;
    console.log( `Size Component Height ${height} width ${width}`);*/

    /*if( height > 300 ){
        return <div>Tall</div>
    }else{
        return <div>Short</div>
    }*/

    return (<div >{props.label}</div>)
}

export default Label;