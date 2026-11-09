import { Modal } from "./modal.js";
import { Form } from "./form.js";

const modal = new Modal("modal-main");


const form = document.querySelector(".footer__email-form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.checkValidity()) {
    console.log("Форма отправлена");
    const email = emailInput.value;
    console.log({
      email: email,
    });
    form.reset();
  }
});

const registrationButton = document.querySelector("#registration");
registrationButton.addEventListener("click", () => {
   modal.open();
});

let user;
const modalForm = new Form("modal-form");
modalForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (modalForm.isValid()) {
    const values = modalForm.getValues();
    user = {
      firstName: values.firstname,
      lastName: values.lastname,
      dateOfBirth: values.date,
      login: values.login,
      password: values.password,
      repeatPassword: values["repeat-password"],
      createdOn: new Date(),
    };
    console.log(user);
    console.log("Форма отправлена");
    modalForm.reset();
    modal.close();
  } else {
    alert("Регистрация отклонена");
  }
});

const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

password.addEventListener("input", () => {
  if (password.value === repeatPassword.value) {
    repeatPassword.setCustomValidity("");
  } else {
    repeatPassword.setCustomValidity("Пароли не совпадают");
  }
});

repeatPassword.addEventListener("input", () => {
  if (password.value === repeatPassword.value) {
    repeatPassword.setCustomValidity("");
  } else {
    repeatPassword.setCustomValidity("Пароли не совпадают");
  }
});

