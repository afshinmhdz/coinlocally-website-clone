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
const hamburgerArrowDown = document.querySelector(".fa-angle-down");
const submenu = document.querySelector("#submenu1");


hamburgerArrowDown.addEventListener("click", () => {
  if (submenu.style.display === "none") {
   // submenu.style.display = "block";
    
    submenu.classList.add="open";
    
  } else {
     //submenu.style.display = "none";
  }
});
//END ---------FOR SUBMENU SHOW AND HIDE--------------
