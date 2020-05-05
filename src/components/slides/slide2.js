import React from 'react';
import donutsPacked from '../../images/donutsPacked.jpeg'

const Slide2 = () => {
  return (
  <> 
    <div className="slideshow">
      <div className="slideshow__slides slideshow__fade">
        <img src={donutsPacked} className='slideshow__slides--image' alt='Donuts to go'/>
      </div>
    </div>
  </>
  );
};

export default Slide2;