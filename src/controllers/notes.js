//require utils and other modules
const {
  getDataFromFile,
  writeDataToFile,
} = require("../utils/interactWithDataFile");
const { v4: uuidv4 } = require("uuid");

const getNotes = (req, res) => {
  try {
    //read from data file
    const notes = getDataFromFile("db");
    //send data as response
    return res.json(notes);
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const createNote = (req, res) => {
  try {
    //get data from db
    const notes = getDataFromFile("db");
    //get data from the user
    const { title, text } = req.body;
    //generate unique id
    const id = uuidv4();
    //write note into data file
    const newNote = { id, title, text };
    writeDataToFile("db", [newNote, ...notes]);
    //read from data file - is it needed?
    const updatedNotes = getDataFromFile("db");
    //send file as response - is it needed?
    return res.json(newNote);
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteNote = (req, res) => {
  try {
    //get data from db
    const notes = getDataFromFile("db");
    //get note id
    const { id } = req.params;
    //extract note from data
    const filteredNotes = notes.filter((note) => note.id !== id);
    //write updated data into data file
    writeDataToFile("db", filteredNotes);
    //read from data file (after update)
    const updatedNotes = getDataFromFile("db");
    //send file as response (updated file)
    return res.json({ message: "Note successfully deleted" });
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const editNote = (req, res) => {
  try {
    //get data from db
    const notes = getDataFromFile("db");
    //get updated data from the user
    const { id, title, text } = req.body;
    //get note id
    // const { id } = req.params;
    //find existing note in notes data
    const noteIndex = notes.findIndex((note) => note.id === id);
    //overwrite note with new data - directly into notes file
    notes[noteIndex].title = title;
    notes[noteIndex].text = text;
    //write updated data into data file
    writeDataToFile("db", notes);
    //read from data file (after update)
    const updatedNotes = getDataFromFile("db");
    //send file as response (updated file)
    return res.json({ message: "Note successfully updated" });
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { getNotes, createNote, deleteNote, editNote };
