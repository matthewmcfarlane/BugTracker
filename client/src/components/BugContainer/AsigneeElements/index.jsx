import { useState } from "react";

const AssigneeElements = ({ bug, onRemoveAssignee, bugIndex }) => {
  return bug.assignees.map((assignee, index) => {
    return (
      <div key={index} className="flex flex-wrap">
      <div>
        <div className="text-sm font-medium text-gray-900">{assignee.name}</div>
        <div className="text-sm text-gray-500">{assignee.email}</div>
        </div>
        <button className="text-xs" value={index} id={bugIndex} onClick={onRemoveAssignee}>
          ❌
        </button>
      </div>
    );
  });
};

export default AssigneeElements;
