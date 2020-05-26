
document.getElementById('menue-btn').addEventListener('click', () => {
    console.log('hi');
    let navElement = document.getElementById('hidden-menue');
    if (navElement.style.display === 'none') {
        navElement.style.display = 'block';
    } else {
        navElement.style.display = 'none';
    }
});
