import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Task({ taskIndex, colIndex }) {
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  const columns = board.columns;
  const col = columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  return <div>Task</div>;
}

export default Task;
