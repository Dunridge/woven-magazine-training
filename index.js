let mainTab = document.getElementById('main-tab');
mainTab.style.position = "fixed";
mainTab.style.width = "100%";
mainTab.style.zIndex = 100;

document.getElementById('menue-btn').addEventListener('click', () => {
    let navElement = document.getElementById('hidden-menue');
    let menueBtn = document.getElementById('menue-btn');
    if (navElement.style.display === 'none') {
        navElement.style.display = 'block';
        menueBtn.innerHTML = "close";
    } else {
        navElement.style.display = 'none';
        menueBtn.innerHTML = "menue";
    }

    let mainTab = document.getElementById('main-tab');

    if (mainTab.style.position === 'static') {
        mainTab.style.position = 'fixed';
        mainTab.style.width = '100%';
        mainTab.style.zIndex = 100;
    } else {
        mainTab.style.position = "fixed";
    }
});

let bgCounter = 1;

let bannerImages = ["url('https://wovenmagazine.com/content/uploads/2019/09/01-CodyCobb_banner.jpg')",
                    "url('https://wovenmagazine.com/content/uploads/2018/07/04_BeeRog_banner.jpg')",
                    "url('https://wovenmagazine.com/content/uploads/2018/04/01_-AceJig_cover-banner.jpg')",
                    "url('https://wovenmagazine.com/content/uploads/2018/07/01_JDR__banner.jpg')"]


const changeToNextBanner = () => { 
    document.getElementById('main-banner').style.backgroundImage = bannerImages[bgCounter];
    if (bgCounter === 3) {
        bgCounter = 0;
    } else {
        bgCounter++;
    }
}

const changeToPrevBanner = () => { 
    document.getElementById('main-banner').style.backgroundImage = bannerImages[bgCounter];
    if (bgCounter === 0) {
        bgCounter = 3;
    } else {
        bgCounter--;
    }
}

document.getElementById('prev').addEventListener('click', changeToPrevBanner);
document.getElementById('next').addEventListener('click', changeToNextBanner);