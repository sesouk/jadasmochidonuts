import React from 'react';
import donutsClose from '../../images/donutsClose.jpeg'

const Slide3 = () => {
  return (
  <> 
    <div className="slideshow">
      <div className="slideshow__slides slideshow__fade">
        <img src={donutsClose} className='slideshow__slides--image' alt='Donuts to go'/>
      </div>
    </div>
  </>
  );
};

export default Slide3;