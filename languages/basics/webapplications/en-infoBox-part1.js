const basicWebApplicationsInfoBoxPart1 = `  <ol>
<li><strong>Set Up Your Environment:</strong> Ensure you have Node.js installed on your system. You can download it from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.</li>

<li><strong>Create a Directory for Your Project:</strong> Open a terminal and create a new directory for your web application. Then, navigate to the newly created directory.
  <pre class="bg-body-secondary rounded m-5 border border-2 border-secondary">
    <code>
      mkdir my-express-ejs-app
      cd my-express-ejs-app</code>
  </pre>
</li>

<li><strong>Initialize Your Project:</strong> Run the following command to create a <code>package.json</code> file that will manage your project's dependencies.
  <pre class="bg-body-secondary rounded m-5 border border-2 border-secondary">
    <code>
      npm init -y
    </code>
  </pre>
</li>

<li><strong>Install Express and EJS:</strong> Use the following command to install Express and EJS as project dependencies.
  <pre class="bg-body-secondary rounded m-5 border border-2 border-secondary">
    <code>
      npm install express ejs --save
    </code>
  </pre>
</li>

<li><strong>Create Your Express Application:</strong> Create a JavaScript file, for example, <code>app.js</code>, and start building your application. Make sure to configure EJS as the template engine.
  <pre class="bg-body-secondary rounded m-5 border border-2 border-secondary">
    <code>
      const express = require('express');
      const app = express();
      const port = 3000;

      // Configure EJS as the template engine
      app.set('view engine', 'ejs');

      // Main route
      app.get('/', (req, res) => {
      // Render an EJS view named 'index.ejs'
      res.render('index', { message: 'Hello, world!' });
      });

      // Start the server
      app.listen(port, () => {
      console.log("Express server with EJS listening on port #{port}");
      });
    </code>
  </pre>
</li>

<li><strong>Create a Folder for Your Views:</strong> In the project's root directory, create a folder called <code>views</code>. Inside this folder, you can place your EJS template files, for example, <code>index.ejs</code>.`

module.exports = basicWebApplicationsInfoBoxPart1
