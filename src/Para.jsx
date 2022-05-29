import React from 'react'
import { useRef } from 'react';
import land from '../src/assets/land.jpg'
import moon from '../src/assets/moon.jpeg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Para() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>

      <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
          onClick={() => ref.current.scrollTo(0)}
        ></ParallaxLayer>

          <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
          onClick={() => ref.current.scrollTo(0)}
        >
          </ParallaxLayer>

      
      </Parallax>
    
    </div>
  );
}

export default Para
