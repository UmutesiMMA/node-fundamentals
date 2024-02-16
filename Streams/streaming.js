const fs = require("fs");
const readStream = fs.createReadStream("./streams/word.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./streams/blog1.txt");
readStream.on("data", (chunk) => {
  console.log(
    "===================================NEW CHUNK==================================="
  );
  console.log(chunk);
});
readStream.pipe(writeStream);
