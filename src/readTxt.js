
const fs = require("fs");
const readTxt = function () {
  try {
    const data = fs.readFileSync(req.file.path).toString();
    const rawArray = data.split("\r\n");
    console.log(rawArray);
  } catch (e) {
    return [];
  }
};


module.exports = {
  readTxt: readTxt;
};
