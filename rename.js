const fs = require("fs");

const path = require("path");

function renameFile() {
  const directory = ".";

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      // Check if file ends with .html
      if (file.endsWith(".html")) {
        const oldFilePath = path.join(directory, file);

        const newFileName = file.replace(/^\w+\s\d+\s\d{4}/, "June 12 2024"); //replace the date

        const newFilePath = path.join(directory, newFileName);

        fs.rename(oldFilePath, newFilePath, (err) => {
          if (err) {
            console.error(`Error renaming file ${oldFilePath}:`, err);
          } else {
            console.log(`File ${oldFilePath} renamed to ${newFilePath}`);
          }
        });
      }
    });
  });
}

module.exports = renameFile;
