// Hamburger Menu //
export let hamburgericon = document.getElementById("hamburgericonbtn");
let navmenu: HTMLDivElement = document.getElementById("navmenu") as HTMLDivElement;
let icon: HTMLLIElement = document.getElementById("hamburgericon") as HTMLLIElement;


export function hamburgermenu() {

  if (navmenu.style.display === "none") {
    navmenu.style.display = "flex";
    icon.className = "fa-solid fa-x";
  } else {
    navmenu.style.display = "none";
    icon.className = "fa-solid fa-bars";
  }
}



  
