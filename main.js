const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function (imageName) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const bigImageContainer = modal.querySelectorAll(
    ":scope > #big-image-container"
  )[0];
  bigImageContainer.src = `./public/img/bananaimgs/${imageName}`;

  console.log(bigImageContainer);

  console.log(`Opening modal with image ${imageName}`);
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e);

    const cursorItem = e.target;
    const sourceImage = cursorItem.src;
    const pathArray = sourceImage.split("/");
    const imageName = pathArray[pathArray.length - 1];

    const imageNameWithoutType = imageName.split(".")[0];
    const imageFileType = imageName.split(".")[1];

    const bigImage = `${imageNameWithoutType}_big.${imageFileType}`;

    openModal(bigImage);
  });
});

overlay.addEventListener("click", (e) => {
  closeModal();
});
