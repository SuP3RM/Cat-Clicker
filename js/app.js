/* ===== MOV = Model Octopus View ===== */

// Model, holds data.
class cat {
  constructor(name, src) {
    this.name = name;
    this.img = "images/" + src;
    this.count = 0;
  };
}
let catChoosen = [];
catChoosen.push(Chewie = new cat('Chewie', 'chewiecat.jpg'));
catChoosen.push(Jetske = new cat('Jetske', 'jetske.jpg'));
catChoosen.push(Xuxa = new cat('Xuxa', 'kittycat.jpg'));
catChoosen.push(McSqwwney = new cat('McSqwwney', 'McSqwwney.jpg'));
catChoosen.push(Yana = new cat('Yana', 'yana.jpg'));
var currentCat = null

const model = {
  currentCat
};

// Octopus, ties both M&V together so they wont talk to each other.

const octopus = {
  init: function () {
    model.currentCat = catChoosen[0] // det defualt cat to view

    // call functions to show catListView and catView on screen
    catListView.init();
    catView.init();

  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  getCats: function() {
      return model.currentCat;
  },

  setCurrentCat: function (cat) {
    model.currentCat = catChoosen[0];
  },

  incrementCounter: function() {
      model.currentCat.count++;
      catView.render();
  }
};

// View, what the user sees and interacts with.

let catView = {
  // grabbing DOM elements storing in variables
  init: function() {
    this.catElem = document.getElementById('cat');
    this.catName = document.getElementById('cat-name');
    this.catCounter = document.getElementById('cat-count');
    this.catImage = document.getElementById('cat-img');

    this.catImage.addEventListener('click', function(){
      octopus.incrementCounter();

    this.render();
    });

    // render the cat View
  },
  render: function () {
    // update the DOM elements with values from the current cat
    let Cat = octopus.getCurrentCat();
    this.catCounter.textContent = Cat.Count;
    this.catName.textContent = Cat.name;
    this.catImage.src = Cat.src;
  }
};

let catListView = {
   init: function () {
     this.catListName = document.getElementById('cat-list');

     this.render();
   },

   render: function() {
       var cat, elem, i;
       // get the cats we'll be rendering from the octopus
       var cats = octopus.getCats();

       // empty the cat list
       this.catListName.innerHTML = '';

       // loop over the cats
       for (i = 0; i < cats.length; i++) {
           // this is the cat we're currently looping over
           cat = cats[i];

           // make a new cat list item and set its text
           elem = document.createElement('li');
           elem.textContent = currentCat.name;

           // on click, setCurrentCat and render the catView
           // (this uses our closure-in-a-loop trick to connect the value
           //  of the cat variable to the click event function)
           elem.addEventListener('click', (function(catCopy) {
               return function() {
                   octopus.setCurrentCat(catCopy);
                   catView.render();
               };
           })(cat));

           // finally, add the element to the list
           this.catListName.appendChild(elem);
       }
   }
};
octopus.init();
