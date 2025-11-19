import MonthlyView from "../habits/monthlyView";

function Overview() {
  const newHabit = { name: "hello", color: "#f5f6f8", logs: [] };
  // for each habit create a monthlyView
  return (
    <>
      <MonthlyView habit={newHabit}></MonthlyView>
    </>
  );
}

export default Overview;
