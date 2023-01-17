// Select all parts
const parts = document.querySelectorAll("div[id^='part']");

document.getElementById("part1").addEventListener("mouseover", (e) => {
  console.log(e.target.id);

  document.getElementById(
    e.target.id
  ).src = `./public/img/BananaPost89_AnnaBanana.jpeg`;
});
document.getElementById("part1").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/BananaPost89_AnnaBanana.png";
});

document.getElementById("part2").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/Frida-Kahlo-Fruit-of-Life.jpeg`;
});
document.getElementById("part2").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/Frida-Kahlo-Fruit-of-Life.png";
});

document.getElementById("part3").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/baker-bananaskirt1.jpg`;
});
document.getElementById("part3").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/baker-bananaskirt1.png";
});

document.getElementById("part4").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = `./public/img/chirico1.jpeg`;
});
document.getElementById("part4").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = "./public/img/chirico1.png";
});

document.getElementById("part5").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/JohnCurrin-Anna2006.jpeg`;
});
document.getElementById("part5").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/JohnCurrin-Anna2006.png";
});

document.getElementById("part6").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = `./public/img/LF_AW006.jpeg`;
});
document.getElementById("part6").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/lawrence-fried-andy-warhol-eating-a-banana-noandy.png";
});

document.getElementById("part7").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = `./public/img/mario-banana.jpeg`;
});
document.getElementById("part7").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = "./public/img/mario-banana.png";
});

document.getElementById("part8").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/meret-mit-banane.jpg`;
});
document.getElementById("part8").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/meret-mit-banane.png";
});

document.getElementById("part9").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/olgaCosta-vendedora-1951.jpeg`;
});
document.getElementById("part9").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/olgaCosta-only1banana.png";
});

document.getElementById("part10").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = `./public/img/sarahLucas1.jpeg`;
});
document.getElementById("part10").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = "./public/img/sarahLucas1.png";
});

document.getElementById("part11").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(
    e.target.id
  ).src = `./public/img/margaretharrison-bananaWoman.jpeg`;
});
document.getElementById("part11").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src =
    "./public/img/margaretharrison-bananaWoman-nofilling.png";
});

document.getElementById("part12").addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = `./public/img/natLL0.jpg`;
});
document.getElementById("part12").addEventListener("mouseout", (e) => {
  console.log(e.target.id);
  document.getElementById(e.target.id).src = "./public/img/natLL0.png";
});
/*
parts.forEach((part, i) => {
  // Add hover event
  part.addEventListener("mouseover", (e) => {
    console.log(e.target.id);
    //e.target.querySelector(".cursor-image").style.display = "block";
    document.getElementById(e.target.id).src =
      "https://i.stack.imgur.com/rrGp5.jpg";
  });
  part.addEventListener("mouseout", (e) => {
    console.log(e);
    //e.target.querySelector(".cursor-image").style.visibility = "hidden";
  });
  // Add mousemove event
  part.addEventListener("mousemove", (e) => {
    console.log(e);
    let img = e.target.querySelector(".cursor-image");
    if (img) {
      img.style.left = e.clientX + "px";
      img.style.top = e.clientY + "px";
    }
  });

});
  */
