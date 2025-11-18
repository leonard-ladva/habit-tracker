import type { ScreenProps } from "./types";

function HabitNewScreen(props: ScreenProps) {
  return (
    <>
      <h2>New Habit</h2>
	  <button onClick={() => props.goTo("edit")}>Edit</button>
	  <button onClick={() => props.goTo("list")}>List</button>
    </>
  );
}

export default HabitNewScreen;
