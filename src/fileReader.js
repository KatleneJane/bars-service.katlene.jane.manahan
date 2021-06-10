const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
//const readTxt = require("../../deliverables/readTxt/");

const multer = require("multer");
const uploads = multer({
  dest: "uploads",
  fileFilter(req, file, cb) {
    if (file.originalname.endsWith(".txt")) {
      console.log("Reading .txt file");
    } else if (file.originalname.endsWith(".csv")) {
      console.log("Reading .csv file");
    } else {
      return cb(new Error("File is not supported for processing"));
    }
    cb(undefined, true);
  },
});

app.post(
  "/uploads",
  uploads.single("uploads"),
  async (req, res) => {
    res.send("File uploaded!!");
    const data = fs.readFileSync(req.file.path).toString();

    //if (data === "") {
    //  const errorEmptyFile = "No request(s) to read from the input file.";
    //  return re.send(errorEmptyFile);
    //}

    const rawArray = data.split("\r\n");
    console.log(rawArray);
  },
  (err, req, res, next) => res.status(404).send({ error: err.message })
);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

module.exports = FileReader;
