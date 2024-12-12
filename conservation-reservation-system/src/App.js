import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ConfirmationPage from "./pages/ConfirmationPage";
import Notes from "./pages/Notes";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Visitor",
      notes: [{ text: "Check weather before visit", done: false }],
      newNoteText: "",
    };
  }

  updateNewNoteText = (event) => {
    this.setState({ newNoteText: event.target.value });
  };

  createNewNote = () => {
    if (
      this.state.newNoteText &&
      !this.state.notes.find((note) => note.text === this.state.newNoteText)
    ) {
      this.setState({
        notes: [...this.state.notes, { text: this.state.newNoteText, done: false }],
        newNoteText: "",
      });
    }
  };

  toggleNoteDone = (index) => {
    const updatedNotes = [...this.state.notes];
    updatedNotes[index].done = !updatedNotes[index].done;
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <Router>
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            {this.state.userName}'s Reservation System
          </h4>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/notes" element={<Notes />} />
            <Route
              path="/confirmation"
              element={
                <ConfirmationPage
                  notes={this.state.notes}
                  createNewNote={this.createNewNote}
                  updateNewNoteText={this.updateNewNoteText}
                  newNoteText={this.state.newNoteText}
                  toggleNoteDone={this.toggleNoteDone}
                />
              }
            />
          </Routes>
          <Notes
            notes={this.state.notes}
            createNewNote={this.createNewNote}
            updateNewNoteText={this.updateNewNoteText}
            newNoteText={this.state.newNoteText}
            toggleNoteDone={this.toggleNoteDone}
          />
        </div>
      </Router>
    );
  }
}