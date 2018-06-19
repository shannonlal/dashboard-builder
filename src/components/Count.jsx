import React from 'react';

function Count(props){
    console.log( 'Loading count');
    const count = parseInt(Math.random()*100);

    return (<div >{count}</div>)
}

export default Count;