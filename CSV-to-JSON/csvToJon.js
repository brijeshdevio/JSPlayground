const fs = require("node:fs");
const csvParser = require("csv-parser");
const path = require("node:path");

const csvFilePath = path.join(__dirname, "data.csv");

const result = [];

/* This code snippet is reading a CSV file, parsing its contents, and converting it into a JSON file.
Here's a breakdown of what each part is doing: */
fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    const jsonFilePath = path.join(__dirname, "data.json");
    fs.writeFileSync(jsonFilePath, JSON.stringify(result, null, 2));
    console.log("CSV to JSON conversion completed");
  });
