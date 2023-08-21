import { useContext, useEffect } from "react";
import "../App.css";
import contextValue from "../context/notes/noteContext";
import AddNote from "./AddNote";

import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const context = useContext(contextValue);
  const { getNotes} = context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <AddNote showAlert={props.showAlert} />
    </>
  );
};

export default Notes;
