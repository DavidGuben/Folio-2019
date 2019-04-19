function toggleNaviDisplay () {
    let x = document.getElementById('navi-list');

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        setTimeout(x.style.display = "none", 5000);
    }
}