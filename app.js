const recipes = [
    {
      id: 1,
      name: "James Hoffmann",
      title: "World Barista Champion 2007",
      img: "img/hoffmann.png",
      video:
        "https://www.youtube.com/embed/mazSs3E_cwY",
      text:
        "Use water that is pretty much right off the boil. Use a grind that is slightly coarser than espresso, but finer than drip (James describes it as between powdered sugar and salt).",
    },
    {
      id: 2,
      name: "Tim Wendelboe",
      title: "Norwegian barista champion 2004",
      img: "img/wendelboe.png",
      video:
        "https://www.youtube.com/embed/wGZ3VdCJvu0",
      text:
        "This AeroPress recipe is exactly what they use in the Tim Wendelboe cafe in Oslo, Norway.",
    },
    {
      id: 3,
      name: "Raphael Barbedouce",
      title: "Head Barista at Maxi Coffee Shop",
      img: "img/barbedouce.jpg",
      video:
        "https://www.youtube.com/embed/lwOgQEELcrI",
      text:
        "This is Raphael's personal AeroPress recipe for most mornings' coffee routine. He uses a double filter for this recipe",
    },
    {
        id: 4,
        name: "Tetsu Kasuya",
        title: "World Brewers Cup 2016 Champion",
        img: "img/kasuya.png",
        video:
          "https://www.instagram.com/tv/CORkSoaiNoO/",
        text:
          "This AeroPress recipe is also a great option to make a larger volume of coffee.",
      },
      {
        id: 5,
        name: "Ralf Rueller",
        title: "Best Specialty Coffee Roaster 2019",
        img: "img/rueller.png",
        video:
          "https://www.youtube.com/embed/RO2jjz_1fBI",
        text:
          "This is the AeroPress recipe of The Barn Founder, Ralf Rueller. It aims for a juicy cup that has a creamy mouth feeling.",
      },
  ];

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