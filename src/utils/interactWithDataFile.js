const fs = require("fs");
const path = require("path");

const getDataFromFile = (fileName) => {
  //get path to file
  const filePath = path.join(__dirname, "../data", `${fileName}.json`);
  //read from data file
  const dataFromFile = fs.readFileSync(filePath, "utf8");
  //send data as response
  return JSON.parse(dataFromFile);
};

const writeDataToFile = (fileName, data) => {
  //get path to file
  const filePath = path.join(__dirname, "../data", `${fileName}.json`);
  //write data into file
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = { getDataFromFile, writeDataToFile };
