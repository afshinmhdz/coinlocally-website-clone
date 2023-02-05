//START ---------FOR HAMBURGER MENU SHOW AND HIDE--------------
const hamburgerButton = document.querySelector(".hamburgerMenu");
const backArrowNavbar = document.querySelector(".back_arrow");
const mobileNavbar = document.querySelector(".mobileNavbar");
const activeNavbarMainSectionStyle = document.querySelector(".active");
hamburgerButton.addEventListener("click", () => {
  if (mobileNavbar.style.display === "none") {
    mobileNavbar.style.display = "block";
    activeNavbarMainSectionStyle.className = "active1";
  } else {
    mobileNavbar.style.display = "none";
    activeNavbarMainSectionStyle.classList.remove("active1");
  }
});

backArrowNavbar.addEventListener("click", () => {
  mobileNavbar.style.display = "none";
  activeNavbarMainSectionStyle.classList.remove("active1");
});
//END ---------FOR HAMBURGER MENU SHOW AND HIDE--------------

//START ---------FOR SUBMENU SHOW AND HIDE--------------
const hamburgerArrowDown = document.querySelectorAll(".fa-angle-down");
const submenu = document.querySelectorAll(".submenu");

for (const listItemEl of hamburgerArrowDown) {
  listItemEl.addEventListener("click", () => {
    for (const listItem of submenu) {
      if (listItem.style.display === "none") {
        listItem.style.display = "block";
        listItem.className="open";
      } else {
         listItem.style.display = "none";
        listItem.className="submenu";
      }
    }
  });
}

//END ---------FOR SUBMENU SHOW AND HIDE--------------
