// Load color preference from localStorage
window.onload = () => {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.getElementById('box').style.backgroundColor = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
};

// Handle color picker change
document.getElementById('colorPicker').addEventListener('input', function () {
    const color = this.value;
    document.getElementById('box').style.backgroundColor = color;
    localStorage.setItem('themeColor', color);
});

// Animate box on button click
document.getElementById('animateBtn').addEventListener('click', function () {
    const box = document.getElementById('box');
    box.classList.add('animated');
    setTimeout(() => box.classList.remove('animated'), 1000);
});

// Rotate circle on button click
document.getElementById('rotateBtn').addEventListener('click', function () {
    const circle = document.getElementById('circle');
    circle.classList.add('rotated');
    setTimeout(() => circle.classList.remove('rotated'), 1000);
});

// Scale rectangle on button click
document.getElementById('scaleBtn').addEventListener('click', function () {
    const rectangle = document.getElementById('rectangle');
    rectangle.classList.add('scaled');
    setTimeout(() => rectangle.classList.remove('scaled'), 1000);
});