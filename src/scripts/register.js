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

// Custom Dropdown Role Start
const roleWrapper = document.getElementById("group-role");
const roleDisplay = document.getElementById("role-display");
const roleValue = document.getElementById("role-value");
const roleOptions = document.querySelectorAll(".custom-select__option");

// Toggle buka/tutup dropdown
roleWrapper.addEventListener("click", (e) => {
  roleWrapper.classList.toggle("open");
});

// Pilih opsi
roleOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();

    const value = option.dataset.value;
    const label = option.textContent;

    // Update display & hidden input
    roleDisplay.textContent = label;
    roleDisplay.classList.add("selected");
    roleValue.value = value;

    // Tandai opsi aktif
    roleOptions.forEach((o) => o.classList.remove("active"));
    option.classList.add("active");

    // Tutup dropdown
    roleWrapper.classList.remove("open");
  });
});

// Tutup dropdown kalau klik di luar
document.addEventListener("click", (e) => {
  if (!roleWrapper.contains(e.target)) {
    roleWrapper.classList.remove("open");
  }
});
// Custom Dropdown Role End