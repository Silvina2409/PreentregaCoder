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
        imagen: "./Img/modificaciondra2.jpg"
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
    
}




function Confirmar (){
    if (usuario == "juan" && contrasena == 1234){
        alert ("Usuario y contraseña correctos, puede ingresar")
        Registrar()
    }else {
        alert ("Usuario y/o contraseña incorrectos, no puede ingresar")
}}
Confirmar()*/      