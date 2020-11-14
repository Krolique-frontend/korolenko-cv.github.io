'use strict';

let burgerButton = document.querySelector('.burgerIcon');
let navClose = document.querySelector('.nav__close');
let navPanel = burgerButton.nextElementSibling;
let popUp = document.querySelector('.popUp');
let popUpMsg = document.querySelector('.popUpMsg');
let portfolioLoader = document.querySelector('.more-portfolio');
let portfolioElems = document.querySelectorAll('.portfolio > .image');

if (document.querySelector('.youtubeFrame')) {
function setFrameHeight() {
    let youtubeFrame = document.querySelector('.youtubeFrame');
    let fWidth = youtubeFrame.clientWidth;
    let aspectRatio = 9/16;
    let fHeight = fWidth*aspectRatio;
    youtubeFrame.style.height = fHeight+'px';
}

    setFrameHeight();
    document.getElementsByTagName('body')[0].onresize = setFrameHeight;
}

burgerButton.onclick = () => {
    navPanel.style.display = 'flex';
    navPanel.style.opacity = '0.9';
    navPanel.style.zIndex = '4';
    navPanel.style.animationName = 'show';
}

navClose.onclick = () => {
     navPanel.style.opacity = '0';
     navPanel.style.zIndex = '1';
     navPanel.style.animationName = 'hide';
     setTimeout(()=> {
         navPanel.style.display = 'none';
     }, 500);
 }

 if (document.querySelector('.portfolio') && portfolioLoader) {

     (function portfolioItemsHide() {
         if (window.innerWidth < 576) {
             for (i = 2; i < portfolioElems.length; i++) {
                 portfolioElems[i].style.display = 'none';
             }
         } else if (window.innerWidth < 768) {
             for (i = 4; i < portfolioElems.length; i++) {
                 portfolioElems[i].style.display = 'none';
             }
         }
     })();

     function portfolioItemsLoad() {
         let tempArr = [];
         for (i = 0; i < portfolioElems.length; i++) {
             if (portfolioElems[i].style.display === 'none') {
                 tempArr.push(portfolioElems[i]);
                 console.log(tempArr);
                 if (tempArr.length <= 2) {
                     portfolioElems[i].style.display = 'block';
                 } else {
                     return;
                 }
             } else if (portfolioElems[i].style.display !== 'none' && i + 1 == portfolioElems.length) {
                 popUpMsg.innerHTML = "nothing more to load";
                 popUp.style.display = 'block';
                 setTimeout(() => {
                     popUp.style.display = 'none';
                 }, 3000);
             }
         }
     }

     portfolioLoader.onclick = portfolioItemsLoad;
 }

 if (document.querySelector('.portfolio-page')) {
     class Image {
         constructor(element){
             this._element=element;
         }

         getImgUrl() {
             let link = this._element.parentNode;
             let linkDiv = link.parentNode;
             let imgTag = linkDiv.previousElementSibling;
             return imgTag.getAttribute('src');
         }
     }

     function createImageElement(imgSrc) {
         let imgTag = document.createElement('img');
         let imgSrcAttribute = document.createAttribute('src');
         imgSrcAttribute.value = imgSrc;
         imgTag.setAttributeNode(imgSrcAttribute);

         return imgTag;
     }

     document.addEventListener('click', event => {
         let target = event.target;

         if (target.tagName !== 'I') return;
         event.preventDefault();

         let image = new Image(target);

         let imageElem = createImageElement(image.getImgUrl());

         let imagePopup = document.querySelector('.image-popUp');
         let popUp_div = document.querySelector('.image-popUp__div');
         popUp_div.appendChild(imageElem);
         imagePopup.style.display = 'flex';

         imagePopup.addEventListener('click', event => {
             if (event.target === imageElem) return;
             imagePopup.style.display = 'none';
             imageElem.remove();
         });
     });
 }