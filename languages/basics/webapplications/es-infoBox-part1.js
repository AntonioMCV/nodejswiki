const basicWebApplicationsInfoBoxPart1 = `<ol>
    <li><strong>Configura tu Entorno:</strong> Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.</li>
    
    <li><strong>Crea un Directorio para tu Proyecto:</strong> Abre una terminal y crea un nuevo directorio para tu aplicación web. Luego, navega al directorio recién creado.
      <pre>
        <code>mkdir mi-aplicacion-express-ejs
cd mi-aplicacion-express-ejs</code>
      </pre>
    </li>
    
    <li><strong>Inicializa tu Proyecto:</strong> Ejecuta el siguiente comando para crear un archivo <code>package.json</code> que gestionará las dependencias de tu proyecto.
      <pre>
        <code>npm init -y</code>
      </pre>
    </li>
    
    <li><strong>Instala Express y EJS:</strong> Utiliza el siguiente comando para instalar Express y EJS como dependencias de tu proyecto.
      <pre>
        <code>npm install express ejs --save</code>
      </pre>
    </li>
    
    <li><strong>Crea tu Aplicación Express:</strong> Crea un archivo JavaScript, por ejemplo, <code>app.js</code>, y comienza a construir tu aplicación. Asegúrate de configurar EJS como el motor de plantillas. Por problemas de compatibilidad deberas cambiar la parte del ejemplo "<b>#{port}</b>", donde esta el simbolo <b>"#" por "$"</b>.
      <pre>
        <code>
          const express = require('express');
          const app = express();
          const port = 3000;

          // Configurar EJS como motor de plantillas
          app.set('view engine', 'ejs');

          // Ruta principal
          app.get('/', (req, res) => {
            // Renderizar una vista EJS llamada 'index.ejs'
            res.render('index', { mensaje: '¡Hola, mundo!' });
          });

          // Iniciar el servidor
          app.listen(port, () => {
            console.log("Servidor Express con EJS escuchando en el puerto #{port}");
          });
        </code>
      </pre>
    </li>
    
    <li><strong>Crea una Carpeta para tus Vistas:</strong> En el directorio principal de tu proyecto, crea una carpeta llamada <code>views</code>. Dentro de esta carpeta, puedes colocar tus archivos de plantilla EJS, por ejemplo, <code>index.ejs</code>. Por problemas de compatibilidad deberas cambiar la parte del ejemplo "<b>#{mensaje}</b>", donde esta el simbolo <b>"#{" por "<%="</b> y donde esta <b>"}" por "%>"</b>`

module.exports = basicWebApplicationsInfoBoxPart1
