import React from 'react';

const getSVG = function(imageName){
    const images= require.context('../assets', true);
    let imgpath = images('./' + imageName + '.svg');
    return <img src={imgpath} alt={imageName}></img>
}

export default getSVG;