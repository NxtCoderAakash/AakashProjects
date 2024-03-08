import React from 'react';
import Lottie from 'lottie-react';
import { NamasteAnimation } from '../../core/utility/iconHelper';

const NamasteLottie = () => {
    return (
        <Lottie
        animationData={NamasteAnimation}
        loop={true}
        autoplay={true}
        speed={1.5}
        style={{ width: '100%', height: '100%' }}
        />
    );
  };
  

export default NamasteLottie