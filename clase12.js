/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
  const objetoInformacion = {
    nombre: "",
    password: "",
    telefono: "",
    hobbies: [],
    nacionalidad: "",
  };

  const nom = document.querySelector("#nom");
  const pass = document.querySelector("#pass");
  const tel = document.querySelector("#tel");
  const hobbies = document.querySelectorAll("[name=hobbies]");
  // const hobbies = document.getElementsByName("hobbies");
  const nacionalidad = document.querySelectorAll("[name=nacionalidad]");

  objetoInformacion.nombre = nom.value;
  objetoInformacion.password = pass.value;
  objetoInformacion.telefono = tel.value;
  hobbies.forEach((hobbie) => {
    if (hobbie.checked) {
      objetoInformacion.hobbies.push(hobbie.id);
    }
  });
  nacionalidad.forEach((nacion) => {
    if (nacion.checked) {
      objetoInformacion.nacionalidad = nacion.id;
    }
  });

  return objetoInformacion;
}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const datos = capturarDatosFormulario();
  //console.log(datos);

  const errores = validarInformacion(datos);
  //console.log(errores);

  renderizarErrores(errores);

  //mostrarMensajeExito(errores);
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
function validarInformacion(usuario) {
  console.log(usuario);
  let errores = {
    nom: "",
    pass : "",
    tel: "",
    hobbies : "",
    nacionalidad : "",
  };
  // 👇 desarrollar aqui la funcion

  // validando el nombre
  if ( usuario.nombre.length < 3) {
    
    errores.nom = "El nombre debe tener al menos 3 caracteres. \n";
  }
  if (!(isNaN(parseInt(usuario.nombre))) ){
    errores.nom += "El nombre no debe ser un numero \n";
  }
  // validando la contraseña
  if (usuario.password.trim().length < 6) {
    errores.pass = "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos. \n";
  }
  if (usuario.password.trim().length > 12) {
    errores.pass += "La contraseña no tener mas de 12 caracteres, entre letras y símbolos. \n";
  }

  // validando el telefono

  if (usuario.telefono.length < 10) {
    errores.tel = "No es un teléfono válido.";
  }
  // validando los hobbies
  if (usuario.hobbies.length > 4) {
    errores.hobbies = "Sólo es posible seleccionar 4 hobbies.";
  }
  // validando la nacionalidad
  if (usuario.nacionalidad == "") {
    errores.nacionalidad = "Debe seleccionar una nacionalidad";
    //errores[nacionalidad] = "Debe seleccionar una nacionalidad.";
  }
  /*
  
  console.log("estoy en la validacion de datos");
  console.log(errores);
  */
  return errores;
}

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
function renderizarErrores(listado) {

  /*
  
  const divErrores = document.getElementById("errores");

  if (divErrores) {
    divErrores.remove();
  }

  if (listado.length > 0) {
    const divTemplate = document.createElement("div");
    divTemplate.setAttribute("id", "errores");
    divTemplate.style =
      "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
    listado.forEach((error) => {
      divTemplate.innerHTML += `<p><small>${error}</small></p>`;
    });

    form.appendChild(divTemplate);
  }
  */
  console.log(listado);
  console.log("estoy en el renderizado de errores");
  // recorro todos los pares del diccionario, si algun valor no es vacio busco ese elemento y le agrego el error y fondo rojo
  for (const [key, value] of Object.entries(listado)) {

    if ((value)){
      console.log(`En estas key hay errores ${key}`);
      if (key == "hobbies"){
        titulo = document.querySelector("#listado-hobbies > legend");
        titulo.style.background = "#ffcccb";
        if(document.getElementById("errorHobby")){
          document.getElementById("errorHobby").remove();
        }
        let divTemplate = document.createElement("div");
        divTemplate.setAttribute("id","errorHobby");
        divTemplate.style.background = "#ffcccb";
        divTemplate.innerHTML = `${value}`;
        cuadro = document.querySelector("#listado-hobbies");        
        cuadro.appendChild(divTemplate);
      }else if ( key == "nacionalidad"){

      }
      else {

      }

    }else{
      console.log(`En estas key no hay errores ${key} \n` );
      if (key == "hobbies"){
        cuadro = document.querySelector("#listado-hobbies > legend");
        cuadro.style.removeProperty('background-color');
        if(document.getElementById("errorHobby")){
          document.getElementById("errorHobby").remove();
        }
      }else if ( key == "nacionalidad"){

      }
      else {
        
      }
    }
    
  } 
  /*
  
  numeros.forEach(function(numero) {
      if (numero === impar) {
          numeros.shift() // 3 será borrado del arreglo
      }
  })

  */
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
  //   desarrollar la funcion aqui
}
