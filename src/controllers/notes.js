//require utils and other modules
const {
  getDataFromFile,
  writeDataToFile,
} = require("../utils/interactWithDataFile");

const getNotes = () => {
  //get file path to data file
  //read from data file
  //send data as response
};

const createNote = () => {
  //get file path to data file
  //write note into data file
  //read from data file
  //send file as response
};

const deleteNote = () => {
  //get file path to data file
  //read from data file
  //get note id
  //extract note from data
  //write updated data into data file
  //read from data file (after update)
  //send file as response (updated file)
};

const getNote = () => {
  //get file path to data file
  //get note id
  //read from data file
  //send 1 note as response
};

const editNote = () => {
  //get file path to data file
  //read from data file
  //get note id
  //overwrite note with new data
  //write updated data into data file
  //read from data file (after update)
  //send file as response (updated file)
};

module.exports = { getNotes, createNote, deleteNote, getNote, editNote };
