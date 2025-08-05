import React from "react";
import img1 from '../assets/img/Logo Ipsum 1.png';
import img2 from '../assets/img/Logo Ipsum 2.png';
import img3 from '../assets/img/Logo Ipsum 3.png';
import img4 from '../assets/img/Logo Ipsum 4.png';
import img5 from '../assets/img/Logo Ipsum 5.png';
import img6 from '../assets/img/Logo Ipsum 6.png';
import img7 from '../assets/img/Logo Ipsum 7.png';
import img8 from '../assets/img/Logo Ipsum 8.png';
import img9 from '../assets/img/Logo Ipsum 9.png';
import img10 from '../assets/img/Logo Ipsum 10.png';
import '../assets/css/slidesection.css';

const SlideSection = () => {
  const row1 = [img1, img2, img3, img4, img5];
  const row2 = [img6, img7, img8, img9, img10];

  return (
    <div className="position-relative py-4">
      <div className="overflow-hidden mb-4">
        
        {/* First Row */}
        <div className="d-flex marquee flex-nowrap">
          {[...row1, ...row1].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`logo-${idx}`}
              className="img-fluid mx-2 mx-md-4 logo-img"
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="d-flex marquee marquee-reverse flex-nowrap mt-4">
          {[...row2, ...row2].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`logo-${idx}`}
              className="img-fluid mx-2 mx-md-4 logo-img"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SlideSection;
