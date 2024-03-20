//

function b1() {

    let get_Ref_Of_Box1 = document.getElementById("box1");
    // if(get_Ref_Of_Box1.style.height==)
    

    let ele = document.getElementById("1.2");
    if(ele.style.display === "block") {
        ele.style.display = "none";
        get_Ref_Of_Box1.style.height = '50px';
        get_Ref_Of_Box1.style.width = '160px';
    } else {
        ele.style.display = "block";
        get_Ref_Of_Box1.style.height = '300px';
        get_Ref_Of_Box1.style.width = '190px';
    }
}

let j = 0;
function openBox2() {
    let get_Ref_Of_Box2 = document.getElementById("box2");
    // if(get_Ref_Of_Box1.style.height==)

        let ele = document.getElementById("2.2");
    if(j===0) {
        if(ele.style.display === "block") {
            ele.style.display = "none";
            get_Ref_Of_Box2.style.height = '50px';
            get_Ref_Of_Box2.style.width = '160px';
        } else {
            ele.style.display = "block";
            get_Ref_Of_Box2.style.height = '300px';
            get_Ref_Of_Box2.style.width = '190px';
        }
        ++j;
    }
}

function collapse2() {
    let get_Ref_Of_Box2 = document.getElementById("box2");
    let ele = document.getElementById("2.2");
    if(j>0) {
        if(ele.style.display === "block") {
            ele.style.display = "none";
            get_Ref_Of_Box2.style.height = '50px';
            get_Ref_Of_Box2.style.width = '160px';
        } else {
            ele.style.display = "block";
            get_Ref_Of_Box2.style.height = '300px';
            get_Ref_Of_Box2.style.width = '190px';
        }
    }
    j=0;
}

let k = 0;
function openBox3() {
    let get_Ref_Of_Box3 = document.getElementById("box3");
    // if(get_Ref_Of_Box1.style.height==)
    

    let ele = document.getElementById("3.2");
    if(k===0) {
        if(ele.style.display === "block") {
            ele.style.display = "none";
            get_Ref_Of_Box3.style.height = '50px';
            get_Ref_Of_Box3.style.width = '160px';
        } else {
            ele.style.display = "block";
            get_Ref_Of_Box3.style.height = '300px';
            get_Ref_Of_Box3.style.width = '190px';
        }
        ++k;
    }
}

function collapse3() {
    let get_Ref_Of_Box3 = document.getElementById("box3");
    let ele = document.getElementById("3.2");
    if(k>0) {
        if(ele.style.display === "block") {
            ele.style.display = "none";
            get_Ref_Of_Box3.style.height = '50px';
            get_Ref_Of_Box3.style.width = '160px';
        } else {
            ele.style.display = "block";
            get_Ref_Of_Box3.style.height = '300px';
            get_Ref_Of_Box3.style.width = '190px';
        }
    }
    k=0;
}