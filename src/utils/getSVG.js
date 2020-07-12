import React from 'react';

const getSVG = function(imageName){
    const images= require.context('../assets', true);
    let imgpath = images('./' + imageName + '.svg');
    return <img src={imgpath} alt=''></img>
}

export default getSVG;