"use client"
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`;

  return (
    <div className="text-9xl font-bridge text-center font-bold text-white">
      {formattedTime}
    </div>
  );
};

export default Clock;
