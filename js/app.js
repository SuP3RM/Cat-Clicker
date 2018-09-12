/* ===== MOV = Model Octopus View ===== */

// Model, holds data.



let model = {
  class cat {
    constructor(name, src) {
      this.name = name;
      this.img = "images/" + src;
      this.count = 0;
    }
  };

  let catChoosen = [];
  catChoosen.push(Chewie = new Cat('Chewie', chewiecat.jpg));
  catChoosen.push(Jetske = new Cat('Jetske', jetske.jpg));
  catChoosen.push(Xuxa = new Cat('Xuxa', kittycat.jpg));
  catChoosen.push(McSqwwney = new Cat('McSqwwney', McSqwwney.jpg));
  catChoosen.push(Yana = new Cat('Yana', yana.jpg));

  let currentCat = [0];
}

// View, what the user sees and interacts with.

// Octopus, ties both M&V together so they wont talk to each other.
