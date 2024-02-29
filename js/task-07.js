document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');

    fontSizeControl.addEventListener('input', function() {
        const fontSize = fontSizeControl.value + 'px';
        textSpan.style.fontSize = fontSize;
    });
});