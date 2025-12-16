import { useEffect, useState } from "react";

function ClockPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Текущее время</h1>
      <h2>
        {time.toLocaleTimeString()}
      </h2>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default ClockPage;
