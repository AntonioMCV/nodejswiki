const basicWebApplicationsInfoBoxPart1 = require('./basics/webapplications/es-infoBox-part1')
const basicWebApplicationsInfoBoxPart2 = require('./basics/webapplications/es-infoBox-part2')

var translations = {
  navigation: {
    basics: 'Básicos',
    webApplications: 'Aplicaciones Web',
    globalVariables: 'Variables Globales',
    modules: 'Módulos',
    examples: 'Ejemplos',
    store: 'Tieda - mongoose',
    libraries: 'Librerias',
    express: 'Express',
    path: 'Path',
    mysqlSequelize: 'MySQL2 - Sequelize',
    mongodbMongoose: 'MongoDB - Mongoose',
    language: 'Idioma'
  },
  home: {
    title: 'NodeJS Wiki',
    warning: '<b>Esta Wiki está destinada a personas que ya tienen algunos conocimientos con NodeJS</b> pero que por diversos motivos han olvidado algunas de sus características o necesitan fortalecerlas.',
    introduction: 'Introducción',
    introDetails: 'Aquí encontraremos varios ejemplos para saber cómo utilizar las principales ventajas de NodeJS.<br/><br/> Ten en cuenta que por motivos de incompatibilidad se han tenido que quitar las llaves de las cajas de código de ejemplo y no es completamente fiel a cómo realmente debe escribirse.<br/><br/> Si lo necesita, siempre puede consultar el código original en:<br/><br/>',
    infoBoxTitle: '¿Qué es Node.js?',
    infoBox: 'Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.'
  },
  basics: {
    webApplications: {
      title: 'Aplicaciones Web',
      infoBoxTitle: 'Levantar una Aplicación Web con <a href="/' + global.config.site.language + '/libraries/express">Express</a> y EJS (Sistema de plantillas HTML):',
      infoBoxPart1: basicWebApplicationsInfoBoxPart1,
      infoBoxPart2: basicWebApplicationsInfoBoxPart2
    },
    globalVariables: {
      title: 'Variables Globales',
      infoBoxTitle: 'Diferentes variables en diferentes entornos de ejecución',
      infoBox: 'En node JS no tenemos la variable global <b>window</b> definida ya que NodeJS es un enterno de ejecución totalmente diferente al navegador y por lo tanto el objeto global de window no existe, no tenemos una ventana donde estemos mostrando los datos. Si que tenemos un objeto global que si que es comun para todos los entornos y este es <b>globalthis</b>.<ul><li>Si utilizamos globalthis en el navegador este apunta a la variable <b>window</b>.</li><li>Si la utilizamos en NodeJS apunta a la variable <b>global</b></li></ul>Como apunte es bueno saber que cualquier metodo predefinido en JavaScript viene definido por estas variables globales como console.log, math, fetch, promise ect.'
    },
    modules: {
      title: 'Módulos',
      infoBox1Title: 'Patrones de diseño de módulo',
      infoBox1SubTitle: 'CommonJS',
      infoBox1Part1: 'Es la forma antigua y por defecto de NodeJS, si ponemos este código en un archivo <code>suma.js</code>.',
      infoBox1Part2: 'Para importarlo en otro archivo lo haremos con <b>require</b>',
      infoBox2SubTitle: 'ES Modules',
      infoBox2Part1: 'Es la forma más moderna y recomendada de NodeJS, si ponemos este código en un archivo <code>suma.mjs</code>.',
      infoBox2Part2: 'Para importarlo en otro archivo lo haremos con <b>import</b>',
      infoBox3Title: 'Módulos nativos',
      infoBox3: "Los módulos nativos son las librerías que se incluyen por defecto en Node.js, desde la versión 16 de NodeJS es recomendable importarlos con el prefijo node: por ejemplo <code>require os = require('node:os')</code>",
      infoBox4Title: 'Módulo File System',
      infoBox4: 'Es una librería de Node.js que permite interactuar con el sistema de archivos.',
      infoBox5Title: 'Módulo Path',
      infoBox5: 'Nos da informacion sobre el path de los archivos que tenemos, vamos a poder construir nuevas rutas de archivos, unir rutas, saber la extension de un archivo ect.'
    }
  },
  libraries: {
    express: {
      title: 'Express',
      infoBoxTitle: 'Descripción general del Framework Express',
      infoBox: 'Express es un framework web para Node.js que simplifica el proceso de creación de aplicaciones web y API. Proporciona un conjunto de herramientas y utilidades que hacen que el desarrollo de aplicaciones sea más rápido y eficiente al abstraer muchas de las complejidades involucradas en el manejo de solicitudes y respuestas HTTP, enrutamiento y administración de middleware.',
      infoBox2Title: 'Principales características y usos:',
      infoBox2: '<ol><li><strong>Enrutamiento:</strong> Express facilita la definición de rutas para diferentes partes de su aplicación. Puede especificar cómo debe manejar las solicitudes HTTP (GET, POST, PUT, DELETE, etc.) para rutas específicas.</li><li><strong>Middleware:</strong> Express permite el uso de middleware, que son funciones que se ejecutan antes de que las solicitudes lleguen a las rutas definidas. El middleware se puede utilizar para tareas como autenticación, manejo de sesiones, registro de solicitudes, compresión de respuestas y más.</li><li><strong>Manejo de solicitudes y respuestas:</strong> Express simplifica la manipulación de solicitudes y respuestas HTTP. , proporcionando una interfaz fácil de usar para acceder a los datos de la solicitud y generar respuestas adecuadas.</li><li><strong>Manejo de plantillas:</strong> Si bien Express en sí no incluye un motor de plantillas, se usa comúnmente con motores de plantillas como EJS o Pug, permitiendo generar contenido HTML dinámico y presentarlo de manera más eficiente.</li><li><strong>Integración con Bases de Datos y Servicios:</strong> Express puede integrarse con diferentes bases de datos y servicios, permitiendo la construcción de aplicaciones completas que interactúan con sistemas de almacenamiento de datos.</li><li><strong>Creación de API:</strong> Express se utiliza ampliamente para crear API (interfaces de programación de aplicaciones) que permiten que diferentes aplicaciones o servicios se comuniquen. eficientemente.</li></ol>'
    },
    path: {
      title: 'Path',
      infoBoxTitle: 'Descripción general del módulo "Path" de Node.js',
      infoBox: 'La biblioteca <code>path</code> es un módulo integrado en Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios en sistemas de archivos. Su objetivo principal es manejar la manipulación de rutas de manera independiente de la plataforma, lo que significa que funciona de la misma manera en los sistemas operativos Windows, macOS y Linux.',
      infoBox2Title: 'Principales funciones y usos:',
      infoBox2: '<ol><li><code>path.join(...paths)</code>: esta función combina segmentos de ruta en una única ruta coherente, teniendo en cuenta las diferencias en las barras diagonales utilizadas en diferentes sistemas operativos. Esto es útil para construir rutas de manera confiable sin preocuparse por las convenciones de separación de directorios.</li><li><code>path.resolve(...paths)</code>: esta función resuelve rutas relativas y absolutas en una ruta absoluta canónica . Siempre produce una ruta completa basada en el directorio actual.</li><li><code>path.basename(path, ext)</code>: devuelve el nombre base del archivo o directorio en la ruta proporcionada. Si la extensión se especifica como segundo argumento, se puede eliminar de la salida.</li><li><code>ruta.dirname(ruta)</code>: devuelve el directorio desde el que se origina la ruta proporcionada.</li><li><code>ruta.extname(ruta)</code>: devuelve la extensión del archivo de la ruta proporcionada.</li><li><code>ruta.parse(ruta)</code>: Divide una ruta en un objeto que contiene partes individuales, como el directorio, el nombre base y la extensión.</li><li><code>path.normalize(path)</code>: normaliza la ruta eliminando "redundantes". ." y "." segmentos y garantizar separadores de directorio consistentes.</li><li><code>path.relative(from, to)</code>: calcula la ruta relativa desde la ubicación "from" hasta la ubicación "to".</li></ol>'
    },
    mysqlSequelize: {
      title: 'MySQL2 - Sequelize',
      infoBoxTitle: 'Descripción de la Biblioteca MySQL2',
      infoBox: 'La biblioteca <code>mysql2</code> es una biblioteca de Node.js que se utiliza para conectarse a bases de datos MySQL y realizar operaciones de base de datos. Esta biblioteca es una mejora con respecto a la antigua biblioteca <code>mysql</code> y se ha vuelto popular debido a su mejor rendimiento y su capacidad para admitir consultas asíncronas, consultas preparadas y consultas basadas en promesas en Node.js.',
      infoBox2Title: 'Características Principales y Usos::',
      infoBox2: '  <ol><li><strong>Conexión a la Base de Datos:</strong> <code>mysql2</code> te permite establecer conexiones a bases de datos MySQL desde una aplicación Node.js. Puedes configurar la conexión especificando detalles como el host, el puerto, el usuario y la contraseña.</li><li><strong>Consultas SQL:</strong> Puedes ejecutar consultas SQL en la base de datos utilizando <code>mysql2</code>. Esto incluye consultas SELECT para recuperar datos, consultas INSERT, UPDATE y DELETE para modificar datos, y cualquier otro tipo de consulta SQL compatible con MySQL.</li><li><strong>Consultas Preparadas:</strong> <code>mysql2</code> admite consultas preparadas, lo que mejora la seguridad al prevenir la inyección de SQL. Las consultas preparadas permiten separar los datos de la consulta, dificultando que los atacantes realicen ataques de inyección SQL.</li><li><strong>Operaciones Asíncronas y Promesas:</strong> <code>mysql2</code> admite operaciones asíncronas y promesas, lo que facilita la gestión de tareas de base de datos sin bloquear el hilo principal de Node.js. Esto es especialmente útil para aplicaciones web y servicios en tiempo real que deben manejar muchas solicitudes simultáneas.</li><li><strong>Conexiones Múltiples:</strong> Puedes establecer múltiples conexiones a diferentes bases de datos o al mismo servidor de base de datos, lo que facilita la gestión de bases de datos complejas en aplicaciones grandes.</li><li><strong>Transacciones:</strong> <code>mysql2</code> admite transacciones, lo que te permite realizar múltiples operaciones de base de datos como una unidad atómica. Esto es útil para garantizar que las operaciones de base de datos se completen correctamente o se reviertan en caso de error.</li><li><strong>Eventos y Notificaciones:</strong> <code>mysql2</code> te permite escuchar eventos y notificaciones de la base de datos, lo que puede ser útil para implementar aplicaciones en tiempo real que reaccionen a cambios en los datos de la base de datos.</li></ol>',
      infoBox3Title: 'Uso de datos SQL en Node.js:',
      infoBox3: '<p>La biblioteca Sequelize es una herramienta de Mapeo Objeto-Relacional (ORM) para Node.js. Un ORM es una técnica que te permite interactuar con bases de datos relacionales utilizando objetos y consultas similares a SQL, en lugar de escribir consultas SQL directamente. Sequelize está diseñada para trabajar con bases de datos SQL como MySQL, PostgreSQL, SQLite y MSSQL, sus características principales y usos son:</p><ol><li><strong>Mapeo de Objetos a Tablas:</strong> Sequelize te permite definir modelos en JavaScript que representan tablas en la base de datos. Cada modelo tiene propiedades que corresponden a las columnas de la tabla y métodos para realizar operaciones en la base de datos.</li><li><strong>Abstracción de Consultas:</strong> Con Sequelize, puedes interactuar con la base de datos utilizando métodos en JavaScript en lugar de escribir consultas SQL directamente. Por ejemplo, puedes crear, leer, actualizar y eliminar registros de una manera más orientada a objetos.</li><li><strong>Consultas Seguras:</strong> Sequelize ofrece protección contra la inyección de SQL al utilizar consultas preparadas y validación automática de datos.</li><li><strong>Relaciones:</strong> Puedes definir relaciones entre tablas en la base de datos utilizando asociaciones, como uno a uno, uno a muchos y muchos a muchos. Sequelize maneja automáticamente la creación de consultas JOIN para estas relaciones.</li><li><strong>Migraciones de Base de Datos:</strong> Sequelize facilita la gestión de esquemas de base de datos mediante migraciones. Puedes definir cambios en la estructura de la base de datos en archivos de migración y aplicarlos o revertirlos según sea necesario.</li><li><strong>Ganchos (Hooks) y Validación:</strong> Sequelize te permite definir ganchos que se ejecutan antes o después de operaciones en la base de datos. También proporciona un sistema de validación para garantizar la integridad de los datos.</li><li><strong>Soporte para Promesas y Asincronía:</strong> Sequelize está diseñada para trabajar de manera asíncrona y admite el uso de promesas, lo que es especialmente útil en aplicaciones Node.js que manejan muchas solicitudes concurrentes.</li></ol>'
    },
    mongodbMongoose: {
      title: 'MongoDB - Mongoose',
      infoBoxTitle: 'Visión General de MongoDB',
      infoBox: 'MongoDB es un sistema de base de datos NoSQL que se utiliza comúnmente en aplicaciones Node.js. Es conocido por su capacidad de almacenar datos en un formato flexible similar a documentos, en contraste con las tablas rígidas utilizadas en las bases de datos SQL tradicionales. Aquí tienes una visión general de MongoDB y su uso en Node.js:',
      infoBox2Title: 'Características Principales de MongoDB:',
      infoBox2: '<ol><li><strong>Documentos Flexibles:</strong> MongoDB permite almacenar documentos con estructuras flexibles. Esto significa que cada documento en una colección puede tener diferentes campos y tipos de datos.</li><li><strong>Escalabilidad:</strong> MongoDB es altamente escalable y es capaz de manejar grandes cantidades de datos y un alto rendimiento. Es comúnmente utilizado en aplicaciones web y móviles con alta concurrencia.</li><li><strong>Consultas Poderosas:</strong> MongoDB admite consultas ricas y flexibles, incluyendo consultas geoespaciales y agregaciones avanzadas.</li><li><strong>Replicación y Tolerancia a Fallos:</strong> MongoDB admite la replicación automática de datos y la tolerancia a fallos, lo que garantiza la disponibilidad y redundancia de datos.</li></ol>',
      infoBox3Title: 'Uso de MongoDB en Node.js:',
      infoBox3: '<p>Para interactuar con MongoDB en una aplicación Node.js, puedes utilizar el controlador oficial de MongoDB para Node.js, comúnmente conocido como "mongodb," o bibliotecas de nivel superior que simplifican la interacción con MongoDB, como Mongoose. Estos controladores y bibliotecas te permiten:</p><ul><li>Conectar tu aplicación Node.js a una base de datos MongoDB.</li><li>Insertar, actualizar, eliminar y consultar documentos en colecciones MongoDB desde Node.js.</li><li>Definir modelos y esquemas para tus documentos, proporcionando estructura y validación, especialmente cuando utilizas Mongoose.</li><li>Realizar operaciones avanzadas como agregaciones y consultas geoespaciales.</li><li>Administrar índices para mejorar el rendimiento de las consultas.</li></ul>'
    }
  },
  examples: {
    store: {
      navigation: {
        shop: 'Sobre la Tienda',
        products: 'Productos',
        cart: 'Carrito',
        orders: 'Ordenes',
        addProducts: 'Añadir Productos',
        adminProduct: 'Administrar Productos'
      },
      index: {
        title: 'Tienda con mongoose',
        warning: 'Para comprender mejor como se ha levantado este servidor, ver las diferentes configuraciones y midlewares que se han definido echa un vistazo al archivo <code>app.js</code>',
        infoBox: 'Para este ejemplo se ha hecho uso del MVC (Modelo Vista Controlador) y de los siguientes paquetes o librerias: <h2>Paquetes Nativos</h2><ul><li><b>Path:</b> Para utilizar utilidades para trabajar con rutas de archivos y directorios en sistemas de archivos</li></ul><h2>Paquetes de Terceros</h2><ul><li><b>Express:</b> Para simplificar el proceso involucrado en el manejo de solicitudes y respuestas HTTP, enrutamiento y administración de middleware.</li><li><b>Body-parser:</b> Para convertir todas las URL del cuerpo en string con el paquete body-parser</li><li><b>Mongoose:</b> Para conectarse a nuestra base de datos MongoDB y simplificar la interacción</li><li ><b>Express-session:</b> Para almacenar y recuperar datos en nuestra sesión</li><li><b>Connect-mongodb-session:</b> Para almacenar y recuperar datos en nuestra sesión de la base de datos MongoDB</li><li><b>Csurf:</b> Para generar tokens de protección contra ataques CSRF</li><li><b>Connect-flash:</b> Para escribir en sesión y eliminarlo una vez lo hayamos leído</ li><li><b>Multer:</b> Para analizar parte de las solicitudes entrantes de actualizaciones de nuestros archivos desde formularios</li></ul>En cualquier caso se irá indicando en cada una de las páginas del ejemplo cuando requerimos usar cada uno de estos paquetes. Puedes ir navegando por el ejemplo desde el menu verde.'
      },
      products: {
        infoBox: 'En esta página se listan todos los productos disponibles de la tienda, con la posibilidad de agregarlos al carrito si el usuario esta logeado.',
        app: {
          step1: 'En esta vista si el usuario esta logeado aparecerá el botón añadir al carro, al pulsar uno de los botones se enviará un formulario y estos siempre tienen que estar protegidos de ataques CSRF, con lo cual hay que añadir ciertos middlewares en nuestro archivo app',
          step2: 'Se define una store para usarla en el middleware de la sesión',
          step3: 'Definimos el midleware de sesión con nuestra store que nos guardara datos de sesión en nuestra base de datos',
          step4: 'Se define un middleware de protección csrf',
          step5: 'Se define un middleware donde se guardarán en variables locales la autentificación y el csrfToken'
        },
        model: {
          step1: 'Se define el esquema Mongoose del producto',
          step2: 'Se guarda como un modelo Mongoose'
        },
        controller: {
          step1: 'Gracias a la importacion del modelo Product este podra hacer uso de Mongoose y su metodo <code><b>find()</b></code>',
          step2: 'Hacemos la llamada con Moongose a la base de datos para que nos devuelva todos los productos que hay en la colección Product con <code><b>Products.find()</b></code>',
          step3: 'Renderizamos la plantilla pasandole los productos adquiridos'
        },
        view: {
          step1: 'Se listan todos los productos',
          step2: 'Por cada producto se comprueba que el usuario este logueado',
          step3: 'En caso afirmativo se muestra el botón "Add to cart"',
          step4: 'Una vez confirmado se hace un include add-to-cart.ejs pasandole el producto de la iteracción como propiedad',
          step5: 'Este llevará un formulario con un input oculto con la id del producto que le hemos pasado',
          step6: 'Todos los formularios llevarán un input oculto con el csrfToken para tener protección contra ataques CSRF'
        }
      },
      productDetail: {
        infoBox: 'Se muestra la página de detalle de un producto.',
        app: {
          step1: 'En esta vista si el usuario esta logeado aparecerá el botón añadir al carro, al pulsar uno de los botones se enviará un formulario y estos siempre tienen que estar protegidos de ataques CSRF, con lo cual hay que añadir ciertos middlewares en nuestro archivo app',
          step2: 'Se define una store para usarla en el middleware de la sesión',
          step3: 'Definimos el midleware de sesión con nuestra store que nos guardara datos de sesión en nuestra base de datos',
          step4: 'Se define un middleware de protección csrf',
          step5: 'Se define un middleware donde se guardarán en variables locales la autentificación y el csrfToken'
        },
        model: {
          step1: 'Se define el esquema Mongoose del producto',
          step2: 'Se guarda como un modelo Mongoose'
        },
        controller: {
          step1: 'Importacion del modelo Product',
          step2: 'Guardamos el id del producto que nos llega a través del paramatro de la URL en la variable <code><b>prodId</b></code>',
          step3: 'Gracias a la importacion del modelo Product este podra hacer uso de Mongoose y su metodo <code><b>findById()</b></code>',
          step4: 'Hacemos la llamada con Moongose a la base de datos para que busque y nos devuelva el producto que hay en la colección Product con <code><b>Products.findById(prodId)</b></code>',
          step5: 'Renderizamos la plantilla pasandole el producto adquirido'
        },
        view: {
          step1: 'Se muestra el producto',
          step2: 'Se comprueba que el usuario haya iniciado sesión',
          step3: 'En caso afirmativo se muestra el botón "Add to cart"',
          step4: 'Una vez confirmado se hace un include add-to-cart.ejs',
          step5: 'Este llevará un formulario con un input oculto con la id del producto',
          step6: 'Todos los formularios llevarán un input oculto con el csrfToken para tener protección contra ataques CSRF'
        }
      },
      adminProducts: {
        infoBox: 'En esta página se listan solo los productos que han sido creados por el usuario de la sesión, con la posibilidad de editarlos o borrarlos.',
        model: {
          step1: 'Se define el esquema Mongoose del producto',
          step2: 'Se guarda como un modelo Mongoose'
        },
        controller: {
          step1: 'Gracias a la importacion del modelo Product este podra hacer uso de Mongoose y su metodo <code><b>find()</b></code>',
          step2: 'Hacemos la llamada con Moongose a la base de datos para que nos devuelva los productos que tengan un <code><b>userId</b></code> que coincidan con el <code><b>req.user._id</b></code> donde tenemos guardado el id de la sesion del usuario (Esto se hace desde el middleware de <code><b>app.js</b></code> para que este disponible en todas las vistas). Para ello hacemos la llamada pasandole un objeto con el filtro <code><b>Product.find({userId: req.user._id})</b></code>',
          step3: 'Renderizamos la plantilla pasandole los productos adquiridos'
        },
        view: {
          step1: 'Se listan todos los productos',
          step2: 'Cada uno llevará un enlace para editar con la id del producto correspondiente y un atributo de edicion puesto a true para diferenciar en la vista a la que lleva si se quiere editar o añadir un producto nuevo',
          step3: 'Cada uno llevará un formulario con un input oculto con la id del producto correspondiente para que al presionar el botón delete sepa cual tiene que borrar',
          step4: 'Todos los formularios llevarán un input oculto con el csrfToken para tener protección contra ataques CSRF'
        }
      }
    }
  }
}

module.exports = translations
