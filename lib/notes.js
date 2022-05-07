const fs = require("fs");
const path = require("path");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content), (err) =>
    err
      ? console.error(err)
      : console.info(`Data was Written to ${destination}`)
  );
};

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
