import { useEffect, useState } from "react";

function CountdownTimer({ eventDate }) {
  const calcTime = () => {
    const diff = new Date(eventDate) - new Date();

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTime());
    }, 1000);

    return () => clearInterval(timer);
  }, );

  return (
    <h3>
      ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </h3>
  );
}

export default CountdownTimer;
