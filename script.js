"use strict";

const dialog = document.querySelector("#gift-dialog");
const openGift = document.querySelector("#open-gift");
const closeGift = document.querySelector("#close-gift");
const candle = document.querySelector("#candle");
const relight = document.querySelector("#relight");
const wishFeedback = document.querySelector("#wish-feedback");
const confettiLayer = document.querySelector("#confetti");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function celebrate() {
  if (reducedMotion.matches) return;

  const colors = ["#69794a", "#a9b383", "#c5a366", "#e0d9b6", "#889064"];
  const fragment = document.createDocumentFragment();
  confettiLayer.replaceChildren();

  for (let index = 0; index < 70; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${Math.random() * 100}%`);
    piece.style.setProperty("--size", `${5 + Math.random() * 7}px`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    piece.style.setProperty("--duration", `${2.8 + Math.random() * 1.8}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.6}s`);
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    piece.style.setProperty("--spin", `${Math.random() * 900 - 450}deg`);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
    fragment.append(piece);
  }

  confettiLayer.append(fragment);
}

openGift.addEventListener("click", () => {
  dialog.showModal();
  document.body.classList.add("dialog-open");
  // The dialog's top layer keeps the celebration above its backdrop.
  dialog.append(confettiLayer);
  celebrate();
});

closeGift.addEventListener("click", () => dialog.close());

dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  ) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  confettiLayer.replaceChildren();
  document.body.prepend(confettiLayer);
  openGift.focus({ preventScroll: true });
});

candle.addEventListener("click", () => {
  candle.classList.add("is-out");
  candle.disabled = true;
  candle.setAttribute("aria-label", "Bursdagslys blåst ut");
  wishFeedback.textContent = "Ønsket er gjort. Håpar det finn vegen til deg. ♡";
  relight.hidden = false;
  relight.focus({ preventScroll: true });
  celebrate();
});

relight.addEventListener("click", () => {
  candle.classList.remove("is-out");
  candle.disabled = false;
  candle.setAttribute("aria-label", "Blås ut bursdagslyset");
  wishFeedback.textContent = "Psst… trykk på lyset for å ønskje deg noko.";
  relight.hidden = true;
  candle.focus({ preventScroll: true });
});

document.querySelector("#celebrate").addEventListener("click", celebrate);
document.querySelector("#reveal-celebrate").addEventListener("click", celebrate);
