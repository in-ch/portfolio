import { useRef, useEffect } from 'react';

import { Hill } from './Hill';

export const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const hills = [
      new Hill('#39cbe1', 0.25, 6),
      new Hill('#06bcd7', 0.75, 4),
      new Hill('#84d5e2', 1.25, 3),
    ];

    const handleResize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = window.innerHeight;

      canvas.width = stageWidth;
      canvas.height = stageHeight;

      for (const hill of hills) {
        hill.resize(stageWidth, stageHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < hills.length; i++) {
        hills[i].draw(ctx);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="w-full absolute top-0 -z-10">
      <canvas ref={canvasRef} />
    </div>
  );
};
