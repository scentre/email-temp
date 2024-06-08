function extractVariables(emailContent) {
  // Split the email content by new lines
  const lines = emailContent.split("\n");

  // Initialize variables to store extracted data
  let imageSrc = "";
  let question = "";
  let answers = [];
  let link = "";

  // Loop through each line and extract data
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Check if the line contains information about image source
    if (line.startsWith("Image:")) {
      // Extract the image source from the line
      imageSrc = line.split(" ")[1]
        ? line.split(" ")[1]
        : line.split(" ").join("").slice(7);
    }
    // Check if the line contains information about the question
    else if (line.startsWith("Question:")) {
      // Extract the question from the line
      question = line.substring("Question:".length).trim();
    }
    // Check if the line contains information about the question
    else if (line.startsWith("Questions:")) {
      // Extract the question from the line
      question = line.substring("Questions:".length).trim();
    }
    // Check if the line contains information about the answers
    else if (line.startsWith("Answers:")) {
      // Extract the answers from the next four lines
      for (let j = 1; j <= 4; j++) {
        answers.push(lines[i + j]?.trim());
      }
    }
    // Check if the line contains information about the link
    else if (line.startsWith("Link:")) {
      // Extract the link from the line
      link = line.split(" ")[1];
    }
  }

  // Return the extracted variables as an object
  return {
    imageSrc,
    question,
    answers,
    link,
  };
}

module.exports = extractVariables;
