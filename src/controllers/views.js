const path = require("path");

const renderStartPage = (req, res) => {
  try {
    //send file as response
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(`${error.message}`);
    return res.sendFile(path.join(__dirname, "../../public/error.html"));
  }
};

const renderNotesPage = (req, res) => {
  try {
    //send file as response
    return res.sendFile(path.join(__dirname, "../../public/notes.html"));
  } catch (error) {
    console.log(`${error.message}`);
    return res.sendFile(path.join(__dirname, "../../public/error.html"));
  }
};

const renderErrorPage = (req, res) => {
  //send file as response
  return res.sendFile(path.join(__dirname, "../../public/error.html"));
};

module.exports = { renderStartPage, renderNotesPage, renderErrorPage };
