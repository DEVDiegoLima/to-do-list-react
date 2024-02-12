import "./style.css";
import { CiSquarePlus } from "react-icons/ci";

interface TaskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTask: () => void;
}

export function Task({ value, onChange, onTask }: TaskProps) {
  return (
    <>
      <div className="container">
        <div className="task-content">
          <input
            type="text"
            className="seach-task"
            placeholder="Enter your task"
            value={value}
            onChange={onChange}
          />
          <button className="add-icon" onClick={onTask}>
            <CiSquarePlus />
          </button>
        </div>
      </div>
    </>
  );
}
