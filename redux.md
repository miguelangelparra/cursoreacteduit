
npm i -g redux
npm i -g react-redux


En los Componentes:
¿Cuando? 
Partes de nuestra App que van a ser representadas en la vista
Presentacion <= Tipos => Contenedor
En el Redux Store:

-Actions => ¿que?  
Peticion de cambio - Es el gatillador que indica que es lo que tiene que pasar

const action = SUMAR{
    type:'sumar' (Obligatorio)
payload: (Aqui va el valor) (Es un valor opcional)
}

-Reducers=> ¿Como? 
Funcion que toma el estado anterior y retona el estado nuevo
const reducer = (state, action ) => nuevo estado

-Store => ¿Donde?
Almacen de estado de nuestra App


Hay que conectar a react con redux
<Provider store=createStore(state)> 
   <App/>
<Provider>
Esto se debe hacer en el app o en el index
debe contener a toda la aplicacion para que todos los componentes tengan acceso  

Para obtener el estado en algun componente: 
store.getState(state)

Para solicitar cambios en el estado:
store.dispatch(action.sumar,4)

Para Heredar Estado:
store.mapStateToProps(state.numero)