import { useState, type JSX, type PropsWithChildren } from "react";
import "./Sidepanel.css";
import HabitsListScreen from "./Screens/HabitsListScreen";
import HabitNewScreen from "./Screens/HabitNewScreen";
import HabitsEditScreen from "./Screens/HabitsEditScreen";
import type { Screen } from "./Screens/types";

type SidepanelProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidepanel(props: PropsWithChildren<SidepanelProps>) {
  const [screen, setScreen] = useState<Screen>("list");

  const screens: Record<Screen, JSX.Element> = {
    list: <HabitsListScreen goTo={setScreen} />,
    new: <HabitNewScreen goTo={setScreen} />,
    edit: <HabitsEditScreen goTo={setScreen} />,
  };

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          props.isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => props.setIsOpen(false)}
      />
      {/* drawer panel */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* content */}
        <button
          className="back-button"
          onClick={() => {
            if (screen == "list") {
              props.setIsOpen(false);
            } else {
              setScreen("list");
            }
          }}
        >
          Back
        </button>
        {screens[screen]}
      </div>
    </>
  );
}

export default Sidepanel;
