// Efek Username Password Start
const groupUsername = document.getElementById("group-username");
const groupName = document.getElementById("group-name");
const inputUsername = document.getElementById("username");
const inputName = document.getElementById("name");

// Ketika username diklik
inputUsername.addEventListener("focus", () => {
  groupUsername.classList.add("expanded");
  groupUsername.classList.remove("shrunk");
  
  groupName.classList.add("shrunk");
  groupName.classList.remove("expanded");
});

// Ketika name diklik
inputName.addEventListener("focus", () => {
  groupName.classList.add("expanded");
  groupName.classList.remove("shrunk");
  
  groupUsername.classList.add("shrunk");
  groupUsername.classList.remove("expanded");
});

// Reset ukuran klo klik diluar dua input nama dan username
document.addEventListener("click", (e) => {
  const isClickInsideRow = e.target.closest(".input-row");
  if (!isClickInsideRow) {
    groupUsername.classList.remove("expanded", "shrunk");
    groupName.classList.remove("expanded", "shrunk");
  }
});
// Efek Username Password End