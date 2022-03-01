import React from "react";

const BugAssigneeElements = ({bug}) => {
    return bug.assignees.map((assignee, index) => {
      <>
        {/* <div className="text-sm font-medium text-gray-900"> */}
          {assignee.name}
        {/* </div> */}
        {/* <div className="text-sm text-gray-500"> */}
          {assignee.email}
        {/* </div> */}
      </>
    })
  }

export default BugAssigneeElements;