'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import './Hero.css';

export default function Hero() {
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);

  let xPercent = 0;

  useEffect(() => {
    if (!firstText.current) return;

    gsap.set(secondText.current, {
      left: firstText.current?.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent -= 0.1;
  };

  return (
    <main className='hero_wrap flex items-end'>
      <div className='hero_slider'>
        <h2 ref={firstText} className='hero_heading'>
          TRANSFORM • ALIGN • FUTURISTIC •
        </h2>
        <h2 ref={secondText} className='hero_heading'>
          TRANSFORM • ALIGN • FUTURISTIC •
        </h2>
      </div>
    </main>
  );
}
