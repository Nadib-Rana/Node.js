Here's a simplified guide for learning the **`path`** module in Node.js:

### 1. **Importing the `path` Module**
- Start by importing the `path` module:
  ```js
  const path = require('path');
  ```

### 2. **Joining Paths**
- Use `path.join()` to combine path segments:
  ```js
  const fullPath = path.join('/folder', 'subfolder', 'file.txt');
  console.log(fullPath);  // Output: '/folder/subfolder/file.txt'
  ```

### 3. **Getting the Directory Name**
- Use `path.dirname()` to get the directory part of a file path:
  ```js
  const dir = path.dirname('/folder/subfolder/file.txt');
  console.log(dir);  // Output: '/folder/subfolder'
  ```

### 4. **Getting the File Name**
- Use `path.basename()` to get the file name (with or without extension):
  ```js
  const file = path.basename('/folder/subfolder/file.txt');
  console.log(file);  // Output: 'file.txt'

  // Without extension:
  const fileWithoutExt = path.basename('/folder/subfolder/file.txt', '.txt');
  console.log(fileWithoutExt);  // Output: 'file'
  ```

### 5. **Getting the File Extension**
- Use `path.extname()` to get the file extension:
  ```js
  const ext = path.extname('/folder/subfolder/file.txt');
  console.log(ext);  // Output: '.txt'
  ```

### 6. **Absolute vs Relative Paths**
- **Absolute Path**: Use `path.resolve()` to get the absolute path:
  ```js
  const absolutePath = path.resolve('file.txt');
  console.log(absolutePath);  // Output: Full path to 'file.txt'
  ```

- **Relative Path**: Use `path.relative()` to get the relative path between two paths:
  ```js
  const relativePath = path.relative('/folder/subfolder', '/folder/file.txt');
  console.log(relativePath);  // Output: '../file.txt'
  ```

### 7. **Normalizing Paths**
- Use `path.normalize()` to fix any irregularities in the path (like extra slashes):
  ```js
  const normalizedPath = path.normalize('/folder//subfolder/file.txt');
  console.log(normalizedPath);  // Output: '/folder/subfolder/file.txt'
  ```

### Key Concepts:
- **`path.join()`**: Combines multiple path segments.
- **`path.basename()`**: Returns the file name.
- **`path.extname()`**: Gets the file extension.
- **`path.resolve()`**: Gets the absolute path.
  
