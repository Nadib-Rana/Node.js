### 1. **Importing the `fs` Module**
- Start by importing the `fs` module:
  ```js
  const fs = require('fs');
  ```

### 2. **Reading Files**
- **Async:** Non-blocking (better for performance):
  ```js
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```
- **Sync:** Blocking (halts code execution until done):
  ```js
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
  ```

### 3. **Writing to Files**
- **Async:** Write text to a file:
  ```js
  fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File written!');
  });
  ```

### 4. **Appending to Files**
- Add new text to an existing file:
  ```js
  fs.appendFile('file.txt', '\nMore text', (err) => {
    if (err) throw err;
    console.log('Text added!');
  });
  ```

### 5. **Deleting Files**
- Delete a file:
  ```js
  fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
  });
  ```

### 6. **Renaming Files**
- Change the file name:
  ```js
  fs.rename('oldName.txt', 'newName.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
  });
  ```

### 7. **Creating a Directory**
- Make a new folder:
  ```js
  fs.mkdir('newFolder', (err) => {
    if (err) throw err;
    console.log('Folder created!');
  });
  ```

### 8. **Reading a Directory**
- List all files in a folder:
  ```js
  fs.readdir('folderName', (err, files) => {
    if (err) throw err;
    console.log(files);
  });
  ```

### Key Concepts:
- **Async vs Sync:** Async is non-blocking and better for performance, while Sync blocks code execution.
- **Error Handling:** Always check for errors using `if (err)` in callbacks.

