const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.download("result.pdf", "About Me.pdf", () => {
    fs.unlink("result.pdf", () => console.log("File deleted successfully!"));
  });
});

app.post("/", (req, res, next) => {
  const { text } = req.body;

  const doc = new PDFDocument();

  doc
    .pipe(fs.createWriteStream("result.pdf"))
    .on("finish", () => res.status(201).json({ message: "File created. " }));

  doc.text(text, { columns: 2, columnGap: 15, height: 200 });

  doc.end();
});

app.listen(5000, () => console.log(`App is listening on port 5000...`));
