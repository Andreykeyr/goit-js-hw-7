import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

for(let i=0;i<galleryItems.length;i++){
   let li = document.createElement('li')
   let img = `<img alt=${galleryItems[i].description} src=${galleryItems[i].preview}>`
   li.innerHTML = img
   const instance = basicLightbox.create(`
   <img alt=${galleryItems[i].description} src=${galleryItems[i].original} width="800" height="600">
   `)
   li.addEventListener('click',()=>{
      instance.show()
   })
   document.querySelector("ul").append(li)
}