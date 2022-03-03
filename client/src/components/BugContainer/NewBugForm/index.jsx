import { useEffect, useState } from "react";
import { postBug } from "../../../services/BugsService";

const NewBugForm = ({ onBugAddition }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [reporter, setReporter] = useState("");
  
    useEffect(() => {
      getAllUsers();
    }, []);
  
    const getAllUsers = () => {
      fetch("http://localhost:9090/users")
        .then((result) => result.json())
        .then((data) => setAllUsers(data));
    };
  
    const userOptions = allUsers.map((user, index) => {
      return (
        <option value={index} key={index}>
          {user.name}
        </option>
      );
    });
  
    const onChange = (event) => {
      if (event.target.id === "description") {
        setDescription(event.target.value);
      } else if (event.target.id === "priority") {
        setPriority(event.target.value);
      } else if (event.target.id === "reporter") {
        setReporter(event.target.value);
      }
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      if (priority && reporter) {
        postBug(
          {
            description: description,
            priority: priority,
          },
          allUsers[reporter]
        );
        const newBug = {
          description: description,
          priority: priority,
          reporter: allUsers[reporter],
        };
        onBugAddition(newBug);
        setDescription("");
        setPriority("");
        setReporter("");
      }
    };
  
    return (
      // <form onSubmit={onSubmit} method="post">
      //     <label htmlFor="description">Bug Description:</label>
      //     <input
      // onChange={onChange}
      // type="text"
      // id="description"
      // value={description}
      // required
      //     />
  
      //     <label htmlFor="priorty">Severity:</label>
      //     <select
      //     onChange={onChange}
      //     id="priority"
      //     value={priority}
      //     required
      //     >
      //         <option value="">Select an option...</option>
      //         <option value="high">High</option>
      //         <option value="medium">Medium</option>
      //         <option value="low">Low</option>
      //     </select>
  
      //     <label htmlFor="reporter">Reported By:</label>
      //     <select
      //     onChange={onChange}
      //     id="reporter"
      //     value={reporter}
      //     required
      //     >
      //     <option value="">Select a user...</option>
      //         {userOptions}
      //     </select>
  
      //     <input type="submit" value="Save" id="save"/>
      // </form>
  
<>





      <form onSubmit={onSubmit} class="blur-none w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
            {/* <h3 className="">Post a bug!</h3> */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-[#9c9c9c] text-xs font-bold mb-2"
              htmlFor="description"
            >
              Short Description:
            </label>
            <input
              onChange={onChange}
              type="text"
              id="description"
              value={description}
              required
              class="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-[#9c9c9c] solid border-0 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 dark:text-[#9c9c9c] text-xs font-bold mb-2"
              htmlFor="priorty"
            >
              Severity:
            </label>
            <select
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 dark:text-[#9c9c9c] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={onChange}
              id="priority"
              value={priority}
              required
            >
              <option value="">Select an option...</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs dark:text-[#9c9c9c] font-bold mb-2"
              htmlFor="reporter"
            >
              Reported By:
            </label>
            <select
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={onChange}
              id="reporter"
              value={reporter}
              required
            >
              <option value="">Select a user...</option>
              {userOptions}
            </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="rounded w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <button type="submit" value="Save" id="save" className="bg-[#7e44ee] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Submit
          </button>
      
          </div>
        </div>
      </form>

    

      </>
    );
  };
  
  export default NewBugForm;
  