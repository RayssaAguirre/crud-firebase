// Se importa un sdk de firebase para hacer la conexión con firebase según el proyecto creado
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
// Como se creo una base de datos en firestore se debe importar un cdn para poder utilizar la base de datos
import {
  getFirestore,
  collection,  
  onSnapshot, //escucha cambios en tiempo real
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"; 

// Configuracion de Firebase para la web
const firebaseConfig = {
  //Aqui van las credenciales
  apiKey: "AIzaSyCuun-Eb3w7eUdc3DTN_yWaxipepCX_9p0",
  authDomain: "crud---sisgador.firebaseapp.com",
  projectId: "crud---sisgador",
  storageBucket: "crud---sisgador.appspot.com",
  messagingSenderId: "1055110345330",
  appId: "1:1055110345330:web:d5b52e07a8ae55bb6708eb"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(); //esta funcion hace que se conecte con las credenciales proporcionados

//funcion para guardar una colección
export const guardarUsuario = (nombre, apellido, ci, item, cargo, cel) =>
  addDoc(collection(db, "Usuario"), { nombre, apellido, ci, item, cargo, cel});

//funcion para obtener todos los usuarios registrados  
export const obtenerUsuario = (callback) =>
  onSnapshot(collection(db, "Usuario"), callback);

//funcion para eliminar todos los usuarios
export const eliminaUsuario = (id) => deleteDoc(doc(db, "Usuario", id));

//funcion que obtiene un usuario por su id, sirve para eliminar o editar
export const obtenerUsuarioXid = (id) => getDoc(doc(db, "Usuario", id));

//funcion que actualiza un usuario por su id y lo que se vaya ingresar por pantalla
export const actualizarUsuario = (id, objUsuario) =>
  updateDoc(doc(db, "Usuario", id), objUsuario);

