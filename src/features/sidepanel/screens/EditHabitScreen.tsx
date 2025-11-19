import type { ScreenProps } from "./types";

function EditHabitScreen(props: ScreenProps) {
  return (
    <>
      <h2>Reading</h2>
	  <button onClick={() => props.goTo("new")}>New</button>
	  <button onClick={() => props.goTo("list")}>List</button>
    </>
  );
}

export default EditHabitScreen;
