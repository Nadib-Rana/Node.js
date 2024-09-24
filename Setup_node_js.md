Here’s a step-by-step guide to setting up Node.js on your machine:

### 1. Install Node.js

- **Windows & macOS**:
  1. Visit the [Node.js website](https://nodejs.org/).
  2. Download the LTS (Long Term Support) version for your operating system.
  3. Run the installer and follow the prompts. Make sure to check the box that says "Add to PATH."

- **Linux**:
  You can use a package manager like `apt` or `nvm` (Node Version Manager):
  - **Using APT**:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

  - **Using NVM**:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    ```

### 2. Verify Installation

After installation, verify that Node.js and npm (Node Package Manager) are installed correctly by running:

```bash
node -v
npm -v
```

You should see version numbers for both.

### 3. Set Up a New Node.js Project

1. **Create a New Directory**:
   ```bash
   mkdir my-node-app
   cd my-node-app
   ```

2. **Initialize a New Node.js Project**:
   Run the following command and follow the prompts to create a `package.json` file:
   ```bash
   npm init -y
   ```

3. **Install Express (optional)**:
   If you plan to use Express for building web applications, install it with:
   ```bash
   npm install express
   ```

### 4. Create a Simple Server

Create a new file named `app.js` in your project directory:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 5. Run Your Application

Start your Node.js application by running:

```bash
node app.js
```

Open your web browser and navigate to `http://localhost:3000`. You should see "Hello, World!" displayed.

### 6. Stop the Server

To stop the server, go back to the terminal where the server is running and press `Ctrl + C`.

Today was worst day.