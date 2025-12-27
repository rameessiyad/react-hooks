import React, { useEffect, useState } from "react";

const HookExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>seconds elapsed : {seconds}</p>
    </div>
  );
};

export default HookExample;
