import React, { useState } from "react";
import "../pages/Notes.css"; // Optional CSS file for custom styling

const Notes = () => {
  const [notes, setNotes] = useState([
    { text: "Check park rules before visiting", done: false },
    { text: "Pack a lunch for the trip", done: false },
    { text: "Bring hiking boots", done: true },
  ]);
  const [newNoteText, setNewNoteText] = useState("");

  const handleInputChange = (event) => {
    setNewNoteText(event.target.value);
  };

  const addNote = () => {
    if (newNoteText.trim() && !notes.some((note) => note.text === newNoteText)) {
      setNotes([...notes, { text: newNoteText, done: false }]);
      setNewNoteText("");
    }
  };

  const toggleNoteDone = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].done = !updatedNotes[index].done;
    setNotes(updatedNotes);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white text-center">
          <h4>Reservation Notes</h4>
        </div>
        <div className="card-body">
          {/* Input Section */}
          <div className="mb-3">
            <label htmlFor="noteInput" className="form-label">
              Add a New Note
            </label>
            <div className="input-group">
              <input
                type="text"
                id="noteInput"
                className="form-control"
                placeholder="Enter a note..."
                value={newNoteText}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-success"
                onClick={addNote}
                disabled={!newNoteText.trim()}
              >
                Add
              </button>
            </div>
          </div>

          {/* Notes List */}
          {notes.length > 0 ? (
            <ul className="list-group">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    note.done ? "list-group-item-success" : ""
                  }`}
                >
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={note.done}
                      onChange={() => toggleNoteDone(index)}
                    />
                    <span
                      style={{
                        textDecoration: note.done ? "line-through" : "none",
                      }}
                    >
                      {note.text}
                    </span>
                  </div>
                  {note.done && (
                    <span className="badge bg-success">Completed</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted text-center">No notes available. Add a note above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;