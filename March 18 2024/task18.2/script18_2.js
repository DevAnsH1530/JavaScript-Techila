// let i = 0;
function func(event) {

    /**
     * the ---- TARGET ---- {
     *          event in JS that returns where the recent event has occurred
     * 
     *          works in PAST TENSE
     * }
     */
    let y = event.target
    // console.log(y)
    let x = y.value
    //console.log('value',x)
    //let bint = BigInt(x);
    // console.log('bint ', bint);
        
    // let n = Number(x);
    // console.log('n ', n);
    
    if(x === "") {
        y.style.borderColor = "red";
        y.style.backgroundColor = "white";
    } else {
        y.style.borderColor = "black";
        y.style.backgroundColor = "white";
    }
}

// function another(event) {
//     // i = 0;
//     let curr = event.target;
//     curr.style.backgroundColor = "aqua";
// }