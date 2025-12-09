import "./HabitsFormScreen.css";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  create,
  remove,
  selectHabitsById,
  update,
} from "@/features/habitsSlice";
import { selectEditingId, stopEditing } from "../sidepanelUiSlice";

function HabitsFormScreen() {
  const dispatch = useAppDispatch();
  const editingId = useAppSelector(selectEditingId);
  const habit = useAppSelector((state) => selectHabitsById(state, editingId));

  function submit(formData: FormData) {
    const name = formData.get("name") as string;
    const color = formData.get("color") as string;

    if (habit === null || habit === undefined) {
      dispatch(create({ name: name, color: color, logs: [] }));
    } else {
      dispatch(
        update({ id: habit.id, name: name, color: color, logs: habit.logs }),
      );
    }
    dispatch(stopEditing());
  }

  return (
    <>
      <h2>{habit ? "Edit Habit" : "New Habit"}</h2>
      <form
        action={submit}
        className="m-auto flex w-4/5 flex-col items-start gap-1"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Habit Name"
          defaultValue={habit?.name ?? ""}
        />
        <label htmlFor="color">Color</label>
        <div className="input-box">
          <input type="color" name="color" defaultValue={habit?.color ?? ""} />
        </div>
        <div className="flex w-full justify-evenly">
          <button type="submit">Save</button>
          {habit != null && habit != undefined ? (
            <button
              onClick={() => {
                dispatch(remove(habit));
                dispatch(stopEditing());
              }}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </>
  );
}

export default HabitsFormScreen;
