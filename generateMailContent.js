const fs = require("fs");

const replaceContent = require("./replaceContent");

const extractVariables = require("./extractVariables");

function generateMailContent(path, htmlFilePath) {
  //readfile

  const emailContent = fs.readFileSync(path, "utf-8");

  const extractedVariables = extractVariables(emailContent);

  console.log(extractedVariables);

  try {
    const newLinks = [extractedVariables.link];
    const newText = extractedVariables.answers;

    const newImageSrc = extractedVariables.imageSrc;

    const headingText = extractedVariables.question;

    if (
      newLinks == "" ||
      newText.length == 0 ||
      headingText == "" ||
      newImageSrc == ""
    ) {
      throw new Error("malfunction");
    }

    replaceContent(htmlFilePath, newLinks, newImageSrc, newText, headingText);
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateMailContent;
