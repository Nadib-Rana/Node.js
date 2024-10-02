### Node.js Global Object

In Node.js, certain objects are available globally, meaning you don't need to `require` them. These objects are part of the global scope and can be accessed from anywhere in your Node.js application.

#### Key Global Objects:
1. **`__dirname`**: The directory name of the current module (file).
   ```javascript
   console.log(__dirname);
   ```

2. **`__filename`**: The file name of the current module.
   ```javascript
   console.log(__filename);
   ```

3. **`console`**: Provides simple logging methods like `log()`, `error()`, etc.
   ```javascript
   console.log('Hello from Node.js!');
   ```

4. **`process`**: Provides information and control over the current Node.js process.
   ```javascript
   console.log(process.env);  // Outputs environment variables
   ```

5. **`setTimeout()` / `clearTimeout()`**: Schedules code execution after a designated amount of time.
   ```javascript
   setTimeout(() => {
     console.log('This runs after 2 seconds');
   }, 2000);
   ```

6. **`setInterval()` / `clearInterval()`**: Repeats code execution at a set interval.
   ```javascript
   setInterval(() => {
     console.log('This runs every 2 seconds');
   }, 2000);
   ```

7. **`require()`**: Loads modules, JSON files, or local files.
   ```javascript
   const fs = require('fs');
   ```

8. **`Buffer`**: A global object used to handle binary data in Node.js.
   ```javascript
   const buf = Buffer.from('Hello World');
   console.log(buf);
   ```

---

### Node.js Module System

Node.js follows a modular architecture, where functionalities are encapsulated into modules. These modules can be JavaScript files, libraries, or packages.

#### Module Types:
1. **Core Modules**: Built into Node.js, no need to install.
   Examples: `fs`, `http`, `path`, `os`.
   ```javascript
   const fs = require('fs');  // File System module
   ```

2. **Local Modules**: Files that you create in your application.
   ```javascript
   // math.js
   function add(a, b) {
     return a + b;
   }
   module.exports = { add };

   // main.js
   const math = require('./math');
   console.log(math.add(2, 3));  // Output: 5
   ```

3. **Third-Party Modules**: Installed via npm (Node Package Manager). Examples: `express`, `mongoose`.
   ```bash
   npm install express
   ```

#### Module Loading:
1. **`require()`**: Used to load modules.
   ```javascript
   const http = require('http');  // Core module
   const customModule = require('./customModule');  // Local module
   ```

2. **`module.exports` & `exports`**: These allow a module to export specific values or functions to be used in other files.
   ```javascript
   // export multiple values
   module.exports = {
     add: (a, b) => a + b,
     subtract: (a, b) => a - b
   };

   // or use shorthand for exporting
   exports.add = (a, b) => a + b;
   ```

#### Example of a Module:
Let's create a simple local module that exports two functions (addition and subtraction):

```javascript
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

You can import and use this module in another file:

```javascript
// app.js
const math = require('./math');
console.log(math.add(5, 3));      // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
```

### Summary

- **Global Objects**: Available anywhere in Node.js without needing to import them, like `__dirname`, `__filename`, `process`, and `Buffer`.
- **Module System**: Uses `require()` to import modules, and `module.exports` or `exports` to export functionality from modules. Modules can be core, local, or third-party packages installed via npm.