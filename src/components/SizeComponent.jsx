import React from 'react';
//import sizeMe from 'react-sizeme';
import Chart from './Chart';


function SizeComponent({height,width}){
    //console.log( 'Size Component',size);
    //const height = size.height;
    //const width = size.width;
    console.log( `Size Component Height ${height} width ${width}`);

    /*if( height > 300 ){
        return <div>Tall</div>
    }else{
        return <div>Short</div>
    }*/

    return <Chart height={height} width={width} />
}

//export default sizeMe({monitorHeight:true,monitorWidth: true})(SizeComponent)
export default SizeComponent;