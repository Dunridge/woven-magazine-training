document.getElementById('menue-btn').addEventListener('click', () => {
    console.log('hi');
    let navElement = document.getElementById('hidden-menue');
    if (navElement.style.display === 'none') {
        navElement.style.display = 'block';
    } else {
        navElement.style.display = 'none';
    }

    let mainTab = document.getElementById('main-tab');
    if (mainTab.style.position === 'static') {
        mainTab.style.position = 'fixed';
        mainTab.style.width = '100%';
        mainTab.style.zIndex = 100;
    } else {
        mainTab.style.position = 'static';
    }
});
