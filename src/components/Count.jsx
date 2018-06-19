import React from 'react';

function Count(props){
    console.log( 'Label Component T',props);
    let count = parseInt(MATH.random()*100);
    /*const height = .height;
    const width = size.width;
    console.log( `Size Component Height ${height} width ${width}`);*/

    /*if( height > 300 ){
        return <div>Tall</div>
    }else{
        return <div>Short</div>
    }*/

    return (<div >count</div>)
}

export default Count;