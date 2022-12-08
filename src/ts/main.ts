var hamburgericon = document.getElementById('hamburgericonbtn');

hamburgericon?.addEventListener('click', function handleClick(event) {
hamburgermenu();
});

function hamburgermenu() {
    var navmenu:HTMLDivElement = document.getElementById("navmenu") as HTMLDivElement;
    var icon:HTMLLIElement = document.getElementById('hamburgericon') as HTMLLIElement;
    if (navmenu.style.display === "none") {
        navmenu.style.display = "flex";
      icon.className="fa-solid fa-x";
    } else {
        navmenu.style.display = "none";
      icon.className="fa-solid fa-bars";
    }
  }
