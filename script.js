const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const posts = document.querySelectorAll(".post-card");
const emptyMessage = document.getElementById("emptyMessage");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    const filter = button.dataset.filter;
    let visibleCount = 0;

    posts.forEach((post) => {
      const matches = filter === "all" || post.dataset.category === filter;
      post.hidden = !matches;
      if (matches) visibleCount++;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !message) {
    formMessage.textContent = "Please fill in both fields.";
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your demo message is ready. (It has not been sent to a server.)`;
  event.target.reset();
});
