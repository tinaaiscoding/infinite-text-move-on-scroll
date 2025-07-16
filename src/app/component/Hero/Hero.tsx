'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    if (!firstText.current) return;

    gsap.set(secondText.current, {
      left: firstText.current?.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: '-=500px',
    });
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };

  return (
    <main className='hero_wrap flex items-end'>
      <div ref={slider} className='hero_slider'>
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
