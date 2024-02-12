import "./style.css";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

interface ListProps {
  list: string[];
  onAddTask: () => void;
}

export function TaskList({ list }: ListProps) {
  return (
    <>
      <div className="container">
        <div className="taskList-content">
          <ul className="list">
          {list.map((task, index) => (
              <li className="list-item" key={index}>
                <button className="checkIcon">
                  <FaCheckCircle />
                </button>
                {task}
                <button className="trashIcon">
                  <FaRegTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
