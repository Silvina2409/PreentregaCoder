//Listar medicos
const profesionales= [
    {
        nombre: "Juana Fernandez ",
        especialidad: "Pediatría General",
        imagen: "./Img/modificaciondra.jpg"

    },
    {
        nombre: "Alejandro Martinez",
        especialidad: "Oftalmología",
        imagen: "./Img/modificaciondr.jpg"
    },
    {
        nombre: "Florencia Marchetto",
        especialidad: "Neumonología",
        imagen: "./Img/modificaciondra2.jpg"
    },
    {
        nombre: "Pablo Moreno",
        especialidad: "Neonatología",
        imagen: "./Img/modificaciondr2.jpg"
    }
]

const listaProfesionales = document.getElementById("listaProfesionales")
profesionales.forEach((profesional) =>{
    let contenedor= document.createElement("p");
    contenedor.innerHTML= `  <div class= "alineacion4">
                                
                            <img src= " ${profesional.imagen}" class="imagendra"> 
                            <div class= "alineacion5" > 
                            <h4 class="nombre"> ${profesional.nombre} </h4>                          
                            <h4 class="especialidad" > Especialidad: ${profesional.especialidad} </h4> 
                            <a href="#" class="cv" > Ver CV </a>
                            </div> </div>                                `
    listaProfesionales.appendChild(contenedor)                                                        
})
//Formulario
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e) =>{
    crearPaciente(e)
    Swal.fire({
        
        icon: "success",
        title: "Has enviado  el formulario",
        showConfirmButton: false,
        timer: 1500
      });
})
function crearPaciente (e){
    e.preventDefault()
    let inputNombre= document.getElementById("Nombreusuario")
    let inputApellido = document.getElementById("Apellido")
    let inputEmail = document.getElementById("E-mail")
    const user= {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value
    }
    

    
    let mensajePaciente = document.getElementById("mensajePaciente")
    let textoNuevo = document.createElement("p")
    mensajePaciente.appendChild(textoNuevo) 
    textoNuevo.innerHTML= ` <p class="estiloMensaje alinear" > Hola ${inputNombre.value}, a la brevedad nos pondremos en contacto con usted al siguente e-mail: ${inputEmail.value} Muchas gracias.</p> 
    `
    localStorage.setItem("Usuario",JSON.stringify(user))
    formulario.reset()
}

//Sumar especialidad
function sumar (){
let conta= 0
let suma= 0
let compra= document.querySelector("#probando")
compra.addEventListener("click",() =>{
   
  
      Swal.fire({
        background: " #faf3eb",
        imageUrl: "./Img/baby.png",
        imageWidth: 200,
        icon: "question",   
        position: "top-end",
        title: "Va a realizar una consulta profesional",
        text: "¿Está seguro?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonText: "No",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
       
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            background: " #faf3eb",
            position: "top-end",
            title: "Muchas Gracias",
            text: "Has solicitado una consulta",
            icon: "success",
            imageUrl: "./Img/baby.png",
            imageWidth: 200,
          });
          let circulo= document.querySelector(".circulo")
          conta ++
          circulo.innerHTML= conta 
          let agrego= document.querySelector("#total")
          suma= suma + 5000
          agrego.innerText = `El total a abonar es $ ${suma}. Le escribiremos para programar su turno y realizar el pago. Muchas gracias.`
        }
      });
})
}
sumar()


//Buscador

async function listarProfesionales () {
    const respuesta = await fetch ("./profes.json")
    const prof = await respuesta.json()
    mostrarProfesionales (prof)
}

const contened = document.getElementById("contenedor")

function mostrarProfesionales (prof){
    
    prof.forEach((ele => {
        let divMed = document.createElement ("div")
        divMed.innerHTML= `<div> ${ele.nombre} </div>
                           <div> ${ele.especialidad} </div> `
    contened.appendChild (divMed)
  
}))
}
const inputBusqueda= document.getElementById ("inputSearch")
inputBusqueda.addEventListener ("change", () =>{
    const inputV = inputBusqueda.value
    console.log (inputV)
    fetch ("./profes.json")
    .then (response => response.json())
    .then (data => {
        const profesionalesFiltrados = data.filter ((prof) => prof.especialidad.includes (inputV))
        if (profesionalesFiltrados.length > 0){
        mostrarProfesionales(profesionalesFiltrados)
    }else{
        contened.innerText = "Lamentablemente no contamos con esa especialidad"
    }
        
    })    
    
})





















/*const usuario = prompt ("Ingrese su usuario") // El usuario es juan
const contrasena = prompt ("Ingrese su contraseña") // La contraseña es 1234

const Registrar = () =>{
    let lista = []
    let aviso = prompt ("¿Desea realizar una consulta médica? Escriba SI o NO").toUpperCase()
    while (aviso == "SI"){
        let consulta = prompt ("Ingrese el tipo de consulta  que desea realizar: INFECTOLOGIA, NUTRICION  u OFTALMOLOGIA").toUpperCase()
        lista.push(consulta)
        console.log (lista)
        aviso = prompt ("Desea agregar otra consulta. Indique SI o NO").toUpperCase()
    }
    let total = 0
    
    for (consulta of lista){
        switch (consulta) {
            case "INFECTOLOGIA":
                alert ("El costo de la consulta de infectologia es de $5000")
                total = total + 5000
                break;
            case "NUTRICION":
                alert ("El costo de la consulta de nutrición es de $8000")
                total = total + 8000
                break;
            case "OFTALMOLOGIA":
                alert ("El costo de la consulta de oftalmología es de $9000")
                total = total + 9000
                break;    
            default:
                let anuncio = alert("No contamos con esa especialidad o está mal escrita")
                break;
        }
    
    }
alert (`El total a abonar es ${total} pesos`) 
    
}*/




/*function Confirmar (){
    if (usuario == "juan" && contrasena == 1234){
        alert ("Usuario y contraseña correctos, puede ingresar")
        Registrar()
    }else {
        alert ("Usuario y/o contraseña incorrectos, no puede ingresar")
}}
Confirmar()*/


