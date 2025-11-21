import { useMemo, useState } from "react";
import "./App.css";
import Sidepanel from "./features/sidepanel/Sidepanel";
import Overview from "./features/overview/Overview";

function App() {
  const [sidepanelOpen, setSidepanelOpen] = useState(false);

  const currentDate = useMemo(() => new Date(), []);

  return (
    <>
      <button id="sidepanel-open-button" onClick={() => setSidepanelOpen(true)}>
        Edit
      </button>
      <Overview currentDate={currentDate}></Overview>
      <Sidepanel isOpen={sidepanelOpen} setIsOpen={setSidepanelOpen} />
    </>
  );
}

export default App;
