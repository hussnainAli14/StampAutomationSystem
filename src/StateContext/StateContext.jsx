import { useState, createContext } from "react";
// import LogInContext from "./loginCotext";
 const State = createContext();

const StateContext = (props) => {
  const [notification, setNotification] = useState([]);

//   const [formData, setFormData] = useState({});

  return (
    <State.Provider value={{notification,setNotification }}>
      {props.children}
    </State.Provider>
  );
};

export default StateContext;
