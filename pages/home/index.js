importNav('home');

const setButton = document.getElementById('btn');

setButton.addEventListener('click', () => {
    window.LightControl.setColor(0, "#FFFFFF", 100);
});
