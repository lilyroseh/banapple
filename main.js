const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector("#close-action");
const closeModalDetailsButton = document.querySelector(
  "#close-modal-details-action"
);

// console.log(window.innerHeight, window.innerWidth);

let modalHeaderText = "";
let modalSubHeaderText = "";
let modalDateText = "";
let modalMainText = "";

const openModal = function (imageName) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  hideDetails();

  const bigImageContainer = modal.querySelectorAll(
    ":scope > #modal-main-container > #big-image-container"
  )[0];
  bigImageContainer.src = `./public/img/bananaimgs/${imageName}`;

  // How do I load the apple pictures?
  //bigImageContainer.src = `./public/img/appleimgs/${imageName}`;

  const modalHeader = document.getElementById("modal-header");
  const modalSubHeader = document.getElementById("modal-subheader");
  const modalDate = document.getElementById("modal-date");
  const modalMainTextContainer = document.getElementById("modal-main-text");

  modalHeader.innerText = modalHeaderText;
  modalSubHeader.innerText = modalSubHeaderText;
  modalDate.innerText = modalDateText;
  modalMainTextContainer.innerText = modalMainText;
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

    modalHeaderText = cursorItem.dataset.modalHeader;
    modalSubHeaderText = cursorItem.dataset.modalSubheader;
    modalDateText = cursorItem.dataset.modalDate;
    modalMainText = cursorItem.dataset.modalMainText;

    openModal(bigImage);
  });
});

overlay.addEventListener("click", (e) => {
  closeModal();
});

closeModalButton.addEventListener("click", (e) => {
  closeModal();
});

closeModalDetailsButton.addEventListener("click", (e) => {
  closeModal();
});

const detailsContainer = document.getElementById("details-container");
const actionsContainer = document.getElementById("actions-container");

document
  .getElementById("details-action")
  .addEventListener("click", (e) => showDetails());

const showDetails = () => {
  detailsContainer.classList.remove("hidden");
  actionsContainer.classList.add("hidden");
};

const hideDetails = () => {
  detailsContainer.classList.add("hidden");
  actionsContainer.classList.remove("hidden");
};
