const fs = require('fs'); 
const os = require('os'); 

/* 

Synchronously writes the string 'Hey There' to './test.txt'.
- If the file does not exist, Node.js will create it automatically.
- If the file already exists, its contents will be completely overwritten.
- UTF-8 encoding is used by default for string data.
- Note: This is a synchronous (blocking) call, which halts thread execution until finished.

*/ 

fs.writeFileSync("./test.txt", "Hey There");

/* 

Asynchronously writes 'Hello World Async!' to './text.txt'.
- Non-blocking: Executes in the background without halting the Node.js event loop.
- Creates './text.txt' if it doesn't exist, or completely overwrites it if it does.
- Takes a callback function as the 3rd argument, which fires once writing completes

*/ 

fs.writeFile("./text.txt", "Hello World Async!", (err) => {
  if(err) {
    console.log("Failed to write to file:", err); 
    return; 
  }
  console.log("File written Successfully"); 
});


/*

Synchronously reads the contents of './contacts.txt' as a UTF-8 string.
- "utf-8" tells Node to return a string. Without it, `readFileSync` returns a raw Buffer (binary data).
- Blocking call: Pauses execution until the entire file is read into memory.

*/ 

const result = fs.readFileSync("./contacts.txt", "utf-8"); 
console.log(result); 

/* 

Asynchronously reads './contacts.txt' using UTF-8 encoding.
- Non-blocking: Reads the file in the background without halting the Node.js event loop.
- "utf-8": Encodes the binary data into a readable string (otherwise `result` would be a Buffer).

*/ 

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err); 
  } else {
    console.log(result); 
  }
}); 


/*

Appends the current day of the month (e.g., "13" or "5") converted to a string.
Note: new Date().getDate() returns a number (1-31). 
Passing a number to toLocaleString() formats that number, not the full date string.

*/ 

fs.appendFileSync("./append.txt", new Date().getDate().toLocaleString() + os.EOL); 

// If you intended to append the full formatted date/time, use: new Date().toLocaleString()
fs.appendFileSync("./append.txt", new Date().toLocaleString() + os.EOL); 

// os.EOL => it is a built-in constant in Node.js that stands for End Of Line. It gives you the exact character sequence used to start a new line on the operating system where your code is running.

/*

Synchronously appends the text "Hey There!" followed by a new line character (\n).
If "append.txt" does not exist, Node.js will automatically create it first.

*/ 

fs.appendFileSync("./append.txt", "Hey There!\n");


// Copy a file: Synchronously copies 'contacts.txt' to 'copy.txt'.
// If 'copy.txt' already exists, it will be overwritten.
fs.cpSync("./contacts.txt", "./copy.txt");

// Delete a file: Synchronously deletes (unlinks) 'copy.txt'.
fs.unlinkSync("./copy.txt"); 

// Read metadata: Synchronously returns stats (size, creation date, permissions, etc.) for 'test.txt'.
console.log(fs.statSync("./test.txt"));


// Create directory: Synchronously creates a single folder named 'my-docs'.
// Fails if the parent folder doesn't exist or 'my-docs' already exists (use carefully).
fs.mkdirSync('my-docs'); 


// Create nested directories: Creates 'my-data/a/b' and any missing parent folders along the path.
// Does not throw an error if the directory path already exists.
fs.mkdirSync('my-data/a/b', { recursive: true });




