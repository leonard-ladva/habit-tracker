import type { ReactElement } from "react";
import type { Habit } from "./habitsSlice";

export interface MonthlyViewProps {
  habit: Habit;
}

function daysInCurrentMonth() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
}

function MonthlyView(props: MonthlyViewProps) {
  //   const todayString = useMemo(() => {
  //     const date = new Date();
  //     return date.toLocaleDateString("en-US", {
  //       weekday: "long",
  //       day: "numeric",
  //       month: "long",
  //     });
  //   }, []);

  // based on current month render a box for each day and add them to a table row
  const days = daysInCurrentMonth();

  const renderedCells: ReactElement[] = [];
  for (let i = 0; i < days; i++) {
    renderedCells.push(
      <div className="h-6 w-6 rounded-sm bg-red-50" key={i}></div>,
    );
  }

  return (
    <div>
      <h3>{props.habit.name}</h3>
      <div className="inline-grid grid-cols-7 gap-2">{renderedCells}</div>
    </div>
  );
}

export default MonthlyView;
