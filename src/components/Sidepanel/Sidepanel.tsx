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
    new: <HabitNewScreen goTo={setScreen}/>,
    edit: <HabitsEditScreen goTo={setScreen}/>,
  };

  if (!props.isOpen) return <></>;

  return (
    <div className={"sidepanel" + (props.isOpen ? " open" : "")}>
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
  );
}

export default Sidepanel;
