let toggler = document.querySelector(".toggler");
let aboutUs = document.querySelector(".about-us-wrapper");
let product = document.querySelector(".products-wrapper");
let aboutImg = document.querySelector(".about-us-image");
let productsImg = document.querySelector(".products");
let contact = document.querySelector(".contact-us");

toggler.addEventListener('click', () => {
	aboutUs.classList.toggle("light");
	aboutImg.classList.toggle("light");
	product.classList.toggle("light");
	productsImg.classList.toggle("light");
	contact.classList.toggle("light");
	document.body.classList.toggle('light');
})