import type { ScreenProps } from "./types";
import "./NewHabitScreen.css";
import { habitsSlice } from "../../habits/habitsSlice";
import { store } from "../../../app/store";

function NewHabitScreen(props: ScreenProps) {
  function submit(formData: FormData) {
    const name = formData.get("name") as string;
    const color = formData.get("color") as string;
    console.log(name, color);
    store.dispatch(
      habitsSlice.actions.create({ name: name, color: color, logs: [] }),
    );
    // after submit go to list
    props.goTo("list");
  }

  return (
    <>
      <h2>New Habit</h2>
      <form
        action={submit}
        className="m-auto flex w-4/5 flex-col items-start gap-1"
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Habit Name" />
        {/* <label htmlFor="">Type</label>
        <select name="" id="" disabled>
          <option value="daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select> */}
        <label htmlFor="color">Color</label>
        <div className="input-box">
          <input type="color" name="color" />
        </div>
        <button type="submit" className="self-center">
          Save
        </button>
      </form>
    </>
  );
}

export default NewHabitScreen;
