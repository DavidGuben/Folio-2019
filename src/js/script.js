
// Hide navigation list when its not displayed
function toggleNaviDisplay () {
    let x = document.getElementById('navi-list');

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// toggle flipping the card
function flipCard() {
    let x = document.getElementById('card__side--front');
    let y = document.getElementById('card__side--back');

    x.style.transform = "rotateY(-180deg)";
    y.style.transform = "rotateY(0)";
}

// toggle flipping the card back
function flipCardBack() {
    let x = document.getElementById('card__side--front');
    let y = document.getElementById('card__side--back');
    
    x.style.transform = "rotateY(0)";
    y.style.transform = "rotateY(-180deg)";
}