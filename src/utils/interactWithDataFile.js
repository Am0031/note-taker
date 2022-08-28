const fs = require("fs");
const path = require("path");

const getDataFromFile = (fileName) => {
  try {
    //get path to file
    const filePath = path.join(__dirname, "../data", `${fileName}.json`);
    //read from data file
    const dataFromFile = fs.readFileSync(filePath, "utf8");
    //send data as response
    return JSON.parse(dataFromFile);
  } catch (error) {
    throw error;
  }
};

const writeDataToFile = (fileName, data) => {
  try {
    //get path to file
    const filePath = path.join(__dirname, "../data", `${fileName}.json`);
    //write data into file
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};

module.exports = { getDataFromFile, writeDataToFile };
