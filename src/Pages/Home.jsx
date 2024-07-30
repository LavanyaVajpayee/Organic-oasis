import React, { useEffect, useState } from 'react';
import Popular from '../Components/Product/Product';
import SimpleImageSlider from "react-simple-image-slider";
import Bento from '../Components/Bento/Bento';
import Footer from '../Components/Footer/Footer';
import fruitsbanner from '../Components/assets/Slider/fruitsbanner.jpg'
import pulsebanner from '../Components/assets/Slider/pulsebanner.jpg';
import vegbanner from '../Components/assets/Slider/vegbanner.jpg'

function Home() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const images = [fruitsbanner, pulsebanner, vegbanner];

  return (
    <div>
      <SimpleImageSlider
        width={width}
        height={400}
        images={images}
        showNavs={true}
        slideWidth={width} // set slide width to match container width
        slideHeight={400} // set slide height to match container height
        imageStyle={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain', // Changed from 'cover' to 'contain'
          width: '100px',
          height: '100px',
        }}
      />
      <Bento />
      <Popular />
      <Footer />
    </div>
  );
}

export default Home;