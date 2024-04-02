function ifEl(val, eventName,ref_of_Blurred_Event) {
    let trimVal = val.trim();
    if(eventName === 'email' || eventName ==='contact' || eventName === 'email3' || eventName === 'email4') {
        if(eventName === 'email'|| eventName === 'email3' || eventName === 'email4') {
            // https://www.w3resource.com/javascript/form/email-validation.php
            let lower_Cased_Val = trimVal.toLowerCase();
            console.log(lower_Cased_Val)
            let strValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(lower_Cased_Val);
            if(!strValid|| trimVal===""|| trimVal===undefined) {
                ref_of_Blurred_Event.style.display = "block"
                eventName.style.border = "1px solid tomato"
            } else {
                ref_of_Blurred_Event.style.display = "none"
                eventName.style.border = "1px solid black"
            }
        } else {
            let mobValidate = /^\d{10}$/;
            if(!trimVal.match(mobValidate)|| trimVal === "" || trimVal === undefined) {
                ref_of_Blurred_Event.style.display = "block"
                eventName.style.border = "1px solid tomato"
            }else {
                ref_of_Blurred_Event.style.display = "none"
                eventName.border = "1px solid black"
            }
        }
    } else {
        if(trimVal==="" || trimVal === undefined) {
            ref_of_Blurred_Event.style.display = "block"
            eventName.border = "1px solid tomato"
        } else {
            ref_of_Blurred_Event.style.display = "none"
            eventName.style.border = "1px solid black"
        }
    }
}

function verifyAll() {
    let arrOfParagraphs = document.getElementsByClassName("input")
    console.log(arrOfParagraphs)
    let arrOfInputs = document.getElementsByClassName("error")
    console.log(arrOfInputs)

    let arrOfValues = []
    for(let i = 0; i<arrOfParagraphs.length; i++) {

        arrOfValues[i] = arrOfParagraphs[i].value
        if(arrOfValues[i].trim() === "") {
            arrOfInputs[i].style.display = "block"
        } else {
            arrOfInputs[i].style.display = "none"
        }
    }
}

function myfun(event) {
    switch(event.name){
        case 'name':
            ifEl(event.value,event.name,event.nextElementSibling);
            return;
        
        case 'email':
            ifEl(event.value,event.name,event.nextElementSibling);
            break;

        case 'contact':
            ifEl(event.value,event.name,event.nextElementSibling);
            break;

        case 'amount':
            ifEl(event.value,event.name,event.nextElementSibling);
            break;
        
        case 'email3':
            ifEl(event.value,event.name,event.nextElementSibling);
            break;

        case 'email4':
        ifEl(event.value,event.name,event.nextElementSibling);
        break;
    }
}

function myfun2(event) {
    let x = event.id
    if(x==='b1'){
        document.getElementById('div1').style.display = 'block'
        document.getElementById('div2').style.display = 'none'
    } else {
        document.getElementById('div2').style.display = 'block'
        document.getElementById('div1').style.display = 'none'
    }
}

function verifyAll2() {
    let arrOfParagraphs = document.getElementsByClassName("input2")
    console.log(arrOfParagraphs)
    let arrOfInputs = document.getElementsByClassName("error2")
    console.log(arrOfInputs)

    let arrOfValues = []

    for(let i = 0; i<arrOfParagraphs.length; i++) {

        arrOfValues[i] = arrOfParagraphs[i].value
        if(arrOfValues[i].trim() === "") {
            arrOfInputs[i].style.display = "block"
        } else {
            arrOfInputs[i].style.display = "none"
        }
    }
    console.log(arrOfValues)
}