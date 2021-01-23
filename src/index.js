import {loadPage} from "./main-page.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";



console.log("script loaded!");
console.log("madre mia");

// declaration of the mayority of elements
let btnPage = document.querySelector('.main-page');
let btnMenu = document.querySelector('.menu');
let btnContact = document.querySelector('.contact');

//declaration of useful variables
let unusedColor = 'tomato';
let usedColor =  'rgba(0, 128, 128, 0)';



btnPage.onclick  = function(){
    clear();
    loadPage();
    console.log('done');
    applyBtnUsed(btnPage);
    applyBtnUnused(btnContact, btnMenu);
}
btnMenu.onclick  = function(){
    clear();
    loadMenu();
    applyBtnUsed(btnMenu);
    applyBtnUnused(btnPage, btnContact);
}
btnContact.onclick  = function(){
    clear();
    loadContact();
    applyBtnUsed(btnContact);
    applyBtnUnused(btnMenu, btnPage);
}

//creation of elements

window.onload = function() {
    Particles.init({
      selector: '.background',
      color: ['#DA0463', '#404B69', '#DBEDF3'],
      connectParticles: true,
      speed: 0.1
    });
    loadPage();
    applyBtnUsed(btnPage);
  };

loadPage();
let clear = function(){
    document.getElementById('content').remove();
    let contenido = document.createElement("div");
    contenido.id = "content";
    document.querySelector('body').appendChild(contenido);
    console.log("done 1");
}
let applyBtnUnused = function(btn1, btn2){
    btn1.style.backgroundColor = unusedColor;
    btn2.style.backgroundColor = unusedColor;
}
let applyBtnUsed = function(btn){
    btn.style.backgroundColor = usedColor;
}
