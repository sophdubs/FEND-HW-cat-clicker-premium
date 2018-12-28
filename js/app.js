let clickCountOne = 0;
let clickCountTwo = 0;
let catNameOne = "Bob";
let catNameTwo = "Jim";
let catPicOne = document.querySelector(".main-image-1");
let clicksOne = document.querySelector('.number_of_clicks_one');
let catPicTwo = document.querySelector(".main-image-2");
let clicksTwo = document.querySelector('.number_of_clicks_two');
let nameOne = document.querySelector('.cat-name-one');
let nameTwo = document.querySelector('.cat-name-two');

nameOne.innerText = catNameOne;
nameTwo.innerText = catNameTwo;
catPicOne.addEventListener('click', function(){
    clickCountOne += 1;
    clicksOne.innerText = clickCountOne;
}, false);
catPicTwo.addEventListener('click', function(){
    clickCountTwo += 1;
    clicksTwo.innerText = clickCountTwo;
}, false);