const path = require("path");

const renderStartPage = (req, res) => {
  try {
    //get file path
    //send file as response
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const renderNotesPage = (req, res) => {
  try {
    //get file path
    //send file as response
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { renderStartPage, renderNotesPage };
