import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NewBugForm from "../NewBugForm";
import BugRows from "../BugRows";
import { filterByPriority, filterByActive, sortByDate, sortByPriority, filterByUser  } from "../../../services/SortAndFilter";
import { deleteBug, patchBug } from "../../../services/BugsService";

const BugTable = ({ foundUserSub }) => {
  const { user } = useAuth0();
  const [allBugs, setAllBugs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [bugsToRender, setBugsToRender] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState("clear");
  const [activeFilter, setActiveFilter] = useState("clear");
  const [dateSort, setDateSort] = useState("clear");
  const [prioritySort, setPrioritySort] = useState("clear");
  const [isAddingBug, setIsAddingBug] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [addUserFieldValue, setAddUserFieldValue] = useState("");

  const [checked, setChecked] = useState(
    new Array({allBugs}.length).fill(false)
  );

  const onRemoveAssignee = (event) => {
    const assigneeIndex = event.target.value;
    const editedBug = bugsToRender[event.target.id];

    const editedBugIndex = allBugs.indexOf(editedBug);

    editedBug.assignees.splice(assigneeIndex, 1);
    patchBug(editedBug);

    const newBugList = [...allBugs];
    newBugList[editedBugIndex] = editedBug;
    setAllBugs(newBugList);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:9090/users")
      .then((result) => result.json())
      .then((data) => setAllUsers(data));
  };

  const onBugAddition = (newBug) => {
    //Generate date to display
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + mm + dd;

    //Fill in missing fields to allow render
    newBug['dateReported'] = today;
    newBug['assignees'] = [];
    newBug['active'] = true;

    const updatedBugs = [...allBugs, newBug];
    setAllBugs(updatedBugs);
  }

  const onAddAssignee = (event) => {
    const editedBug = bugsToRender[event.target.id];
    const newAssigneeId = event.target.value;
    for(const user of allUsers){
      if(user.id == newAssigneeId){
        var newAssignee = user;
        break;
      }
    }
    editedBug.assignees.push(newAssignee);
    patchBug(editedBug);
    const updatedList = [...allBugs];
    const bugIndex = updatedList.findIndex(bug => bug.id = editedBug.id);
    updatedList[bugIndex] = editedBug;
    setAllBugs(updatedList);
    setAddUserFieldValue("");
  }

  useEffect(() => {
    getAllBugs();
  }, []);

  useEffect(() => {
    setBugsToRender(allBugs);
    setActiveFilter("clear");
    setPriorityFilter("clear");
    setDateSort("clear");
    setPrioritySort("clear");
  }, [allBugs]);

  const getAllBugs = () => {
    fetch("http://localhost:9090/bugs")
    .then((result) => result.json())
    .then((data) => {
      setAllBugs(filterByUser(data, foundUserSub));
      setBugsToRender(filterByUser(data, foundUserSub));
    });
  };

  const handleEditingClick = () => {
    if (isEditing == false) {
      setIsEditing(true)
    } else {
      setIsEditing(false);
    }
  }

  const handleChangePriority = (event) => {
    const editedBug = bugsToRender[event.target.id];
    const editedBugIndex = allBugs.indexOf(editedBug);
    const updatedList = [...allBugs];
    updatedList[editedBugIndex].priority = event.target.value;
    setAllBugs(updatedList);
    patchBug(editedBug);
  }

  const handleOnChange = (position) => {
    const updatedCheckState = checked.map((item, index) =>
    index === position ? !item : item
    );

    setChecked(updatedCheckState);
  };

  const handleToggleActive = (event) => {

    //Find toggled bug and flip value
    const toggledBug = bugsToRender[event.target.value];
    const toggledBugIndex = allBugs.indexOf(toggledBug);
    toggledBug.active = !toggledBug.active;

    const updatedBugsList = [...allBugs];
    updatedBugsList[toggledBugIndex] = toggledBug;
    patchBug(toggledBug)
    .then(setAllBugs(updatedBugsList));
  }

  const removeBug = (id) => {
    const temp = allBugs.map(s => s);
    const indexToDel = temp.map(s => s.id).indexOf(id);
    
    temp.splice(indexToDel, 1);
    setAllBugs(temp);
    deleteBug(id);
  }

  const toggleAdding = () => {
    isAddingBug == false ? setIsAddingBug(true) : setIsAddingBug(false)
  }

  const onFilterByPriority = (event) => {
    setPriorityFilter(event.target.value);
    setActiveFilter("clear");
    setDateSort("clear");
    setPrioritySort("clear");
    if (event.target.value === "clear"){
      setBugsToRender(allBugs);
    }
    else{
      setBugsToRender(filterByPriority(allBugs, event.target.value));
    }
  } 

  const onFilterByActive = (event) => {
    const selectedOption = event.target.value;
    setActiveFilter(selectedOption);
    setPriorityFilter("clear");
    setDateSort("clear");
    setPrioritySort("clear");
    if (selectedOption === "clear"){
      setBugsToRender(allBugs);
    }
    else{
      setBugsToRender(filterByActive(allBugs, (selectedOption === "true")));
    }
  }

  const onSortByDate = (event) => {
    setPrioritySort("clear");
    setDateSort(event.target.value);
    setBugsToRender(sortByDate(bugsToRender, (event.target.value === "newestFirst")));
  }

  const onSortByPriority = (event) => {
    setDateSort("clear");
    setPrioritySort(event.target.value);
    setBugsToRender(sortByPriority(bugsToRender, (event.target.value === "highestFirst")));
  }

  return (


    <div className='bg-gray-50 dark:bg-[#121317] pl-72 pt-24 pb-8 pr-10 w-full h-full min-h-screen shadow-lg flex flex-row'>

    <div className='w-full h-full min-h-screen' >

    <h1 className="my-6 text-2xl font-semibold text-[#24262d] dark:text-[#e5e7eb]">My Issues</h1>



    <div className={`${isAddingBug == true ? 'backdrop-blur-xl' : ''}`}>
    <div className="flex flex-col dark:text-white">
      <div className="flex flex-row">
        <div className="ml-2 mt-2 mb-2 flex flex-wrap justify-between">
        <div className="">
        <label className="sort-labels">Filter by:</label> 
          <select value={priorityFilter} onChange={onFilterByPriority} className="filter-dropdown">
            <option value="clear" disabled hidden>
              Priority
            </option>
            <option value="clear">show all</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
          <select value={activeFilter} onChange={onFilterByActive} className="filter-dropdown">
            <option value="clear" disabled hidden>
              Status
            </option>
            <option value="clear">show all</option>
            <option value="true">open</option>
            <option value="false">closed</option>
          </select>
          </div>
          <div className="flex">
          <label className="sort-labels">Sort by:</label>
          <select value={dateSort} onChange={onSortByDate} className="filter-dropdown">
  
            <option value="clear" disabled hidden>
              Date
            </option>
            <option value="newestFirst">newest first</option>
            <option value="oldestFirst">oldest first</option>
          </select>
          <select value={prioritySort} onChange={onSortByPriority} className="filter-dropdown">
            <option value="clear" disabled hidden>
              Priority
            </option>
            <option value="highestFirst">highest first</option>
            <option value="lowestFirst">lowest first</option>
          </select>
          </div>
          {/* {isEditing == true ? 
          <button onClick={() => removeBug()}>Remove Bugs</button>
          : isEditing == false} */}
        </div>
        {/* <div>
          <button onClick={() => handleEditingClick()} className="mt-2 mb-2 bg-orange-400 rounded hover:bg-orange-600 p-2 ">
            Edit
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => {toggleAdding()}} className="font-zappr text-4xl bg-orange-400 rounded mt-2 mb-2 ml-1 hover:bg-orange-600 p-2 w-10">+</button>
        </div> */}
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white dark:bg-[#1a1c23] shadow-xl">
              <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Assignees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Reporter
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>

                <BugRows
                bugsToRender={bugsToRender}
                isEditing={isEditing}
                checked={checked}
                handleOnChange={handleOnChange}
                handleToggleActive={handleToggleActive}
                removeBug={removeBug}
                handleChangePriority={handleChangePriority}
                onAddAssignee={onAddAssignee}
                allUsers={allUsers}
                addUserFieldValue={addUserFieldValue}
                onRemoveAssignee={onRemoveAssignee}
                />
              </thead>
              <tbody className="bg-white divide-y divide-gray-200"></tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BugTable;