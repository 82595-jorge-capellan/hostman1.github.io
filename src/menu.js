let images = ["https://static01.nyt.com/images/2019/12/11/dining/10best-rest-dish1/merlin_165284400_aef9e2c4-57e4-4c85-93c1-d850403d5a5a-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/potluck-dishes-vegetarian-chili-macaroni-1574870284.jpg?crop=0.913xw:0.609xh;0,0.187xh&resize=640:*",
"https://i1.wp.com/berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23.jpg?fit=1920%2C1280&ssl=1",
"https://i.ytimg.com/vi/ecLL7_voJRc/maxresdefault.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfiXQtKIoEARTvLBOJNS_QwD3CyZULfmYKQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcqODcjueqyjLjrtbc1UHqVLi-UqlOwnvPw&usqp=CAU"
];
let names = ["Pizza","Fideos","Hentai","Empanadas de choclo", "Mas fideos(?", "Cancer"];
let loadMenu = function(){

    //creation of elements
    let mainDiv = document.getElementById('content');
    let container = document.createElement('div');
    container.id = 'container';
    let dishesDiv = document.createElement('div');
    dishesDiv.id = 'dishes';
    let dishes = [];

    for(let i = 1; i < 7; i++){
        let dish = document.createElement('div');
        dish.classList.add('dish');
        dish.id = `dish${i}`;
        dishes.push(dish);
    }
    dishes.forEach(function(element, index){
        let img = document.createElement('img');
        img.classList.add('img-dish');
        img.src = images[index];

        let text = document.createElement('p');
        text.textContent = names[index];

        element.appendChild(img);
        element.appendChild(text);
        dishesDiv.appendChild(element);
    });
    
    container.appendChild(dishesDiv);
    mainDiv.appendChild(container);
}
export {loadMenu};