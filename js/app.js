/*
let cat1 = document.getElementById('p_cat1');
let cat2 = document.getElementById('p_cat2');
let cat3 = document.getElementById('p_cat3');
let cat4 = document.getElementById('p_cat4');
let cat5 = document.getElementById('p_cat5');

let count = 0;

cat1.addEventListener('click', function(){
  count += 1;
  clicks.innerHTML = count;
}, false);

elem1.addEventListener('click', function(){
  count += 1;
  click.innerHTML = count;
}, false);




for (var cat in object) {
  if (object.hasOwnProperty(cat)) {

  }
}

*/

class Cat {
  constructor(name, src) {
    this.name = name;
    this.img = "images/" + src;
    this.count = 0;
  }
};

let catChoosen = [];
catChoosen.push(Xuxa = new Cat('Xuxa', kittycat.jpg));
catChoosen.push(Chewie = new Cat('Chewie', chewiecat.jpg));
catChoosen.push(Jetske = new Cat('Jetske', jetske.jpg));
catChoosen.push(McSqwwney = new Cat('McSqwwney', McSqwwney.jpg));
catChoosen.push(Yana = new Cat('Yana', yana.jpg));

let currentCat = [0];

let catName = document.querySelector('.cat-name');
let counter = document.querySelector('.clicker');
let catImage = document.querySelector('.cat-image');
let buttons = document.querySelector('.cat_button');

function main() {
  counterFun();
  catName.innerText = currentCat.name;
  catImage.src = currentCat.img

  if (main.children.style.display === 'hidden') {
    main.children.style.display === 'hidden';

  }
};

function counterFun() {
  counter.innerText = currentCat.count;
  currentCat.catImage.addEventListener('click', function() {
    this.count += 1
    click.innerHTML = count
  })
};
