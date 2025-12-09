import { type PropsWithChildren } from "react";
import "./Sidepanel.css";
import HabitsListScreen from "./screens/HabitsListScreen";
import HabitsFormScreen from "./screens/HabitsFormScreen";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectMode, setSidepanelMode, stopEditing } from "./sidepanelUiSlice";

type SidepanelProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidepanel(props: PropsWithChildren<SidepanelProps>) {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  let screen = <HabitsListScreen />;
  if (mode === "new" || mode === "edit") {
    screen = <HabitsFormScreen />;
  }
  const closeSidepanel = () => {
    dispatch(stopEditing());
    props.setIsOpen(false);
  };

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          props.isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => closeSidepanel()}
      />
      {/*  sidepanel */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 flex-col bg-white shadow-lg transition-transform duration-300 ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-12 flex flex-col items-center gap-4">
          {/* content */}
          <button
            className="back-button"
            onClick={() => {
              if (mode === "new" || mode === "edit") {
                dispatch(setSidepanelMode("list"));
                dispatch(stopEditing());
                return;
              }
              closeSidepanel();
            }}
          >
            Back
          </button>
          {screen}
        </div>
      </div>
    </>
  );
}

export default Sidepanel;
