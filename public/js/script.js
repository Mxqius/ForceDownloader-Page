console.log('script loaded');
const searchButton = document.querySelector('#searchButton');
const downloadDialog = document.querySelector('#downloadDialog');

searchButton.addEventListener('mouseover', () => {
    searchButton.textContent = "بزن بریم";
});
searchButton.addEventListener('mouseout', () => {
    searchButton.innerHTML = '<i class="fa fa-search mr-5"></i';
    searchButton.innerHTML += "جستجو";
});

searchButton.addEventListener('click', () => {
    downloadDialog.showModal();
});

