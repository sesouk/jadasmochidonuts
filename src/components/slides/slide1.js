import React from 'react';
import donuts from '../../images/donuts.jpeg'

const Slide1 = () => {
  return (
  <> 
    <div className="slideshow">
      <div className="slideshow__slides slideshow__fade">
        <img src={donuts} className='slideshow__slides--image' alt='Donuts on a Tray'/>
      </div>
    </div>
  </>
  );
};

export default Slide1;