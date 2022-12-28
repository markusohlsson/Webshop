export function contactus() {
  let container: HTMLDivElement = document.getElementById(
    "contactUsContainer"
  ) as HTMLDivElement;
  let title: HTMLHeadingElement = document.createElement(
    "h3"
  ) as HTMLHeadingElement;
  let icon: HTMLElement = document.createElement("i") as HTMLElement;
  let form: HTMLFormElement = document.createElement("form") as HTMLFormElement;
  let sentMessage: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;

  // Firstname
  let labelforFirstname: HTMLLabelElement = document.createElement(
    "label"
  ) as HTMLLabelElement;
  let inputforFirstname: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  //Lastname
  let labelforLastname: HTMLLabelElement = document.createElement(
    "label"
  ) as HTMLLabelElement;
  let inputforLastname: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  //Email Adress
  let labelForEmail: HTMLLabelElement = document.createElement(
    "label"
  ) as HTMLLabelElement;
  let inputForEmail: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  //Message
  let labelForMessage: HTMLLabelElement = document.createElement(
    "label"
  ) as HTMLLabelElement;
  let textAreaForMessage: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;
  // Send
  let button: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  container.appendChild(title);
  container.appendChild(icon);
  container.appendChild(form);
  title.innerHTML = "Kontakta oss";
  //Firstname
  form.appendChild(labelforFirstname);
  form.appendChild(inputforFirstname);
  //Lastname
  form.appendChild(labelforLastname);
  form.appendChild(inputforLastname);
  // Email
  form.appendChild(labelForEmail);
  form.appendChild(inputForEmail);
  // Message
  form.appendChild(labelForMessage);
  form.appendChild(textAreaForMessage);
  //button
  form.appendChild(button);

  // Firstname
  labelforFirstname.innerHTML = "Förnamn";
  inputforFirstname.type = "text";
  inputforFirstname.name = "firstname";
  inputforFirstname.id = "firstname";
  labelforFirstname.htmlFor = "firstname";
  inputforFirstname.required = true;
  inputforFirstname.placeholder = "John";

  // Lastname
  labelforLastname.innerHTML = "Efternamn";
  inputforLastname.type = "text";
  inputforLastname.name = "lastname";
  inputforLastname.id = "lastname";
  labelforLastname.htmlFor = "lastname";
  inputforLastname.required = true;
  inputforLastname.placeholder = "Doe";

  // Email adress
  labelForEmail.innerHTML = "Email";
  labelForEmail.htmlFor = "email";
  inputForEmail.type = "email";
  inputForEmail.id = "email";
  inputForEmail.name = "email";
  inputForEmail.required = true;
  inputForEmail.placeholder = "john@email.com";
  // Message
  labelForMessage.innerHTML = "Meddelande";
  labelForMessage.htmlFor = "message";
  textAreaForMessage.id = "message";
  textAreaForMessage.name = "message";
  textAreaForMessage.required = true;
  textAreaForMessage.placeholder = "Skriv ditt meddelande här";
  // Send
  button.innerHTML = "Skicka";
  button.type = "submit";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Du har skickat ett meddelande till oss!");
    form.innerHTML = "";

    sentMessage.innerHTML = "Ditt meddelande har skickats!";
    container.appendChild(sentMessage);
  });

  container.style.display = "flex";
  icon.className = "fa-solid fa-x";
  icon.addEventListener("click", function (event) {
    container.style.display = "none";
    container.innerHTML = "";
  });
}
