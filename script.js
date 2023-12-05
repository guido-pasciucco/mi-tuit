// Sistema de login - registro + inicio sesión
// Objeto usuario, tuit,
// objeto tuit - contenido, quien lo escribió, a que hora lo publicó, cuantos caracteres ocupa, cuantos likes tiene, cuando retuits tiene, cuantos Favs tiene
// objeto usuario - nombre de usuario (@) - nombre de perfil, bio, cantTuits , cantSeguidores, cantSeguidos, tuitsFavoritos, foto de perfil
// archivos JSON - dbUsers - dbTuits

// CONTADOR/LIMITADOR DE CARACTERES

/* a la clase Tuit sumarle después
atributos 
cantShares - int con cantidad de veces compartido
cantSaves - int con cantidad de veces guardado
sharedBy - array con usuarios que retuitearon
savedBy - array con usuarios que guardaron el tuit (debería aparecerles en su sección favoritos)
timestamp - con un now
*/


class Tuit {
    constructor(id, autor, content, cantLikes){
        this.id = id
        this.autor = autor
        this.content = content
        this.cantLikes = cantLikes
    }
}

class User {
    constructor(id, nombre, userName, email, password){
        this.id = id
        this.nombre = nombre
        this.userName = userName
        this.email = email
        this.password = password
    }
}

let user1 = new User()


allTuits = []

const tuit = document.getElementById('tuit');
const displayContador = document.getElementById('displayContador');
const displayTuits = document.getElementById('displayTuits')

let largoMax = 150
tuit.oninput = () => {
    let largoTuit = tuit.value.length
    if(largoTuit <= largoMax){
        let charRestantes = largoMax - largoTuit
        displayContador.innerHTML = `${charRestantes}`
        if(charRestantes <= 30){
            displayContador.innerHTML = `${charRestantes}`
            displayContador.style.color = "orange"
        }
        if(charRestantes <= 15){
            displayContador.innerHTML = `${charRestantes}`
            displayContador.style.color = "red"
        }
    }
}

form.onsubmit = (e) => {
    
    let newTuit = new Tuit(allTuits.length, "Pepito", "Probando con clases", 0)
    
    let cantLikes = 0 
    e.preventDefault()
    displayTuits.innerHTML += `
        <div class="tuit">
            <i>${newTuit.id} tuiteó</i>
            <i>${newTuit.autor} tuiteó</i>
            <div id="contenido">${newTuit.content}</div>
            <button class="btnLike"><3</button>
            <div id="displayLikes">${newTuit.cantLikes}</div>
        </div>
    `
    const btnLike = document.getElementsByClassName("btnLike")
    btnLike.onclick = () => {
        newTuit.cantLikes++
        displayLikes.innerText =  newTuit.cantLikes
    }
    allTuits.unshift(tuit.value)
    console.log(allTuits[0])
    tuit.value = ""
}
