import React, { useState } from "react";
import { Notes } from "../components/Notes";
import { VideoPlayer } from "../components/VideoPlayer";
import { Link, useNavigate } from "react-router-dom";
import '../css/Notes.css';


const Dashboard = ({setLoginUser}) => {
  const navigation = useNavigate()
  const [notes, setNotes] = useState([]);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitNote = (e) => {
    e.preventDefault();

    setNotes((prev) => [...prev, note]);

    setNote({ title: "", content: "" });
  };

  return (
    <>
    <div className="bodie">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/clock">Pomodoro</Link>
    <button className="btn btn-light" style={{width:"auto",height:"auto", backgroundColor:"red" }}onClick={() => { setLoginUser({}); navigation("/") }}>Logout</button>
  </div>
</nav>

      <VideoPlayer />
      <div className="comp">
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />

      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={submitNote} class="btn btn-success" style={{width:"auto",height:"auto", backgroundColor:"green" }}>Add</button>
      </div>


      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      </div>
    </>
  );
};

export default Dashboard;
