const elemento = document.getElementsByTagName('img')
elemento[0].alt='profile'

const indentificador = document.getElementById('ejemplo')
indentificador.textContent = '700K'
console.log(indentificador)

const likes = document.querySelector('img')
 likes.alt='dislikes'
 console.log(likes)

 const nodeListDeParrafos = document.querySelectorAll('p')
 console.log(nodeListDeParrafos)

 //creando

 const profileCard = document.createElement('div')
 profileCard.className = "profile-card"

 const profileCardTop = document.createElement('div')
 profileCardTop.className = "profile-card-top"

 profileCard.appendChild(profileCardTop)

 const app = document.querySelector('#app')
 app.appendChild(profileCard)

 const imagen = document.createElement('img')
 imagen.src='./assets/image-victor.jpg'
 imagen.alt='foto de perfil'
 profileCardTop.appendChild(imagen)

 const profileCardBottom = document.createElement('div ')
 profileCardBottom.className = "profile-card-bottom"
 profileCard.appendChild(profileCardBottom)