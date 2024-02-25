const navMobile = document.querySelector(".nav-mobile");
const allNavItems = document.querySelectorAll(".nav-mobile__link");
const btn = document.querySelector(".hamburger");
const menuImg = document.querySelector(".burgerBtn");
const xImg = document.querySelector(".xBtn");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const navMobileActivate = () => {
	navMobile.classList.toggle("nav-mobile--active");
	menuImg.classList.toggle("hide");
	xImg.classList.toggle("hide");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			menuImg.classList.remove("hide");
			xImg.classList.add("hide");
		});
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			(section.classList.contains("section-white") ||
				section.classList.contains("section-light-white")) &&
			section.offsetTop <= currentSection + 60
		) {
			menuImg.setAttribute("src", "./img/icons/menu2.svg");
		} else if (
			!(
				section.classList.contains("section-white") ||
				section.classList.contains("section-light-white")
			) &&
			section.offsetTop <= currentSection + 60
		) {
			menuImg.setAttribute("src", "./img/icons/menu1.svg");
		}
	});
};

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();
btn.addEventListener("click", navMobileActivate);
window.addEventListener("scroll", handleObserver);
