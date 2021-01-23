

let loadContact = function(){
    let h3 = document.createElement('h3');
    h3.textContent = 'Te esperamos!!';
    
    let text = document.createElement('p');
    text.textContent = "Esta pagina no esta terminada, si bien el proposito era entrenar como mostrar la pagina con un menu, creo que puede quedar claro con los ejemplos de 'pagina principal' y 'menu', quise crear una zona de contacto que muestre un mapa, sin embargo es una tarea muy dificil de superar para mis conocimientos actuales, por ello la intentare superar en futuras pruebas.";
    text.style.margin = '5%';

    document.getElementById('content').appendChild(h3);
    document.getElementById('content').appendChild(text);
}
export {loadContact};