function func() {
    let ele = document.getElementById("div1");
    if(ele.style.display === "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}