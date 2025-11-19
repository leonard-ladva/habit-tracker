import type { ScreenProps } from "./types";
import "./NewHabitScreen.css";

function NewHabitScreen(props: ScreenProps) {
  return (
    <>
      <h2>New Habit</h2>
      <button onClick={() => props.goTo("edit")}>Edit</button>
      <button onClick={() => props.goTo("list")}>List</button>
      <form action="" className="flex flex-col gap-1 w-4/5 m-auto items-start">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Habit Name"/>
        <label htmlFor="">Type</label>
        <select name="" id="" disabled>
          <option value="daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <label htmlFor="color">Color</label>
        <div className="input-box">
          <input type="color" name="color" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default NewHabitScreen;
