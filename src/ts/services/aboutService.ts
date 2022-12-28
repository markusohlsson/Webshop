export function aboutus() {
  let container: HTMLDivElement = document.getElementById(
    "aboutUsContainer"
  ) as HTMLDivElement;
  let title: HTMLHeadingElement = document.createElement(
    "h3"
  ) as HTMLHeadingElement;
  let text: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;
  let icon: HTMLElement = document.createElement("i") as HTMLElement;

  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(icon);
  title.innerHTML = "Om oss.";
  text.innerHTML = "lorem";

  container.style.display = "flex";
  icon.className = "fa-solid fa-x";
  icon.addEventListener("click", function (event) {
    container.style.display = "none";
    container.innerHTML = "";
  });
}
