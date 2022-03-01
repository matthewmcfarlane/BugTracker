import { useState } from "react";

const AssigneeElements = ({ bug }) => {

  return bug.assignees.map((assignee, index) => {
    return(
      <div key={index}>
        <div className="text-sm font-medium text-gray-900">
          {assignee.name}
        </div>
        <div className="text-sm text-gray-500">
          {assignee.email}
        </div>
      </div>
    )
  });
}

export default AssigneeElements;