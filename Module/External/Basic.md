### External/Third-Party Modules

1. **What They Are**: 
   - External modules are libraries or packages created by other developers that you can install and use in your applications. They extend the functionality of Node.js.

2. **Installation**:
   - Use npm to install external modules. For example:
     ```bash
     npm install express
     ```

3. **Commonly Used External Modules**:
   - **Express**: A minimal and flexible Node.js web application framework for building APIs and web applications.
     ```javascript
     const express = require('express');
     const app = express();

     app.get('/', (req, res) => {
       res.send('Hello, World!');
     });

     app.listen(3000, () => {
       console.log('Server running at http://localhost:3000/');
     });
     ```

   - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, making it easier to work with MongoDB.
     ```javascript
     const mongoose = require('mongoose');

     mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

     const UserSchema = new mongoose.Schema({
       name: String,
       age: Number,
     });

     const User = mongoose.model('User', UserSchema);
     ```

   - **Lodash**: A utility library that provides helpful functions for common programming tasks.
     ```javascript
     const _ = require('lodash');

     const numbers = [1, 2, 3, 4];
     const doubled = _.map(numbers, n => n * 2);
     console.log(doubled); // Output: [2, 4, 6, 8]
     ```

4. **Finding and Managing External Modules**:
   - Use `npm search <package-name>` to find modules.
   - Manage your project’s dependencies in the `package.json` file, which is created when you run `npm init`.

### Summary
- **External modules** expand the capabilities of your Node.js applications and can be easily managed using npm.
- They are widely used for various functionalities like web frameworks, database interaction, and utility functions.
