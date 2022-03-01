import { useState } from "react";

const AssigneeElements = ({ bug, onRemoveAssignee, bugIndex }) => {

  return bug.assignees.map((assignee, index) => {
    return(
      <div key={index}>
        <div className="text-sm font-medium text-gray-900">
          {assignee.name}
        </div>
        <div className="text-sm text-gray-500">
          {assignee.email}
        </div>
        <button value={index} id={bugIndex} onClick={onRemoveAssignee}>trash symbol</button>
      </div>
    )
  });
}

export default AssigneeElements;