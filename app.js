  const baristaName = document.getElementById('barista-name');
  const baristaTitle = document.getElementById('barista-title');
  const baristaPhoto = document.getElementById('barista-photo');
  const recipeVideo = document.getElementById('video');
  const recipeDescription = document.getElementById('video_description');
  
  const randomizeBtn = document.getElementById('randomize');

  let recipeIndex = 0;
  
  document.addEventListener('DOMContentLoaded', function() {
    showRecipe();
  })

  function showRecipe () {
    let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    baristaName.textContent = randomRecipe.name;
    baristaTitle.textContent = randomRecipe.title;
    baristaPhoto.src = randomRecipe.img;
    recipeVideo.src = randomRecipe.video;
    recipeDescription.textContent = randomRecipe.text
  }