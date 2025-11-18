import type { ScreenProps } from "./types";

function HabitsListScreen(props: ScreenProps) {
  return (
    <>
      <h2>Edit Habits</h2>
	  <button onClick={() => props.goTo("edit")}>Edit</button>
	  <button onClick={() => props.goTo("new")}>New</button>
    </>
  );
}

export default HabitsListScreen;
