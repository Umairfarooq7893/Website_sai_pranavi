// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Highlight active menu (basic UX improvement)
const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.style.color = "white");
    item.style.color = "#f1c40f";
  });
});

// Button alert (Booking simulation)
const bookBtn = document.querySelector(".hero button");

bookBtn.addEventListener("click", () => {
  alert("Booking request sent! We will contact you soon 😊");
});

// Card hover animation effect (extra JS touch)
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
  });
});
