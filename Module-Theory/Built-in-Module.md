**What is a Node.js Built-in Module?**

A Node.js built-in module is a JavaScript file that is pre-installed with Node.js and can be used directly in your Node.js applications without requiring external installation or configuration. These modules provide core functionalities and utilities that are essential for building Node.js applications.

**Why Use Node.js Built-in Modules?**

1. **Performance:** Built-in modules are often implemented in C++ for performance optimization, making them faster than custom JavaScript implementations.
2. **Reliability:** Built-in modules are thoroughly tested and maintained by the Node.js core team, ensuring their reliability and stability.
3. **Cross-Platform Compatibility:** Built-in modules are designed to work across different operating systems, providing consistent behavior and functionality.
4. **Rich Feature Set:** Node.js comes with a wide range of built-in modules covering various functionalities, from file system operations to network communication and HTTP handling.
5. **Simplified Development:** Using built-in modules can simplify development by providing pre-built solutions for common tasks, reducing the need for custom implementations.

**How to Use Node.js Built-in Modules:**

1. **Import the Module:** To use a built-in module, simply use the `require()` function and pass the module's name as a string argument.

   ```javascript
   const fs = require('fs');
   const http = require('http');
   ```

2. **Access Module Functions and Properties:** Once imported, you can access the module's functions and properties using dot notation.

   ```javascript
   fs.readFile('myfile.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });

   http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello, World!');
   }).listen(8080);
   ```

**Commonly Used Built-in Modules:**

- **`fs`:** Provides functions for working with the file system, such as reading, writing, and creating files and directories.
- **`http`:** Offers functions for creating and managing HTTP servers.
- **`https`:** Provides functions for creating and managing HTTPS servers.
- **`path`:** Provides functions for working with file and directory paths.
- **`url`:** Provides functions for parsing and manipulating URLs.
- **`crypto`:** Provides functions for cryptographic operations, such as hashing, encryption, and decryption.
- **`os`:** Provides functions for interacting with the operating system, such as getting system information and executing commands.
- **`net`:** Provides functions for creating TCP and UDP network connections.
- **`child_process`:** Provides functions for spawning child processes and communicating with them.
- **`events`:** Provides functions for creating and handling custom events.

