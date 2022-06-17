const path = require("path");

const renderStartPage = (req, res) => {
  try {
    //send file as response
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

const renderNotesPage = (req, res) => {
  try {
    //send file as response
    return res.sendFile(path.join(__dirname, "../../public/notes.html"));
  } catch (error) {
    console.log("[ERROR] : Internal Server error");
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { renderStartPage, renderNotesPage };
