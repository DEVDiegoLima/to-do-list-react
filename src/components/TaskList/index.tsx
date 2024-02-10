import "./style.css";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";
export function TaskList() {
  return (
    <>
      <div className="container">
        <div className="taskList-content">
          <ul className="list">
            <li className="list-item">
              <button className="checkIcon">
                <FaCheckCircle />
              </button>
              I want to buy computer
              <button className="trashIcon">
                <FaRegTrashAlt />
              </button>
            </li>
            <li className="list-item">
              <button className="checkIcon">
                <FaCheckCircle />
              </button>
              I want to buy computer
              <button className="trashIcon">
                <FaRegTrashAlt />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
