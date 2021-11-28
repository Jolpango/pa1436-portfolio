console.log("tracking ready");
function trackMouse(event) {
    document.documentElement.style.setProperty("--cursorXpos", `${event.clientX}px`);
    document.documentElement.style.setProperty("--cursorYpos", `${event.clientY}px`);
}
document.addEventListener("mousemove", trackMouse);
