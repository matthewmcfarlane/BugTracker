import { useState } from "react";

const AssigneeElements = ({ bug, onRemoveAssignee, bugIndex }) => {
  return bug.assignees.map((assignee, index) => {
    return (
      <div key={index} className="flex flex-col">
      <div>
        <div className="text-sm font-medium text-gray-900 dark:text-[#9c9c9c]"><b>{assignee.name}</b></div>
        <div className="text-sm text-gray-500 dark:text-[#9c9c9c]">{assignee.email}</div>
        </div>
        <button className="text-xs text-[#c4242c]" value={index} id={bugIndex} onClick={onRemoveAssignee}>
          Remove
        </button>
      </div>
    );
  });
};

export default AssigneeElements;
