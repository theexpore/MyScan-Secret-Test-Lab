const runBtn = document.getElementById("runBtn");
const state = document.getElementById("scanState");
runBtn.addEventListener("click", () => {
  state.textContent = "Demo complete";
  state.classList.add("done");
  document.getElementById("detectedCount").textContent = "02";
  document.getElementById("fpCount").textContent = "00";
  runBtn.innerHTML = 'Demo complete <span>✓</span>';
  runBtn.disabled = true;
  runBtn.style.opacity = ".85";
});
// This is a visual mock only; it does not execute or simulate the MyScan scanner.
