import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(time);
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((t) => {
  //       console.log(t);
  //       return t + 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <div>Timer: {time}</div>;
}
