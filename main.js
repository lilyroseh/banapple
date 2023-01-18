const jpgURL = [
  "./public/img/jpgBanana/andybanana-620.jpeg",
  "./public/img/jpgBanana/baker-bananaskirt1.jpg",
  "./public/img/jpgBanana/BananaPost89_AnnaBanana.jpeg",
]; // list of image URLs

const pngURL = [
  "./public/img/pngBanana/andybanana-620.png",
  "./public/img/pngBanana/baker-bananaskirt1.png",
  "./public/img/pngBanana/BananaPost89_AnnaBanana.png",
];

const jpgimages = []; /// array to hold images.
const pngimages = [];
var imageCount = 0; // number of loaded images;
var pngCount = 0;

// function called once all images have loaded.
function allLoaded() {
  // all images have loaded and can be rendered
  ctx.drawImage(pngimages[1], 0, 0); // draw all pngs
  ctx.drawImage(pngimages[0], 0, 0);
}

// iterate each image URL, create, load, and add it to the images array
jpgURL.forEach((src) => {
  // for each image url
  const image = new Image();
  image.src = src;
  image.onload = () => {
    imageCount += 1;
    if (imageCount === jpgURL.length) {
      // have all loaded????
      allLoaded(); // call function to start rendering
    }
  };
  jpgimages.push(image); // add loading image to images array
});
// the image onload event will not be called until all current execution is
// complete.

pngURL.forEach((src) => {
  // for each image url
  const image = new Image();
  image.src = src;
  image.onload = () => {
    imageCount += 1;
    if (imageCount === pngURL.length) {
      // have all loaded????
      allLoaded(); // call function to start rendering
    }
  };
  pngimages.push(image); // add loading image to images array
});
