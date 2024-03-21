import { useEffect, useState } from 'react';

export default function App() {
  const clockHour = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const minute = date.getMinutes();
      const hour = date.getHours();
      const second = date.getSeconds();
      setTime({ hour, minute, second });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="clock">
        <div className="hand hour-hand" style={{ transform: `translateY(-50%) rotate(${time.hour * 30}deg)` }}></div>
        <div className="hand minute-hand" style={{ transform: `translateY(-50%) rotate(${time.minute * 6}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `translateY(-50%) rotate(${time.second * 6}deg)` }}></div>
        <div className="clock-center"></div>
        {clockHour.map((hour, index) => (
          <span
            key={index}
            className="clock-hour"
            style={{ transform: `rotate(${index * 30}deg)` }}
          >
            {hour}
          </span>
        ))}
      </section>
    </main>
  );
}
