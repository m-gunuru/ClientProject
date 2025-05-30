const start = document.createElement('button');
start.textContent = 'Start';
start.className = 'start';

start.addEventListener('click', function() {
    window.location.href = 'Dialogue.html';
});

document.getElementById('start-container').appendChild(start);