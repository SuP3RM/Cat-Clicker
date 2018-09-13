/* ===== MOV = Model Octopus View ===== */

// Model, holds data.

let model = {
  class cat {
    constructor(name, src) {
      this.name = name;
      this.img = "images/" + src;
      this.count = 0;
    }
  },

  let catChoosen = [];
  catChoosen.push(Chewie = new Cat('Chewie', chewiecat.jpg));
  catChoosen.push(Jetske = new Cat('Jetske', jetske.jpg));
  catChoosen.push(Xuxa = new Cat('Xuxa', kittycat.jpg));
  catChoosen.push(McSqwwney = new Cat('McSqwwney', McSqwwney.jpg));
  catChoosen.push(Yana = new Cat('Yana', yana.jpg));

  const currentCat = null;
};

// Octopus, ties both M&V together so they wont talk to each other.

const octopus = {
  init: function () {
    model.currentCat = model.catChoosen[0] // det defualt cat to view
    catListView.init();
    catView.init();

  },

  getCurrentCat: function () {
    return model.currentCat;
  },


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
    render: function () {
      // update the DOM elements with values from the current cat
      let Cat = octopus.getCurrentCat();
      this.catCounter.textContent = Cat.Count;
      this.catName.textContent = Cat.name;
      this.catImage.src = Cat.src;
    }
  }
}

let catListView = {
   init: function () {
     this.catListName = document.getElementById('cat-list');

     this.render();
   },

   render: function () {

   },
}
