document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Script loaded');  // Add this line

    const toggle = document.createElement('button');
    toggle.innerText = 'Toggle Dark Mode';
    toggle.style.position = 'fixed';
    toggle.style.bottom = '10px';
    toggle.style.right = '10px';
    toggle.style.padding = '10px';
    toggle.style.backgroundColor = '#000';
    toggle.style.color = '#fff';
    toggle.style.border = 'none';
    toggle.style.borderRadius = '5px';
    toggle.style.cursor = 'pointer';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        console.log('Toggle Dark Mode');
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
