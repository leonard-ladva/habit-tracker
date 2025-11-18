import { useMemo, useState } from "react";
import "./App.css";
import Sidepanel from "./components/Sidepanel/Sidepanel";

function App() {
  const [sidepanelOpen, setSidepanelOpen] = useState(false);

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
      <button id="sidepanel-open-button" onClick={() => setSidepanelOpen(true)}>
        Edit
      </button>
      <h1 id="today-heading">{todayString}</h1>
      <Sidepanel isOpen={sidepanelOpen} setIsOpen={setSidepanelOpen} />
    </>
  );
}

export default App;
