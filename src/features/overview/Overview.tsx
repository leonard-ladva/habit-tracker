import { useAppSelector } from "@/app/hooks";
import MonthlyView from "@/features/overview/monthlyView/MonthlyView";
import { selectHabits } from "@/features/habitsSlice";

export interface OverviewProps {
  currentDate: Date;
}

function daysInAMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function Overview(props: OverviewProps) {
  const todayString = props.currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  //   const habits = store.getState().habits.value;
  const habits = useAppSelector(selectHabits);
  const daysInMonth = daysInAMonth(props.currentDate);

  const renderedMonths = habits.map((habit) => (
    <MonthlyView
      habit={habit}
      daysInMonth={daysInMonth}
      currentDate={props.currentDate}
      key={habit.name}
    ></MonthlyView>
  ));

  // for each habit create a monthlyView
  return (
    <>
      <h1 id="today-heading">{todayString}</h1>
      {renderedMonths.length == 0 ? (
        <>
          <h3 className="mt-20 text-3xl font-bold">You have no habits yet</h3>
          <p>Add some from the sidepanel</p>
        </>
      ) : (
        renderedMonths
      )}
    </>
  );
}

export default Overview;
