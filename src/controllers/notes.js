//require utils and other modules
const {
  getDataFromFile,
  writeDataToFile,
} = require("../utils/interactWithDataFile");

const getNotes = (req, res) => {
  try {
    //get file path to data file
    //read from data file
    //send data as response
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const createNote = (req, res) => {
  try {
    //get file path to data file
    //write note into data file
    //read from data file
    //send file as response
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const deleteNote = (req, res) => {
  try {
    //get file path to data file
    //read from data file
    //get note id
    //extract note from data
    //write updated data into data file
    //read from data file (after update)
    //send file as response (updated file)
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const getNote = (req, res) => {
  try {
    //get file path to data file
    //get note id
    //read from data file
    //send 1 note as response
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const editNote = (req, res) => {
  try {
    //get file path to data file
    //read from data file
    //get note id
    //overwrite note with new data
    //write updated data into data file
    //read from data file (after update)
    //send file as response (updated file)
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { getNotes, createNote, deleteNote, getNote, editNote };
