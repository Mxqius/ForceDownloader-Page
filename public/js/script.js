console.log('script loaded');
const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('mouseover', () => {
    searchButton.textContent = "بزن بریم";
});
searchButton.addEventListener('mouseout', () => {
    searchButton.innerHTML = '<i class="fa fa-search mr-5"></i';
    searchButton.innerHTML += "جستجو";
});