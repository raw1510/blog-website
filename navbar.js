function vege() {
    document.getElementById("all-posts").style.display = "none";
    document.getElementById("vegetarian-nav").style.display = "block";
    document.getElementById("shakes-nav").style.display = "none";
    console.log("you are in vegetarian blog page");
}

function shakes() {
    document.getElementById("all-posts").style.display = "none";
    document.getElementById("vegetarian-nav").style.display = "none";
    document.getElementById("shakes-nav").style.display = "block";
    console.log("you are in shakes blog page");
}
function allposts() {
    document.getElementById("all-posts").style.display = "flex";
    document.getElementById("vegetarian-nav").style.display = "none";
    document.getElementById("shakes-nav").style.display = "none";
    console.log("you are in all blog page");
}