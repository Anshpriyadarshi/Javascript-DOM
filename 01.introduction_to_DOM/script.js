let a = document.getElementsByClassName("btn-1")
console.log(a[0])
let b = document.getElementById("btn2")
console.log(b)

let bool = true;
b.addEventListener("mouseover", func);
function func() {
    //     if (bool) {
    //         b.style.backgroundColor = "red";
    //         bool = false;

    // else {
    //             b.style.backgroundColor = "yellow";
    //             bool = true;

    if (b.style.backgroundColor == "red") {
        b.style.backgroundColor = "yellow";
    }
    else {
        b.style.backgroundColor = "red";
    }
}
