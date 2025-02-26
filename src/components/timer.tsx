import { siteConfig } from '@/config/site';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timer() {
  const [time, setTime] = useState(60000); // 60秒（60,000ミリ秒）
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    startTimeRef.current = performance.now();

    const update = () => {
      if (startTimeRef.current !== null) {
        const elapsed = performance.now() - startTimeRef.current;
        const newTime = 60000 - elapsed;
        setTime(newTime > 0 ? newTime : 0);
        if (newTime > 0) {
          animationFrameRef.current = requestAnimationFrame(update);
        } else {
          navigate(siteConfig.paths.gameResult("12345")); // タイマー終了後に'/result'へ遷移
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [navigate]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor(milliseconds % 1000).toString().padStart(3, '0');
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${ms}`;
  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-mono">{formatTime(time)}</h1>
    </div>
  );
}
