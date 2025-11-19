import { useAppSelector } from "../../../app/hooks";
import type { ScreenProps } from "./types";

function ListHabitsScreen(props: ScreenProps) {
	const habits = useAppSelector(state => state.habits.value)

  const renderedHabits = habits.map(habit => (
    <article className="post-excerpt" key={habit.name}>
      <h3>{habit.name}</h3>
      <p className="post-content">{habit.color}</p>
    </article>
  ))
  return (
    <>
      <h2>Edit Habits</h2>
	  <button onClick={() => props.goTo("edit")}>Edit</button>
	  <button onClick={() => props.goTo("new")}>New</button>
	  {renderedHabits}
    </>
  );
}

export default ListHabitsScreen;
