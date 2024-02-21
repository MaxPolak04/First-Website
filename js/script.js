const navMobile = document.querySelector(".nav-mobile");
const allNavItems = document.querySelectorAll(".nav-mobile__link");
const btn = document.querySelector(".hamburger");
const menuImg = document.querySelector(".burgerBtn");
const xImg = document.querySelector(".xBtn");
const footerYear = document.querySelector(".footer__year");

const navMobileActivate = () => {
	navMobile.classList.toggle("nav-mobile--active");
	menuImg.classList.toggle("hide");
	xImg.classList.toggle("hide");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
            console.log('xd');
			navMobile.classList.remove("nav-mobile--active");
			menuImg.classList.remove("hide");
			xImg.classList.add("hide");
		});
	});
};

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();
btn.addEventListener("click", navMobileActivate);
