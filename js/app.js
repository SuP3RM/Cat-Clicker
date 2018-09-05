let elem = document.getElementById('p_cat1');
let elem1 = document.getElementById('p_cat2');
let count = 0;

elem.addEventListener('click', function(){
  count += 1;
  clicks.innerHTML = count;
}, false);

elem1.addEventListener('click', function(){
  count += 1;
  click.innerHTML = count;
}, false);
