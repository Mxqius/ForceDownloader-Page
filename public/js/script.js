console.log('script loaded');

// document.body.style.overscrollBehavior = "none";

const searchButton = document.querySelector('#searchButton');
const downloadDialog = document.querySelector('#downloadDialog');
const close_downloadModal = document.querySelector('#close-downloadModal');
const donateButton = document.querySelector('#donateButton');

let searching = false;

donateButton.addEventListener('mouseover', () => {
    const animations = [
        'animate__animated',
        'animate__tada'
    ];
    donateButton.classList.add(...animations);
    setTimeout(() => {
        donateButton.classList.remove(...animations);
    }, 1000);
});

searchButton.addEventListener('mouseover', () => {
    if (searching) return;
    searchButton.textContent = "بزن بریم";
});
searchButton.addEventListener('mouseout', () => {
    if (searching) return;
    searchButton.innerHTML = '<i class="fa fa-search"></i';
    searchButton.innerHTML += "جستجو";
});

searchButton.addEventListener('click', async () => {
    if (searching) return;
    searching = !searching;
    searchButton.textContent = "در حال جستجو";
    setTimeout(() => {
        downloadDialog.showModal();
        document.body.classList.add('overscroll-y-none');
        document.body.classList.add('overflow-hidden');
        searchButton.innerHTML = '<i class="fa fa-search"></i';
        searchButton.innerHTML += "جستجو";
        searching = !searching;
    }, 3000);
});
close_downloadModal.addEventListener('click', () => {
    downloadDialog.close();
    document.body.classList.remove('overscroll-y-none');
    document.body.classList.remove('overflow-hidden');
});
window.addEventListener("load", (event) => {
    const loaderScreen = document.querySelector('#loaderScreen');
    loaderScreen.classList.add('loader-hidden');

    loaderScreen.addEventListener('transitionend', () => {
        if (document.body.contains(loaderScreen))
            document.body.removeChild(loaderScreen);

        const animations = [
            'animate__bounceIn',
            'animate__animated'
        ];
        const forceTitle = document.querySelector('#titleForceDownload');
        forceTitle.classList.add(...animations);
    });
});