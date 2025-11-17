import { useMemo } from "react";
import "./App.css";

function App() {
  const todayString = useMemo(() => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }, []);

  return (
    <>
      <h1 id="todayHeading">{todayString}</h1>
    </>
  );
}

export default App;
