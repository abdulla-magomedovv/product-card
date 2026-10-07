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

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-button");

closeButton.addEventListener("click", () => {
  modalForm.reset();
  modal.classList.remove("modal-showed");
});

const registrationButton = document.querySelector("#registration");
registrationButton.addEventListener("click", () => {
  modalForm.reset();
  modal.classList.add("modal-showed");
});

let user;
const modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (modalForm.checkValidity()) {
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const dateOfBirth = document.querySelector("#date").value;
    const login = document.querySelector("#login").value;
    const passwordValue = document.querySelector("#password").value;
    const repeatPasswordValue = document.querySelector("#repeat-password").value;
    user = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      login: login,
      password: passwordValue,
      repeatPassword: repeatPasswordValue,
      createdOn: new Date(),
    };
    console.log(user);
    console.log("Форма отправлена");
    modal.classList.remove("modal-showed");
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

