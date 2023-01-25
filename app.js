const backArrowNavbar = document.querySelector(".back_arrow");

const hamburgerButton = document.querySelector(".hamburgerMenu");
const mobileNavbar = document.querySelector(".mobileNavbar");

hamburgerButton.addEventListener("click", () => {
  if (mobileNavbar.style.display === "none") {
    mobileNavbar.style.display = "block";
  } else {
    mobileNavbar.style.display = "none";
  }
});

backArrowNavbar.addEventListener("click", () => {
  mobileNavbar.style.display = "none";
});
