var icon = document.getElementById('btn');

icon?.addEventListener('click', function handleClick(event) {
myFunction();
});

function myFunction() {
    var x:HTMLDivElement = document.getElementById("navmenu") as HTMLDivElement;
    var icon:HTMLLIElement = document.getElementById('icon') as HTMLLIElement;
    if (x.style.display === "none") {
      x.style.display = "flex";
      icon.className="fa-solid fa-x";
    } else {
      x.style.display = "none";
      icon.className="fa-solid fa-bars";
    }
  }