import type { ReactElement } from "react";
import type { Habit } from "./habitsSlice";

export interface MonthlyViewProps {
  habit: Habit;
  daysInMonth: number;
  currentDate: Date;
}

function MonthlyView(props: MonthlyViewProps) {
  const renderedCells: ReactElement[] = [];
  const yearMonthString = `${props.currentDate.getFullYear()}-${props.currentDate.getMonth()}-`;
  // make a cell for each day of the month
  for (let i = 0; i < props.daysInMonth; i++) {
    // make a dateSting for each cell and if the habits logs include it then color the background
    const cellDateString = yearMonthString + String(i + 1).padStart(2, "0");
    const isCellColored = props.habit.logs.includes(cellDateString);

    renderedCells.push(
      <div
        className="h-6 w-6 rounded-sm bg-neutral-100"
        style={{
          backgroundColor: isCellColored ? props.habit.color : undefined,
        }}
        key={i}
      ></div>,
    );
  }

  return (
    <div>
      <h3 className="mb-3 text-3xl font-bold">{props.habit.name}</h3>
      <div
        className="inline-grid grid-cols-7 gap-2"
        // style={{ width: max-content }}
      >
        {renderedCells}
      </div>
    </div>
  );
}

export default MonthlyView;
