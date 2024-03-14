
let a = [1,2,3,[11,12],[21,22],[]];


//let a = [[],[]];


/*
 * Logic by using extra space
let b = [];
a.forEach((n)=> {
    let t = typeof n;
    if(t === "object") {
        n.forEach((n1)=> {
            b.push(n1);
        })
    }else {
        b.push(n);
    }
})
console.log(b);*/

/*
* Logic by using existing space
*/

for(let i = 0; i< a.length ; i++ ) {
    if(typeof a[i]=== "object") {
        if(a[i].length!=0){
            a[i].forEach((n)=> {
                a.push(n);
            })
            a.splice(i,1);
            i -= 1;
        }else {
            a.splice(i,1);
            i -= 1
        }
    }
}
console.log(a);

//Time Complexity => O(n^2)
//Space Complexity => O(1)

