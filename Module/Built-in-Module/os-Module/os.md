**`os`** module in Node.js:

### 1. **Importing the `os` Module**
- Start by importing the `os` module:
  ```js
  const os = require('os');
  ```

### 2. **Getting System Information**
- **OS Type**: Find the operating system type (e.g., Windows, Linux):
  ```js
  console.log(os.type()); // Example: 'Linux', 'Windows_NT'
  ```

- **OS Platform**: Get the platform name (e.g., 'win32', 'linux'):
  ```js
  console.log(os.platform());
  ```

- **OS Architecture**: Check if the system is 32-bit or 64-bit:
  ```js
  console.log(os.arch()); // Example: 'x64', 'arm'
  ```

### 3. **Memory Information**
- **Total Memory**: Get the total memory of the system in bytes:
  ```js
  console.log(os.totalmem());
  ```

- **Free Memory**: Find out how much memory is currently available:
  ```js
  console.log(os.freemem());
  ```

### 4. **CPU Information**
- **CPU Details**: Get details about each CPU core:
  ```js
  console.log(os.cpus());
  ```

- **CPU Count**: Number of CPU cores:
  ```js
  console.log(os.cpus().length);
  ```

### 5. **System Uptime**
- Find out how long the system has been running (in seconds):
  ```js
  console.log(os.uptime()); // Example: 123456 (seconds)
  ```

### 6. **Home Directory**
- Get the current user’s home directory:
  ```js
  console.log(os.homedir());
  ```

### 7. **Host Name**
- Get the computer’s host name:
  ```js
  console.log(os.hostname());
  ```

### Key Concepts:
- **`os.type()`**: Returns the OS type.
- **`os.freemem()` and `os.totalmem()`**: For memory usage.
- **`os.cpus()`**: For CPU details.

