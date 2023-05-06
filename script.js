window.onscroll = () => {
	if (window.scrollY > 80) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}
};

window.onload = () => {
	if (window.scrollY > 80) {
		document.querySelector(".header").classList.add(".active");
	} else {
		document.querySelector(".header").classList.remove(".active");
	}
};

//BTN variables
const menu = document.querySelector("#bars-btn");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
	if (navbar.classList.contains("active")) {
		navbar.classList.remove("active");
		// barsBtn.classList.add("fa-solid fa-xmark")
		menu.classList = "fa fa-bars";
	} else {
		navbar.classList.add("active");
		// barsBtn.classList.remove("fa-solid fa-xmark")
		menu.classList = "fa-solid fa-xmark";
	}
});

// Reveal Sections
const sectionAll = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section--hidden");
};
const sectionObserve = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.5,
});

sectionAll.forEach(function (section) {
	sectionObserve.observe(section);
	section.classList.add("section--hidden");
});


// Questions Accardion
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	});
});


let 