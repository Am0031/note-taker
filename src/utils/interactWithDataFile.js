const fs = require("fs");
const path = require("path");
const db = require("../data/db.json");

const getDataFromFile = (fileName) => {
  //get path and id (or default all)
  const filePath = path.join(__dirname, "../data", `${fileName}.json`);
  //read from data file
  const dataFromFile = fs.readFileSync(filePath, "utf8");
  //send data as response
  return JSON.parse(dataFromFile);
};

const writeDataToFile = (filepath, id) => {
  //receives path
  //write data into file
};

module.exports = { getDataFromFile, writeDataToFile };
