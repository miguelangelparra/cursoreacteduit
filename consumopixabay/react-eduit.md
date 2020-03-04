Profesor: cristiandracedo@hotmail.com

<h1>REACT</h1>
Es una libreria
Utiliza un Virtual DOM ( Document Object Model) 
ReactDom 
Utiliza un lenguaje: JSX (JavaScript XML)  o Javascript Extendido
Requisitos: 
Gestor de Paquetes 
-NodeJs(NPM), o
-Yarn (facebook)
Transpilador (Translate and Compile)
Es un programa que traduce código de un pseudolenguaje a otro lenguaje de programación
-Babel 
Compilador
Es un programa que permite empaquetar nuestro Proyecto para producción. 
-WebPack

Todo lo anterior se encuentra en el Paquete: 
-create-react-app
- npx create-react-app mi-proyecto   (Para crear el Proyecto)

En la carpeta que quieras iniciar el proyecto:
-Abrir consola
- npm install –g create-react-app  (Para instalar de forma general ) 
- create-react-app mi-proyecto   (Para crear el Proyecto)
-(Luego de instalar)  cd (nombre del proyecto)
- npm run start 

La Single Page App (SPA)
Están integradas por componentes que a la vez pueden contener otros componentes
Los componentes tienen ciclos de vida

React Trabaja el modelo MVC ( Se concentra en la vista V) 

PARA BORRAR CACHE EN NODE (npm cache clean --force) 


Ciclo de vida
  //Creaciond ecomponente
  componentWillMount(){
//Se ejecuta antes de renderizar el componente
  }

  render(){
    //renderiza el componente
  }
  componentDidMount(){
    //funciona despues de renderizar el componente
  }



  //actualizacion
  render(){}
  componentWillUpdate(){

  }
//Destruccion 
  componentWillUnmount(){
    //funciona justo antes de la destruccion del componente
  }



<React.Fragment> </React.Fragment o <> </>
Etiquetas que permiten agrupar multiples elementos sin que aparezca la etiqueta contenedora en el DOM 

Los props son caracteristicas inmutables por parte del componente que las posee. 

El state es una caracteristicasde un componente cuyo valor puede cambiar 


https://elabismodenull.wordpress.com/
https://elabismodenull.wordpress.com/2015/11/25/reactjs-el-ciclo-de-vida-de-un-componente-i/
https://elabismodenull.wordpress.com/2015/12/16/reactjs-el-ciclo-de-vida-de-un-componente-ii/


Api de imagenes:
https://pixabay.com/api/docs/
en cuenta nubes
https://pixabay.com/api/?key=15481773-fa5ff547d8009cb386503e59b&q=yellow+flowers&image_type=photo

Herramienta para la visualizacion amigables de los Json
Extension de Chrome:
JSON VIEWER


Para usar Material Design 
https://material-ui.com/
npm install @material-ui/core

------------------

Incluir Bootstrap en React
Cristhian
iamcamiloperez
react y bootstrap

Puedes incluir el framework de bootstrap en el poderoso react siguiendo estos pasos:

1. instalar bootstrap
Para instalar bootstrap, ve a la terminal, a la carpeta de tu proyecto y ejecuta el comando:

	npm install bootstrap
2. Importa las librerias de bootstrap
En node_modules se agregarán los archivos de bootstrap. Ve al archivo index.js de tu proyecto y justo al principio pones el siguiente código para importar la librería

	import 'bootstrap/dist/css/bootstrap.min.css';

Para poder usar también los componentes JavaScript de bootstrap debes instalar tambien
	npm install jquery popper.js
Y debes importar las librerías correspondientes

	import $ from 'jquery';
	import Popper from 'popper.js';
	import 'bootstrap/dist/js/bootstrap.bundle.min';
Debes volver a iniciar tu servidor y listo. Ya puedes usar bootstrap en react.
Gracias por leer este tutorial, deja tu comentario o sugerencia 😃