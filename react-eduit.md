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




