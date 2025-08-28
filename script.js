const HeartCount = document.querySelector(".heart-count");

document.querySelectorAll(".heart-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    let count = parseInt(HeartCount.innerText, 10) || 0;
    HeartCount.innerText = count + 1;
  });
});
