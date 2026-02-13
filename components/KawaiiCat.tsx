
import React, { useEffect, useState } from 'react';
import { CatPosition } from '../types';

const CAT_SVGS = [
  // Classic Sitting/Walking Cat
  (color: string) => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M30 70 Q30 40 50 40 T70 70" fill={color} />
      <circle cx="40" cy="35" r="10" fill={color} />
      <circle cx="60" cy="35" r="10" fill={color} />
      <path d="M35 30 L30 15 L45 25" fill={color} />
      <path d="M65 30 L70 15 L55 25" fill={color} />
      <circle cx="45" cy="35" r="1.5" fill="black" />
      <circle cx="55" cy="35" r="1.5" fill="black" />
      <path d="M48 40 Q50 42 52 40" fill="none" stroke="pink" strokeWidth="1" />
      <path d="M70 70 Q85 70 85 55" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
];

const COLORS = ['#FFD1DC', '#FFB6C1', '#F8C8DC', '#FFF0F5', '#E6E6FA'];

export const KawaiiCat: React.FC<{ id: number }> = ({ id }) => {
  const [pos, setPos] = useState<CatPosition>({
    id,
    x: Math.random() * window.innerWidth,
    y: Math.random() * (window.innerHeight - 100),
    scale: 0.5 + Math.random() * 0.5,
    direction: Math.random() > 0.5 ? 'right' : 'left',
    speed: 0.5 + Math.random() * 1.5
  });

  const [color] = useState(COLORS[Math.floor(Math.random() * COLORS.length)]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos(prev => {
        let newX = prev.x + (prev.direction === 'right' ? prev.speed : -prev.speed);
        let newDir = prev.direction;

        if (newX > window.innerWidth + 50) {
          newX = -50;
        } else if (newX < -50) {
          newX = window.innerWidth + 50;
        }

        return { ...prev, x: newX, direction: newDir };
      });
    }, 30);

    return () => clearInterval(moveInterval);
  }, []);

  return (
    <div
      className="fixed pointer-events-none transition-transform duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        width: `${80 * pos.scale}px`,
        height: `${80 * pos.scale}px`,
        zIndex: 0,
        transform: `scaleX(${pos.direction === 'right' ? 1 : -1})`,
        opacity: 0.8
      }}
    >
      {CAT_SVGS[0](color)}
    </div>
  );
};
