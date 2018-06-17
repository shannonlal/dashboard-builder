import React from 'react';
import sizeMe from 'react-sizeme';
import Chart from './Chart';


function GridElement(props){
    console.log( 'Size Component',props);
    const height = size.height;
    const width = size.width;
    console.log( `Size Component Height ${height} width ${width}`);

    /*if( height > 300 ){
        return <div>Tall</div>
    }else{
        return <div>Short</div>
    }*/

    return (<div id="simpleChart" ><Chart height={height} width={width} /></div>)
}

export default sizeMe({monitorHeight:true,monitorWidth: true})(GridElement)