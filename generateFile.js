const fs = require("fs");

const htmlFilesDirectory = ".";

function writeFile(path, content) {
  fs.writeFileSync(path, content);
}

function splitTriviaEmails(data) {
  const sections = data.split(/^\w+\s\d+\s\d{4}/gm);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    if (section.includes("TriviaBright Email 1")) {
      writeFile("./triviaBrightEmail1.txt", section);
    }
    if (section.includes("TriviaBright Email 2")) {
      writeFile("./triviaBrightEmail2.txt", section);
    }
    if (section.includes("TriviaBright Email 3")) {
      writeFile("./triviaBrightEmail3.txt", section);
    }
    if (section.includes("TriviaBright Email 4")) {
      writeFile("./triviaBrightEmail4.txt", section);
    }

    if (section.includes("AnyTrivia Email 1")) {
      writeFile("./anyTriviaEmail1.txt", section);
    }
    if (section.includes("AnyTrivia Email 2")) {
      writeFile("./anyTriviaEmail2.txt", section);
    }
    if (section.includes("AnyTrivia Email 3")) {
      writeFile("./anyTriviaEmail3.txt", section);
    }
    if (section.includes("AnyTrivia Email 4")) {
      writeFile("./anyTriviaEmail4.txt", section);
    }
    if (section.includes("TriviaWire Email 1")) {
      writeFile("./triviaWireEmail1.txt", section);
    }
    if (section.includes("TriviaWire Email 2")) {
      writeFile("./triviaWireEmail2.txt", section);
    }
    if (section.includes("TriviaWire Email 3")) {
      writeFile("./triviaWireEmail3.txt", section);
    }
    if (section.includes("TriviaWire Email 4")) {
      writeFile("./triviaWireEmail4.txt", section);
    }
    if (section.includes("TriviaDream Email 1")) {
      writeFile("./triviaDreamEmail1.txt", section);
    }
    if (section.includes("TriviaDream Email 2")) {
      writeFile("./triviaDreamEmail2.txt", section);
    }
    if (section.includes("TriviaDream Email 3")) {
      writeFile("./triviaDreamEmail3.txt", section);
    }
    if (section.includes("TriviaDream Email 4")) {
      writeFile("./triviaDreamEmail4.txt", section);
    }
    if (section.includes("TriviaConnect Email 1")) {
      writeFile("./triviaConnectEmail1.txt", section);
    }
    if (section.includes("TriviaConnect Email 2")) {
      writeFile("./triviaConnectEmail2.txt", section);
    }
    if (section.includes("TriviaConnect Email 3")) {
      writeFile("./triviaConnectEmail3.txt", section);
    }
    if (section.includes("TriviaKey Email 1")) {
      writeFile("./triviaKeyEmail1.txt", section);
    }
    if (section.includes("TriviaKey Email 2")) {
      writeFile("./triviaKeyEmail2.txt", section);
    }
    if (section.includes("TriviaVibe Email 1")) {
      writeFile("./triviaVibeEmail1.txt", section);
    }
    if (section.includes("TriviaVibe Email 2")) {
      writeFile("./triviaVibeEmail2.txt", section);
    }
    if (section.includes("TriviaTrends Email 1")) {
      writeFile("./triviaTrendsEmail1.txt", section);
    }
  }
}

// Iterate through HTML files in the directory
fs.readdirSync(htmlFilesDirectory).forEach((filename) => {
  const mainContent = fs.readFileSync("./main-content.txt", "utf-8");

  if (filename.endsWith(".txt")) {
    splitTriviaEmails(mainContent);
  }
});
