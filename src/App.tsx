import { useMemo, useState } from "react";
import "./App.css";
import Sidepanel from "./features/sidepanel/Sidepanel";
import Overview from "./features/overview/Overview";
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
      <Overview></Overview>
      <Sidepanel isOpen={sidepanelOpen} setIsOpen={setSidepanelOpen} />
    </>
  );
}

export default App;
