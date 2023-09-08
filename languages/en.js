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
        infoBox: 'For this example, use has been made of the MVC (Model View Controller) and the following packages or libraries: <h2>Native Packages</h2><ul><li><b>Path:</b> To use utilities for work with file and directory paths in file systems</li></ul><h2>Third Party Packages</h2><ul><li><b>Express:</b> To simplifies the proccess involved in handling HTTP requests and responses, routing, and middleware management.</li><li><b>Body-parser:</b> To convert all bodys URL to string with body-parser package</li><li><b>Mongoose:</b> To connect to our MongoDB database and simplify the interaction</li><li><b>Express-session:</b> To store and retrieve data in our session</li><b>Connect-mongodb-session:</b> To store and retrieve data in our session from MongoDB database<li><b>Csurf:</b> To generate tokens to protect against CSRF attacks</li><li><b>Connect-flash:</b> To write in session and remove it once we have read it</li><li><b>Multer:</b> To analize part incomming request for our files updates from forms</li></ul>In any case, it will be indicated on each of the example pages when we need to use each of these packages. You can browse the example from the green menu.'
      },
      products: {
        infoBox: 'This page lists all the available products in the store, with the possibility of adding them to the cart if the user is logged in.',
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
      }
    }
  }
}

module.exports = translations
