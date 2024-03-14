const obj1 = {
    S_No: 1,
    Name: "A",
    Age: 12,
    Company: "abc"
};

const obj2 = {
    S_No: 2,
    Name: "B",
    Age: 13,
    Company: "abcd"
};
const obj3 = {
    S_No: 3,
    Name: "C",
    Age: 14,
    Company: "abcde"
};
const obj4 = {
    S_No: 4,
    Name: "D",
    Age: 15,
    Company: "abcdef"
};


// let tableref = document.getElementById("table1");
//         let newRow = tableref.insertRow(-1);

let data_arr = [obj1, obj2, obj3, obj4];
let after_insertion = [];
// console.log(typeof arr[0]);
function addData() {

    if(after_insertion.length<data_arr.length){
    let n = after_insertion.length

    // if(after_insertion < data_arr.length ){}
        // we are pushing the element of data_arr to the after_insertion
        after_insertion.push(data_arr[n]);

        // here we are accessing that object which is at nth index
        let a = after_insertion[n];

        // from the below line I'm getting the "REFERENCE" of <table> tag
        let ref_of_table = document.getElementById("table1")
        console.log(ref_of_table);
        
        //I'm inserting row by the below line i.e. the <tr> tag
        let row = ref_of_table.insertRow();
        console.log(row);

        //this is I'm doing to insert the data or cell at jth cell i.e. <td>
        let j = 0;
        
        
        Object.keys(a).forEach((key) => {

            //getting the value of ath object of first key
            let value = a[key];
            
            let new_cell = row.insertCell(j)
            //pushing the data into jth cell
            new_cell.innerText = value;
            console.log(value);
            j++;
        })
    } else {
        alert("sb khatam!!! ab kya print krenge aap ...????");
    }

}