import "./MonthlyView.css";
import type { ReactElement } from "react";
import { addLog, removeLog, type Habit } from "../../habitsSlice";
import { useAppDispatch } from "@/app/hooks";

export interface MonthlyViewProps {
  habit: Habit;
  daysInMonth: number;
  currentDate: Date;
}

function MonthlyView(props: MonthlyViewProps) {
  const dispatch = useAppDispatch();
  const renderedCells: ReactElement[] = [];
  const yearMonthString = `${props.currentDate.getFullYear()}-${props.currentDate.getMonth()}-`;

  const handleAdd = (date: string) => {
    console.log("add 1");
    dispatch(
      addLog({
        habitName: props.habit.name,
        date,
      }),
    );
  };

  const handleRemove = (date: string) => {
    console.log("remove");
    dispatch(
      removeLog({
        habitName: props.habit.name,
        date,
      }),
    );
  };

  // make a cell for each day of the month
  for (let i = 0; i < props.daysInMonth; i++) {
    const cellDateString = yearMonthString + String(i + 1).padStart(2, "0");
    const isCellLogged = props.habit.logs.includes(cellDateString);
    const onClick = isCellLogged ? handleRemove : handleAdd;

    const isTodaysCell = props.currentDate.getDate() == i + 1;

    // let backgroundColor = undefined;
    const backgroundColor = isCellLogged ? props.habit.color : undefined;
    // if (isCellLogged) {
    //   backgroundColor = props.habit.color;
    // }

    if (isTodaysCell) {
      renderedCells.push(
        <div
          className="cell h-6 w-6 rounded-full bg-neutral-100"
          style={{
            backgroundColor: backgroundColor,
          }}
          onClick={() => onClick(cellDateString)}
          key={i}
        ></div>,
      );
      continue;
    }

    renderedCells.push(
      <div
        className="cell h-6 w-6 rounded-sm bg-neutral-100"
        style={{
          backgroundColor: backgroundColor,
        }}
        onClick={() => onClick(cellDateString)}
        key={i}
      ></div>,
    );
  }

  return (
    <div>
      <h3 className="mb-3 text-3xl font-bold">{props.habit.name}</h3>
      <div className="inline-grid grid-cols-7 gap-2">{renderedCells}</div>
    </div>
  );
}

export default MonthlyView;
