import "./Sidepanel.css";

type SidepanelProps = {
  isOpen: boolean;
};

function Sidepanel({ isOpen }: SidepanelProps) {
  if (!isOpen) return <></>;

  return (
    <div className={'sidepanel' + (isOpen ? ' open' : '')}>
      <h2>Edit Habits</h2>
      <ul>
        <li>Habit 1</li>
        <li>Habit 2</li>
        <li>Habit 3</li>
        <li>Habit 4</li>
        <li>Habit 5</li>
        <li>Habit 6</li>
      </ul>
    </div>
  );
}

export default Sidepanel;
