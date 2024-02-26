// elementi
const containerImg= document.querySelector('.container-img')
const up= document.querySelector('.up')
const down= document.querySelector('.down')
const sideImg= document.querySelector('.side-container')
// contatore 
let counterImg = 0
console.log(sideImg)

// array 
const images= ['img/01.webp', 'img/02.webp', 'img/03.webp','img/04.webp', 'img/05.webp']

// ciclo per inserire le imagini con template literal 
for(i=0; i<images.length; i++){
  const img= images[i];
  containerImg.innerHTML+=`<img class= " image hide  " src="${img}"></img>`

  sideImg.innerHTML+=`<img class= " side-img dark " src="${img}"></img>`
 }

//  prendo elementi con classe img
const imgCollection= document.getElementsByClassName('image')
const sideCollection= document.getElementsByClassName('side-img')

console.log(imgCollection)

// rendo la prima immagine visibile
imgCollection[counterImg].classList.remove('hide')

sideCollection[counterImg].classList.remove('dark')
 console.log(up)
 
 down.classList.add('hide')


// clic su up 
up.addEventListener('click', function(){
  down.classList.remove('hide')
  imgCollection[counterImg].classList.add('hide')
  sideCollection[counterImg].classList.add('dark')

  counterImg++
  if(counterImg===images.length-1){
    up.classList.add('hide')

    
  }
  
  
  imgCollection[counterImg].classList.remove('hide')
  
  sideCollection[counterImg].classList.remove('dark')

})


// clic su down 


down.addEventListener('click', function(){

   up.classList.remove('hide')
   

  imgCollection[counterImg].classList.add('hide')
  sideCollection[counterImg].classList.add('dark')
  
  counterImg-- 
  if(counterImg===0){
      down.classList.add('hide')
      
    } 
 
  imgCollection[counterImg].classList.remove('hide')
  sideCollection[counterImg].classList.remove('dark')
 
 
})




