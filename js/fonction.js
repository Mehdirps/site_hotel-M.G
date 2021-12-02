// Menu Burger
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  });

}

// Pop-up connexion
toggleMenu();
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('fondsombre');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.dataset.modalTarget);
    openModal(menu)
  });
});

overlay.addEventListener('click', () => {
  const menus = document.querySelectorAll('.modal.active');
  modals.forEach(menu => {
    closeModal(menu);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = button.closest('.modal');
    closeModal(menu)
  });
});

function openModal(menu) {
  if (menu == null) return
  menu.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(menu) {
  if (menu == null) return
  menu.classList.remove('active');
  overlay.classList.remove('active');
};
// 