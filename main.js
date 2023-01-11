import "./style.css";

// Select all parts
const parts = document.querySelectorAll("div[id^='part']");

parts.forEach((part, i) => {
  // Add hover event
  part.addEventListener("mouseover", (e) => {
    e.target.querySelector(".cursor-image").style.display = "block";
  });
  part.addEventListener("mouseout", (e) => {
    e.target.querySelector(".cursor-image").style.display = "none";
  });
  // Add mousemove event
  part.addEventListener("mousemove", (e) => {
    let img = e.target.querySelector(".cursor-image");
    img.style.left = e.clientX + "px";
    img.style.top = e.clientY + "px";
  });
});
