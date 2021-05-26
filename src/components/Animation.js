import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/online-study.json';
 
const Animation = () => {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return (
      <div>
        <Lottie options={defaultOptions}
                height={200}
                width={200}
         />
      </div>
      )
  
};

export default Animation