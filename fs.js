const fs = require("fs");

const filePath = "example.txt";

fs.writeFile(filePath, "Hello, world!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});
