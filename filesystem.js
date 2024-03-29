const fs = require("fs");
//read file
fs.readFile("./people.js", (error, data) => {
  if (error) throw error;
  console.log(data.toString());
});
//write file
fs.writeFile(
  "./details.js",
  "'Here is a detailed schedule for this week and the next one'",
  (err) => {
    if (err) throw err;
  }
);
//delete a file
fs.unlink("./toDelete.js", (err) => {
  if (err) throw err;
  console.log("file has been deleted!");
});

//create directory
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      throw err;
    }
    console.log("directory was created successfully!");
    return;
  });
}
//delete directory
fs.rmdir("./delete", (err) => {
  if (err) throw err;
  console.log("directory deleted successfully");
});
