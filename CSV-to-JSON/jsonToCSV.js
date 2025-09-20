const fs = require("node:fs");
const json2csv = require("json2csv");
const path = require("node:path");

const jsonFilePath = path.join(__dirname, "data.json");
const csvFilePath = path.join(__dirname, "data.csv");

const result = [];

const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
const json2CsvParser = new json2csv.Parser();
const csvData = json2CsvParser.parse(JSON.parse(jsonData));
fs.writeFileSync(csvFilePath, csvData);
console.log("JSON to CSV conversion completed");
