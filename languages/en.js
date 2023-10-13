const basicWebApplicationsInfoBoxPart1 = require('./basics/webapplications/en-infoBox-part1')
const basicWebApplicationsInfoBoxPart2 = require('./basics/webapplications/en-infoBox-part2')

var translations = {
  navigation: {
    basics: 'Basics',
    webApplications: 'Web Applications',
    globalVariables: 'Global Variables',
    modules: 'Modules',
    examples: 'Examples',
    store: 'Store - Mongoose',
    libraries: 'Libraries',
    express: 'Express',
    path: 'Path',
    mysql: 'MySQL2',
    mysqlSequelize: 'MySQL2 - Sequelize',
    mongodbMongoose: 'MongoDB - Mongoose',
    language: 'Language'
  },
  home: {
    title: 'NodeJS Wiki',
    warning: '<b>This Wiki is intended for people who already have some knowledge withNodeJS</b> but for various reasons have forgotten some of its features or need tostrengthen them.',
    introduction: 'Introduction',
    introDetails: 'Here we will find several examples to know how to use the main advantages of NodeJS.<br/><br/> Keep in mind that for reasons of incompatibility the braces have had to be removed from the example code boxes and it is not completely faithful to how it really has to be written.<br/><br/> If you need it, you can always refer to the original code at:<br/><br/>',
    infoBoxTitle: 'What is Node.js?',
    infoBox: 'Node.js® is a JavaScript runtime built with V8, Chromes JavaScript engine.'
  },
  basics: {
    webApplications: {
      title: 'Aplicaciones Web',
      infoBoxTitle: 'Build a Web Application with <a href="/' + global.config.site.language + '/libraries/express">Express</a> and EJS (HTML Template System):',
      infoBoxPart1: basicWebApplicationsInfoBoxPart1,
      infoBoxPart2: basicWebApplicationsInfoBoxPart2
    },
    globalVariables: {
      title: 'Global Variables',
      infoBoxTitle: 'Different Variables in Diferent Execution Environment',
      infoBox: 'In node JS we do not have the global <b>window</b> variable defined since NodeJS is a completely different execution environment from the browser and therefore the global window object does not exist, we do not have a window where we are displaying the data. Yes, we have a global object that is common to all environments and this is <b>globalthis</b>.<ul><li>If we use globalthis in the browser it points to the <b>window</b> variable.</li><li>If we use it in NodeJS it points to the <b>global</b> variable</li></ul>As a note, it is good to know that any predefined method in JavaScript is defined by these global variables such as console.log, math, fetch, promise, etc.'
    },
    modules: {
      title: 'Modules',
      infoBox1Title: 'Module Design Patterns',
      infoBox1SubTitle: 'CommonJS',
      infoBox1Part1: 'It is the old and default way of NodeJS, if we put this code in a file <code>suma.js</code>.',
      infoBox1Part2: 'To import it into another file we will do it with <b>require</b>',
      infoBox2SubTitle: 'ES Modules',
      infoBox2Part1: 'It is the most modern and recommended form of NodeJS, if we put this code in a file <code>suma.mjs</code>.',
      infoBox2Part2: 'To import it into another file we will do it with <b>import</b>',
      infoBox3Title: 'Native modules',
      infoBox3: "Native modules are the libraries that are included by default in Node.js, since version 16 of NodeJS it is advisable to import them with the node prefix: for example <code>require os = require('node:os')</code>",
      infoBox4Title: 'File System Module',
      infoBox4Part1: 'It is a Node.js library that allows you to interact with the file system.',
      infoBox5Title: 'Path Module',
      infoBox5: 'It gives us information about the path of the files we have, we will be able to build new file paths, join paths, know the extension of a file, etc.'
    }
  },
  libraries: {
    express: {
      title: 'Express',
      infoBoxTitle: 'Express Framework Overview',
      infoBox: 'Express is a web framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of tools and utilities that make application development faster and more efficient by abstracting many of the complexities involved in handling HTTP requests and responses, routing, and middleware management.',
      infoBox2Title: 'Main Features and Uses:',
      infoBox2: '<ol><li><strong>Routing:</strong> Express makes it easy to define routes for different parts of your application. You can specify how it should handle HTTP requests (GET, POST, PUT, DELETE, etc.) for specific routes.</li><li><strong>Middleware:</strong> Express allows the use of middleware, which are functions that run before requests reach the defined routes. Middleware can be used for tasks such as authentication, session handling, request logging, response compression, and more.</li><li><strong>Request and Response Handling:</strong> Express simplifies the manipulation of HTTP requests and responses, providing an easy-to-use interface to access request data and generate appropriate responses.</li><li><strong>Template Handling:</strong> While Express itself doesn´t include a template engine, it is commonly used with template engines like EJS or Pug, allowing the generation of dynamic HTML content and presenting it more efficiently.</li><li><strong>Integration with Databases and Services:</strong> Express can integrate with different databases and services, enabling the construction of complete applications that interact with data storage systems.</li><li><strong>API Creation:</strong> Express is widely used to build APIs (Application Programming Interfaces) that allow different applications or services to communicate efficiently.</li></ol>'
    },
    path: {
      title: 'Path',
      infoBoxTitle: 'Node.js "Path" Module Overview',
      infoBox: 'The <code>path</code> library is a built-in module in Node.js that provides utilities for working with file and directory paths in file systems. Its primary purpose is to handle path manipulation in a platform-independent manner, which means it works the same way on Windows, macOS, and Linux operating systems.',
      infoBox2Title: 'Main Functions and Uses:',
      infoBox2: '<ol><li><code>path.join(...paths)</code>: This function combines path segments into a single coherent path, taking into account differences in forward slashes used in different operating systems. This is useful for constructing paths reliably without worrying about directory separator conventions.</li><li><code>path.resolve(...paths)</code>: This function resolves relative and absolute paths into a canonical absolute path. It always produces a complete path based on the current directory.</li><li><code>path.basename(path, ext)</code>: Returns the base name of the file or directory in the provided path. If the extension is specified as the second argument, it can be removed from the output.</li><li><code>path.dirname(path)</code>: Returns the directory from which the provided path originates.</li><li><code>path.extname(path)</code>: Returns the file extension of the provided path.</li><li><code>path.parse(path)</code>: Splits a path into an object containing individual parts, such as the directory, base name, and extension.</li><li><code>path.normalize(path)</code>: Normalizes the path by removing redundant ".." and "." segments and ensuring consistent directory separators.</li><li><code>path.relative(from, to)</code>: Calculates the relative path from location "from" to location "to".</li></ol>'
    },
    mysqlSequelize: {
      title: 'MySQL2 - Sequelize',
      infoBoxTitle: 'MySQL2 Module Overview',
      infoBox: 'The <code>mysql2</code> library is a Node.js library used to connect to MySQL databases and perform database operations. This library is an improvement over the older <code>mysql</code> library and has become popular due to its enhanced performance and support for asynchronous, prepared, and promise-based queries in Node.js.',
      infoBox2Title: 'Main Functions and Uses:',
      infoBox2: '<ol><li><strong>Database Connection:</strong> <code>mysql2</code> allows you to establish connections to MySQL databases from a Node.js application. You can configure the connection by specifying details such as the host, port, user, and password.</li><li><strong>SQL Queries:</strong> You can execute SQL queries on the database using <code>mysql2</code>. This includes SELECT queries to retrieve data, INSERT, UPDATE, and DELETE queries to modify data, and any other SQL query compatible with MySQL.</li><li><strong>Prepared Statements:</strong> <code>mysql2</code> supports prepared statements, which enhance security by preventing SQL injection. Prepared statements allow you to separate data from the query, making it more challenging for attackers to perform SQL injection attacks.</li><li><strong>Asynchronous and Promises:</strong> <code>mysql2</code> supports asynchronous operations and promises, making it easier to manage database tasks without blocking the main Node.js thread. This is especially useful for web applications and real-time services handling many simultaneous requests.</li><li><strong>Multiple Connections:</strong> You can establish multiple connections to different databases or the same database server, simplifying the management of complex databases in large applications.</li><li><strong>Transactions:</strong> <code>mysql2</code> supports transactions, allowing you to perform multiple database operations as a single atomic unit. This is useful for ensuring that database operations complete successfully or are rolled back in case of an error.</li><li><strong>Events and Notifications:</strong> <code>mysql2</code> allows you to listen for events and notifications from the database, which can be useful for implementing real-time applications that react to changes in database data.</li></ol>',
      infoBox3Title: 'Using SQL data in Node.js:',
      infoBox3: '<p>The Sequelize library is an Object-Relational Mapping (ORM) tool for Node.js. An ORM is a technique that allows you to interact with relational databases using objects and SQL-like queries, rather than writing raw SQL queries. Sequelize is designed to work with SQL databases such as MySQL, PostgreSQL, SQLite, and MSSQL, these are the main features and uses:</p><ol><li><strong>Object-to-Table Mapping:</strong> Sequelize enables you to define JavaScript models that represent tables in the database. Each model has properties that correspond to the table columns and methods for performing database operations.</li><li><strong>Query Abstraction:</strong> With Sequelize, you can interact with the database using JavaScript methods rather than writing SQL queries directly. For example, you can create, read, update, and delete records in a more object-oriented manner.</li><li><strong>Safe Queries:</strong> Sequelize provides protection against SQL injection by using prepared statements and automatic data validation.</li><li><strong>Relationships:</strong> You can define relationships between database tables using associations, such as one-to-one, one-to-many, and many-to-many. Sequelize automatically handles the creation of JOIN queries for these relationships.</li><li><strong>Database Migrations:</strong> Sequelize simplifies database schema management through migrations. You can define changes to the database structure in migration files and apply or rollback them as needed.</li><li><strong>Hooks and Validation:</strong> Sequelize allows you to define hooks that run before or after database operations. It also provides a validation system to ensure data integrity.</li><li><strong>Support for Promises and Asynchrony:</strong> Sequelize is designed to work asynchronously and supports the use of promises, which is especially useful in Node.js applications handling many concurrent requests.</li></ol>'
    },
    mongodbMongoose: {
      title: 'MongoDB - Mongoose',
      infoBoxTitle: 'MongoDB Library Overview',
      infoBox: 'MongoDB is a NoSQL database system that is commonly used in Node.js applications. It is known for its ability to store data in a flexible document-like format, as opposed to the rigid tables used in traditional SQL databases. Here is an overview of MongoDB and its use in Node.js:',
      infoBox2Title: 'Main Features of MongoDB:',
      infoBox2: '<ol><li><strong>Flexible Documents:</strong> MongoDB allows storing documents with flexible structures. This means each document in a collection can have different fields and data types.</li><li><strong>Scalability:</strong> MongoDB is highly scalable, capable of handling large amounts of data and high performance. It´s commonly used in high-concurrency web and mobile applications.</li><li><strong>Powerful Queries:</strong> MongoDB supports rich and flexible queries, including geospatial queries and advanced aggregations.</li><li><strong>Replication and Fault Tolerance:</strong> MongoDB supports automatic data replication and fault tolerance, ensuring data availability and redundancy.</li></ol>',
      infoBox3Title: 'Using MongoDB in Node.js:',
      infoBox3: '<p>To interact with MongoDB in a Node.js application, you can use the official MongoDB driver for Node.js, commonly referred to as "mongodb," or higher-level libraries that simplify MongoDB interaction, such as Mongoose. These drivers and libraries allow you to:</p><ul><li>Connect your Node.js application to a MongoDB database.</li><li>Insert, update, delete, and query documents in MongoDB collections from Node.js.</li><li>Define models and schemas for your documents, providing structure and validation, especially when using Mongoose.</li><li>Perform advanced operations like aggregations and geospatial queries.</li><li>Manage indexes to improve query performance.</li></ul>'
    }
  },
  examples: {
    store: {
      navigation: {
        shop: 'About the Store',
        products: 'Products',
        cart: 'Cart',
        orders: 'Orders',
        addProducts: 'Add Products',
        adminProduct: 'Admin Product'
      },
      index: {
        title: 'Shop with mongoose',
        warning: 'To better understand how this server has been built, see the different configurations and midlewares that have been defined, take a look at the <code>app.js</code> file.',
        infoBox: 'For this example, use has been made of the MVC (Model View Controller) and the following packages or libraries: <h2>Native Packages</h2><ul><li><b>Path:</b> To use utilities for work with file and directory paths in file systems</li></ul><h2>Third Party Packages</h2><ul><li><b>Express:</b> To simplifies the proccess involved in handling HTTP requests and responses, routing, and middleware management.</li><li><b>Body-parser:</b> To convert all bodys URL to string with body-parser package</li><li><b>Mongoose:</b> To connect to our MongoDB database and simplify the interaction</li><li><b>Express-session:</b> To store and retrieve data in our session</li><li><b>Connect-mongodb-session:</b> To store and retrieve data in our session from MongoDB database</li><li><b>Csurf:</b> To generate tokens to protect against CSRF attacks</li><li><b>Connect-flash:</b> To write in session and remove it once we have read it</li><li><b>Multer:</b> To analize part incomming request for our files updates from forms</li></ul>In any case, it will be indicated on each of the example pages when we need to use each of these packages. You can browse the example from the green menu.'
      },
      products: {
        infoBox: 'This page lists all the available products in the store, with the possibility of adding them to the cart if the user is logged in.',
        app: {
          step1: 'In this view, if the user is logged in, the add to cart button will appear. When you press one of the buttons, a form will be sent and these must always be protected from CSRF attacks, so we must add certain middlewares to our file app',
          step2: 'A store is defined to be used in the session middleware',
          step3: 'We define the session midleware with our store that will save session data in our database',
          step4: 'A csrf protection middleware is defined',
          step5: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        model: {
          step1: 'Product Mongoose schema is defined',
          step2: 'Save as a Mongoose model'
        },
        controller: {
          step1: 'Thanks to the import of the Product model it will be able to use Mongoose and its method <code><b>find()</b></code>',
          step2: 'We make the call with Mongoose to the database so that it returns all the products that are in the Product collection with <code><b>Products.find()</b></code>',
          step3: 'We render the template by passing it the purchased products'
        },
        view: {
          step1: 'All products are listed',
          step2: 'For each product it is checked that the user is logged in',
          step3: 'If yes, the "Add to cart" button is displayed',
          step4: 'Once confirmed, an add-to-cart.ejs include is made, passing the product of the iteration as a property',
          step5: 'This will have a form with a hidden input with the id of the product that we have passed to it',
          step6: 'All forms will have a hidden input with the csrfToken to protect against CSRF attacks'
        }
      },
      productDetail: {
        infoBox: 'A product detail page is displayed.',
        app: {
          step1: 'In this view, if the user is logged in, the add to cart button will appear. When you press one of the buttons, a form will be sent and these must always be protected from CSRF attacks, so we must add certain middlewares to our file app',
          step2: 'A store is defined to be used in the session middleware',
          step3: 'We define the session midleware with our store that will save session data in our database',
          step4: 'A csrf protection middleware is defined',
          step5: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        model: {
          step1: 'Product Mongoose schema is defined',
          step2: 'Save as a Mongoose model'
        },
        controller: {
          step1: 'Import of the Product model',
          step2: 'We save the id of the product that comes to us through the URL parameter in the variable <code><b>prodId</b></code>',
          step3: 'Thanks to the import of the Product model it will be able to use Mongoose and its <code><b>findById()</b></code> method',
          step4: 'We make the call with Moongose to the database so that it searches and returns the product that is in the Product collection with <code><b>Products.findById(prodId)</b></code>',
          step5: 'We render the template by passing it the purchased product'
        },
        view: {
          step1: 'Product is displayed',
          step2: 'Checks that the user is logged in',
          step3: 'If yes, the "Add to cart" button is displayed',
          step4: 'Once confirmed, an include add-to-cart.ejs is done',
          step5: 'This will have a form with a hidden input with the product id',
          step6: 'All forms will have a hidden input with the csrfToken to protect against CSRF attacks'
        }
      },
      adminProducts: {
        infoBox: 'This page lists only the products that have been created by the session user, with the possibility of editing or deleting them.',
        app: {
          step1: 'In the routes file it is checked if the user is logged in to render the view, this is done through the isAuth middleware, pressing one of the buttons will send a form and these always have to be protected from CSRF attacks, thus we have to add certain middlewares in our app file',
          step2: 'A store is defined to be used in the session middleware',
          step3: 'We define the session midleware with our store that will save session data in our database',
          step4: 'A csrf protection middleware is defined',
          step5: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        model: {
          step1: 'Product Mongoose schema is defined',
          step2: 'Save as a Mongoose model'
        },
        controller: {
          step1: 'Thanks to the import of the Product model it will be able to use Mongoose and its <code><b>find()</b></code> method',
          step2: 'We make the call with Moongose to the database so that it returns the products that have a <code><b>userId</b></code> that matches the <code><b>req.user ._id</b></code> where we have saved the user´s session id (This is done from the <code><b>app.js</b></code> middleware so that it is available in all views). To do this we make the call by passing it an object with the filter <code><b>Product.find({userId: req.user._id})</b></code>',
          step3: 'We render the template by passing it the purchased products'
        },
        view: {
          step1: 'All products are listed',
          step2: 'Each one will have a link to edit with the corresponding product id and an editing attribute set to true to differentiate in the view it leads to if you want to edit or add a new product',
          step3: 'Each one will have a form with a hidden input with the id of the corresponding product so that when you press the delete button you know which one to delete',
          step4: 'All forms will have a hidden input with the csrfToken to have protection against CSRF attacks'
        }
      },
      cart: {
        infoBox: 'The products that have been added to the shopping cart are displayed.',
        app: {
          step1: 'Pressing one of the buttons will send a form and these always have to be protected from CSRF attacks, so we must add certain middlewares in our app file',
          step2: 'A store is defined to be used in the session middleware',
          step3: 'We define the session midleware with our store that will save session data in our database',
          step4: 'A csrf protection middleware is defined',
          step5: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        controller: {
          step1: 'We use the Mongoose method <code><b>populate()</b></code> so that it can show us all the product data, if we did not use it only the product id would appear',
          step2: 'We render the template by passing it the purchased products'
        },
        view: {
          step1: 'All products are listed',
          step2: 'Each one will have a form with a hidden input with the id of the corresponding product so that when you press the delete button you know which one to delete',
          step3: 'A form with the order button',
          step4: 'All forms will have a hidden input with the csrfToken to have protection against CSRF attacks'
        }
      },
      login: {
        infoBox: 'The login page is displayed.',
        app: {
          step1: 'When the field is incorrect, an error message will be saved in the session and once shown in the view it will be deleted, this will be possible with the <code><b>connect-flash</b></code> library, so we use it through <code><b>app.use</b></code>.',
          step2: 'A store is defined to be used in the session middleware',
          step3: 'We define the session midleware with our store that will save session data in our database',
          step4: 'A csrf protection middleware is defined',
          step5: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        routes: {
          step1: 'We save express´s <code><b>Router()</b></code> in the <code><b>router</b></code> variable for convenience',
          step2: 'We define the route for the <code><b>GET</b></code> of the login with <code><b>router.get("/login", authController.getLogin)</b></code>',
          step3: 'We define the route for the <code><b>POST</b></code> of the login with <code><b>router.post("/login", [...], authController.postLogin)</b></code>',
          step4: 'The difference is that in the <code><b>POST</b></code> of login it is checked by a middleware using the <code><b>body</b></code> of the <code><b>express-validator</b></code> if the fields comply with a series of rules to finally call <code><b>authController.postLogin</b></code>'
        },
        controller: {
          step1: 'For <code><b>getLogin</b></code> we render the template by panning the attributes',
          step2: 'Highlight the use of <code><b>flash</b></code> in the request in case we come from a post with errors, this message remains in the session and is deleted when it is not used',
          step3: 'For the <code><b>postLogin</b></code> we check that the fields are correct, if they are not correct, the errors will be saved in the session and it will be redirected back to the login view to show them , we will pass as attributes the values that are written in the fields so that they are not lost in the new rendering',
          step4: 'If the fields are correct, it is checked if the user exists, if it does not exist it will be redirected back to the login view with an <code><b>ERROR 422</code></b> and it will be passed as attributes an error message such as that the email or password is invalid and the values that are written in the fields so that they are not lost in the new rendering',
          step5: 'If the user exists we will use the <code><b>bcrypt</b></code> to check if the password is correct, otherwise it will be redirected back to the login view with a <code><b >ERROR 422</code></b> and an error message will be passed as attributes such as that the email or password is invalid and the values that are written in the fields so that they are not lost in the new rendering',
          step6: 'If the password is correct, the variable <code><b>isLoggedIn</b></code> with value <code><b>true</b></code> will be saved in the session, it will be saved in the user´s session and will be redirected to the store´s home view'
        },
        view: {
          step1: 'We check if we have errors to show them',
          step2: 'For each of the fields we will look to see if it contains validation errors to know if the CSS class <code><b>invalid</b></code> should be added',
          step3: 'It will also be checked if each field had something written in a previous render',
          step4: 'The form will have a hidden input with the csrfToken to protect against CSRF attacks'
        }
      },
      signup: {
        infoBox: 'The signup page is displayed.',
        app: {
          step1: 'We will use <code><b>dotenv</b></code> so that our Environment Variables are secure in the .env file, for security reasons this file will not be part of the repository',
          step2: 'In this view form validations will be made thanks to the <code><b>express-validator</b></code> library in the routes file and it will be there where we do the validations for each type of field. ',
          step3: 'When the field is incorrect, an error message will be saved in the session and once shown in the view it will be deleted, this will be possible with the <code><b>connect-flash</b></code> library, so we use it through <code><b>app.use</b></code>.',
          step4: 'A store is defined to be used in the session middleware',
          step5: 'We define the session midleware with our store that will save session data in our database',
          step6: 'A csrf protection middleware is defined',
          step7: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        routes: {
          step1: 'We save express´s <code><b>Router()</b></code> in the <code><b>router</b></code> variable for convenience',
          step2: 'We define the route for the <code><b>GET</b></code> of the signup with <code><b>router.get("/signup", authController.getSignup)</b></code>',
          step3: 'We define the route for the <code><b>POST</b></code> of the signup with <code><b>router.post("/signup", [...], authController.postSignup)</b></code>',
          step4: 'The difference is that in the <code><b>POST</b></code> of signup it is checked by a middleware using the <code><b>body</b></code> of the <code><b>express-validator</b></code> if the fields comply with a series of rules to finally call <code><b>authController.postSignup</b></code>'
        },
        controller: {
          step1: 'we create the transporter variable where we define the necessary configurations for sending mail with nodemailer, among them the most important the api_key',
          step2: 'we define the getSignup method to render the template by giving it the necessary attributes',
          step3: 'Highlight the use of flash in the request in case we come from a post with errors to save them in session and delete them when they are not necessary',
          step4: 'we define the postSignup method to check that the fields are correct, if they are not correct, the errors will be saved in the session and it will be redirected back to the signup view, passing the values in the fields as attributes so that they are not lost ',
          step5: 'The password is encrypted and the new user is saved in the database',
          step6: 'When finished, we are redirected to the login page and we will send a welcome email to the email address provided in the form'
        },
        view: {
          step1: 'We check if we have errors to show them',
          step2: 'For each of the fields we will look to see if it contains validation errors to know if the CSS class <code><b>invalid</b></code> should be added',
          step3: 'It will also be checked if each field had something written in a previous render',
          step4: 'The form will have a hidden input with the csrfToken to protect against CSRF attacks'
        }
      },
      addOrEditProducts: {
        infoBox: 'This view shows the form to add a product or edit it.',
        app: {
          step1: 'In this view form validations will be made thanks to the <code><b>express-validator</b></code> library in the routes file and it will be there where we do the validations for each type of field. ',
          step2: 'When the field is incorrect, an error message will be saved in the session and once shown in the view it will be deleted, this will be possible with the <code><b>connect-flash</b></code> library, so we use it through <code><b>app.use</b></code>.',
          step3: 'In the routes file it is checked if the user is logged in to render the view, this is done through the isAuth middleware, pressing one of the buttons will send a form and these always have to be protected from CSRF attacks, with which we must add certain middlewares in our app file',
          step4: 'A store is defined to be used in the session middleware',
          step5: 'We define the session midleware with our store that will save session data in our database',
          step6: 'A csrf protection middleware is defined',
          step7: 'A middleware is defined where the authentication and the csrfToken will be saved in local variables'
        },
        model: {
          step1: 'Product Mongoose schema is defined',
          step2: 'Save as a Mongoose model'
        },
        controller: {
          step1: 'The Product model is imported for the <code><b>getEditProduct</b></code> method.',
          step2: 'We define the getAddProduct method and render by passing the properties',
          step3: 'Among them we will set the editing property to false to differentiate it from editing',
          step4: 'As we are not in editing mode it will not have errors so the hasError will be false and both the errorMessage and the validationErrors will be empty.',
          step5: 'We define the getEditProduct method',
          step6: 'We collect the id of the product that we want to edit with the parameters of the request <code><b>req.params.productId</b></code>',
          step8: 'Thanks to the import of the Product model it will be able to use Mongoose and its <code><b>find()</b></code> method',
          step9: 'If it does not find the product id it will redirect us to the product list view and we will not continue with the code.',
          step10: 'We render by passing the properties',
          step11: 'Among them we will set the editing property to true to differentiate it from adding a new product',
          step12: 'As we are in editing mode for the first time there will be no errors so the hasError will be false and both the errorMessage and the validationErrors will be empty.'
        },
        view: {
          step1: 'We check if we have errors to show them',
          step2: 'It checks if we are in editing mode to change the form post to edit-product, otherwise it will be add-product',
          step3: 'For each of the fields we will look to see if it contains validation errors to know if the <code><b>invalid</b></code> CSS class should be added',
          step4: 'It will also be checked if each field had something written in a previous render',
          step5: 'We check if we are in editing mode to obtain the id of the product to edit in an empty field',
          step6: 'The form will have a hidden input with the csrfToken to protect against CSRF attacks'
        }
      },
      orders: {
        infoBox: 'The orders that have been added to the user are displayed.',
        model: {
          step1: 'The Mongoose schema of the order is defined',
          step2: 'Save as a Mongoose model'
        },
        controller: {
          step1: 'Thanks to the import of the Order model it will be able to use Mongoose and its <code><b>find()</b></code> method',
          step2: 'We make the call with Moongose to the database so that it returns the orders that have a <code><b>userId</b></code> that matches the <code><b>req.user </b></code> where we have saved the user session id (This is done from the <code><b>app.js</b></code> middleware so that it is available in all views). To do this we make the call by passing it an object with the filter <code><b>Order.find({userId: req.user})</b></code>',
          step3: 'We render the template by passing the acquired commands'
        },
        view: {
          step1: 'All orders are listed',
          step2: 'For each one, its id will be collected as a title.',
          step3: 'A list will be made with all the products it contains, showing the product title and quantity'
        }
      }
    }
  }
}

module.exports = translations
