const bodyOverflow = document.querySelector('body');
const btns = document.querySelectorAll('.burger__menu-btn');
const modalOverlay = document.querySelector('.sidebar-modal__overlay');
const modals = document.querySelectorAll('.sidebar-modal__window');
const sidebarModal = document.querySelector('.sidebar-modal');
const menuBtn = document.querySelector('.menu-btn__burger');
const sbmlink = document.querySelectorAll('.sidebar-modal__link');

let sideBarOpen = false;

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('sidebar-modal_visible');
		});
		if (sideBarOpen === false) {
				document.querySelector(`[data-target="${path}"]`).classList.add('sidebar-modal_visible');
		bodyOverflow.classList.add('overflow-hidden');
		modalOverlay.classList.add('sidebar-modal__overlay_visible');
		sidebarModal.classList.add('sidebar-modal-main_visible');
		menuBtn.classList.add('menu-btn_open');
		sideBarOpen = true;
		} else if (sideBarOpen === true) {
			bodyOverflow.classList.remove('overflow-hidden');
		modalOverlay.classList.remove('sidebar-modal__overlay_visible');
		sidebarModal.classList.remove('sidebar-modal-main_visible');
		menuBtn.classList.remove('menu-btn_open');
		sideBarOpen = false;
		}
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);
	if (e.target == modalOverlay && sideBarOpen == true) {
		bodyOverflow.classList.remove('overflow-hidden');
		modalOverlay.classList.remove('sidebar-modal__overlay_visible');
		sidebarModal.classList.remove('sidebar-modal-main_visible');
		menuBtn.classList.remove('menu-btn_open');
		sideBarOpen = false;
		modals.forEach((el) => {
		el.classList.remove('sidebar-modal_visible');
		});
	}
});


