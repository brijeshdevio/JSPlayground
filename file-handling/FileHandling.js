/* `const fsAsync = require("node:fs/promises");` is importing the `fs/promises` module in Node.js.
This module provides asynchronous versions of file system operations, allowing you to work with
files using promises and async/await syntax. By assigning it to `fsAsync`, you can use these
asynchronous file system methods in your code. */
const fsAsync = require("node:fs/promises");

/* `const fsSync = require("node:fs");` is importing the core Node.js `fs` module synchronously. This
module provides synchronous file system operations, allowing you to work with files using blocking
methods. By assigning it to `fsSync`, you can use these synchronous file system methods in your
code. */
const fsSync = require("node:fs");

/* `const path = require("node:path");` is importing the core Node.js `path` module. This module
provides utilities for working with file and directory paths. By assigning it to `path`, you can use
its methods to manipulate file paths in a platform-independent way in your code. */
const path = require("node:path");

// Read File
/* `const readFilePath = path.join(__dirname, "log.txt");` is creating a file path by joining the
directory name (`__dirname`) of the current module with the file name `"log.txt"`. This line of code
constructs the full path to the file named "log.txt" within the current directory of the script. */

const readFilePath = path.join(__dirname, "log.txt");

(async () => {
  try {
    /* `await fsAsync.readFile(readFilePath, "utf8");` is an asynchronous operation that
    reads the contents of the file specified by `readFilePath` using the `fsAsync`
    module. The `await` keyword is used to pause the execution of the code until the
    file reading operation is completed. The file is read with the specified encoding
    `"utf8"`, which indicates that the file contents should be interpreted as UTF-8
    encoded text. Once the file reading is complete, the data read from the file is
    returned and stored in the `data` variable. */
    const data = await fsAsync.readFile(readFilePath, "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

// Sync function
try {
  /* `fsSync.readFileSync(readFilePath, "utf8");` is a synchronous operation that reads
  the contents of the file specified by `readFilePath` using the `fsSync` module. The
  method `readFileSync` reads the file synchronously, meaning it blocks the execution
  of the code until the file reading operation is completed. The file is read with the
  specified encoding `"utf8"`, which indicates that the file contents should be
  interpreted as UTF-8 encoded text. The data read from the file is then returned and
  stored in the `data` variable for further processing or logging. */
  const data = fsSync.readFileSync(readFilePath, "utf8");
  console.log(data);
} catch (error) {
  console.error(error);
}

// Write file
const writeFilePath = path.join(__dirname, "log.txt");

// async
async () => {
  try {
    const data = await fsAsync.writeFile(writeFilePath, "Hello world");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// sync
try {
  const data = fsSync.writeFileSync(writeFilePath, "Hello world");
  console.log(data);
} catch (error) {
  console.error(error);
}

// Append file
const appendFilePath = path.join(__dirname, "log.txt");

// async
async () => {
  try {
    const data = await fsAsync.appendFile(appendFilePath, "Hello world");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// Sync
try {
  const data = fsSync.appendFileSync(appendFilePath, "Hello world");
  console.log(data);
} catch (error) {
  console.error(error);
}

// Create new File
const createFilePath = path.join(__dirname, "newFile.txt");

// Async
async () => {
  try {
    /* The `open` function in Node.js is used to open a file. When used with
    the `fsAsync` module, it is an asynchronous operation that opens a
    file specified by the file path with a given flag or mode. The flag
    or mode parameter determines the behavior of the file opening
    operation, such as whether to create a new file if it doesn't exist,
    truncate an existing file, or open a file for writing. */
    const data = await fsAsync.open(createFilePath, "w");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// Sync
try {
  const data = fsSync.openSync(createFilePath, "w");
  console.log(data);
} catch (error) {
  console.error(error);
}

// Delete File
const deleteFilePath = path.join(__dirname, "newFile.txt");

// Async
async () => {
  try {
    /* `unlink` is a file system operation that is used to delete a file. In
    Node.js, `fsAsync.unlink` is an asynchronous function that deletes
    the file specified by the file path provided as an argument.
    Similarly, `fsSync.unlinkSync` is the synchronous version of the
    function that performs the same operation but in a blocking manner,
    meaning it will wait until the file deletion is completed before
    continuing with the code execution. */
    const data = await fsAsync.unlink(deleteFilePath);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// Sync
try {
  const data = fsSync.unlinkSync(deleteFilePath);
  console.log(data);
} catch (error) {
  console.error(error);
}
