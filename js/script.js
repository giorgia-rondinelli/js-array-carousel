// elementi
const containerImg= document.querySelector('.container-img')

// contatore 
let counterImg = 0


// array 
const images= ['img/01.webp', 'img/02.webp', 'img/03.webp','img/04.webp', 'img/05.webp']

// ciclo per inserire le imagini con template literal 
for(i=0; i<images.length; i++){
  const img= images[i];
  containerImg.innerHTML+=`<img class= " image hide  " src="${img}"></img>`

 }

//  prendo elementi con classe img
const imgCollection= document.getElementsByClassName('image')

console.log(imgCollection)

// rendo la prima immagine visibile
imgCollection[counterImg].classList.remove('hide')




