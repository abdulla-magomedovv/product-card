export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.form = this.modal.querySelector(".modal__form");
    this.listenCloseButton();
  }
  open() {
    this.modal.style.display = "block";
  }
  close() {
    this.modal.style.display = "none";
    this.form.reset();
  }
  isOpen() {
    return this.modal.style.display === "block";
  }
  listenCloseButton() {
    const closeButton = this.modal.querySelector(".modal__close-button");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}