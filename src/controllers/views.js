const path = require("path");
const { getDataFromFile } = require("../utils/interactWithDataFile");

const renderStartPage = (req, res) => {
  try {
    console.log("time to render the start page");
    //get file path
    //send file as response
    return res.status(200).json({ message: "will render the start page" });
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const renderNotesPage = (req, res) => {
  try {
    console.log("time to render the notes page");
    //get file path
    const notes = getDataFromFile("db");
    //send file as response
    return res.json({ notes });
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { renderStartPage, renderNotesPage };
