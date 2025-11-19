import { useAppSelector } from "../../../app/hooks";
import type { ScreenProps } from "./types";

function ListHabitsScreen(props: ScreenProps) {
  const habits = useAppSelector((state) => state.habits.value);

  const renderedHabits = habits.map((habit) => (
    <li className="m-auto flex h-12 w-4/5 list-none items-center gap-4 border-b border-gray-200 bg-neutral-100 px-4 py-2 text-2xl font-extrabold first:rounded-t-2xl last:rounded-b-2xl last:border-none hover:bg-neutral-200">
      <div
        className={"h-4 w-4 rounded-full"}
        style={{ backgroundColor: habit.color }}
      ></div>
      <p>{habit.name}</p>
    </li>
  ));
  return (
    <>
      <h2>Edit Habits</h2>
      <button onClick={() => props.goTo("edit")}>Edit</button>
      <button onClick={() => props.goTo("new")}>New</button>

      <ul className="gap-none flex-col">{renderedHabits}</ul>
    </>
  );
}

export default ListHabitsScreen;
