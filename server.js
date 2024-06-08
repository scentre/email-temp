const fs = require("fs");
const path = require("path");

const rename = require("./rename");

const generateMailContent = require("./generateMailContent");

// Example replacement data

// Directory containing HTML files
const htmlFilesDirectory = ".";

//extract variables

// Iterate through HTML files in the directory
fs.readdirSync(htmlFilesDirectory).forEach((filename) => {
  if (filename.endsWith(".html")) {
    //generate the html file path
    const htmlFilePath = path.join(htmlFilesDirectory, filename);

    if (filename.includes("AnyTrivia Email 1")) {
      //readfile

      generateMailContent("./anyTriviaEmail1.txt", htmlFilePath);
    }
    if (filename.includes("AnyTrivia Email 2")) {
      //readfile

      generateMailContent("./anyTriviaEmail2.txt", htmlFilePath);
    }
    if (filename.includes("AnyTrivia Email 3")) {
      //readfile

      generateMailContent("./anyTriviaEmail3.txt", htmlFilePath);
    }

    if (filename.includes("AnyTrivia Email 4")) {
      //readfile

      generateMailContent("./anyTriviaEmail4.txt", htmlFilePath);
    }
    if (filename.includes("TriviaBright Email 1")) {
      //readfile

      generateMailContent("./triviaBrightEmail1.txt", htmlFilePath);
    }

    if (filename.includes("TriviaBright Email 2")) {
      //readfile

      generateMailContent("./triviaBrightEmail2.txt", htmlFilePath);
    }
    if (filename.includes("TriviaBright Email 3")) {
      //readfile
      generateMailContent("./triviaBrightEmail3.txt", htmlFilePath);
    }

    if (filename.includes("TriviaBright Email 4")) {
      //readfile

      generateMailContent("./triviaBrightEmail4.txt", htmlFilePath);
    }

    if (filename.includes("Triviaconnect Email 1")) {
      //readfile
      generateMailContent("./triviaConnectEmail1.txt", htmlFilePath);
    }

    if (filename.includes("Triviaconnect Email 2")) {
      //readfile

      generateMailContent("./triviaConnectEmail2.txt", htmlFilePath);
    }

    if (filename.includes("Triviaconnect Email 3")) {
      //readfile
      generateMailContent("./triviaConnectEmail3.txt", htmlFilePath);
    }

    if (filename.includes("TriviaDream Email 1")) {
      //readfile

      generateMailContent("./triviaDreamEmail1.txt", htmlFilePath);
    }

    if (filename.includes("TriviaDream Email 2")) {
      //readfile
      generateMailContent("./triviaDreamEmail2.txt", htmlFilePath);
    }
    if (filename.includes("TriviaDream Email 3")) {
      //readfile

      generateMailContent("./triviaDreamEmail3.txt", htmlFilePath);
    }

    if (filename.includes("TriviaDream Email 4")) {
      //readfile
      generateMailContent("./triviaDreamEmail4.txt", htmlFilePath);
    }
    if (filename.includes("TriviaWire Email 1")) {
      //readfile

      generateMailContent("./triviaWireEmail1.txt", htmlFilePath);
    }
    if (filename.includes("TriviaWire Email 2")) {
      //readfile
      generateMailContent("./triviaWireEmail2.txt", htmlFilePath);
    }

    if (filename.includes("TriviaWire Email 3")) {
      //readfile

      generateMailContent("./triviaWireEmail3.txt", htmlFilePath);
    }

    if (filename.includes("TriviaWire Email 4")) {
      //readfile
      generateMailContent("./triviaWireEmail4.txt", htmlFilePath);
    }

    if (filename.includes("TriviaKey Email 1")) {
      //readfile
      generateMailContent("./triviaKeyEmail1.txt", htmlFilePath);
    }

    if (filename.includes("TriviaKey Email 2")) {
      //readfile
      generateMailContent("./triviaKeyEmail2.txt", htmlFilePath);
    }
    if (filename.includes("TriviaVibe Email 1")) {
      //readfile
      generateMailContent("./triviaVibeEmail1.txt", htmlFilePath);
    }

    ////

    if (filename.includes("TriviaVibe Email 2")) {
      //readfile

      generateMailContent("./triviaVibeEmail2.txt", htmlFilePath);
    }

    if (filename.includes("TriviaTrends Email 1")) {
      //readfile

      generateMailContent("./triviaTrendsEmail1.txt", htmlFilePath);
    }
  }
});

////////
// Directory where your files are located

rename();
