import "./style.css";
import { CiSquarePlus } from "react-icons/ci";
export function Task() {
  return (
    <>
      <div className="container">
        <div className="task-content">
          <input
            type="text"
            className="seach-task"
            placeholder="Enter your task"
          />
          <button className="add-icon">
            <CiSquarePlus />
          </button>
        </div>
      </div>
    </>
  );
}
