function myfunc(event) {

    let ref_of_Blurred_Event = event.target;
    // console.log(ref_of_Blurred_Event);

    let val = ref_of_Blurred_Event.value;
    // console.log(val);

    let placeholder_val = ref_of_Blurred_Event.placeholder;
    // console.log(placeholder_val);

    let orignal_val = val.trim();
    // console.log(orignal_val);

    switch(placeholder_val){
        case 'name':
            ifEl(orignal_val,placeholder_val,ref_of_Blurred_Event);
            break;
        
        case 'email':
            ifEl(orignal_val,placeholder_val,ref_of_Blurred_Event);
            break;

        case 'mobile':
            ifEl(orignal_val,placeholder_val,ref_of_Blurred_Event);
            break;

        case 'amount':
            ifEl(orignal_val,placeholder_val,ref_of_Blurred_Event);
            break;
    }
}

function ifEl(val, capturePlaceholder,ref_of_Blurred_Event) {
    let trimVal = val.trim();
    if(capturePlaceholder === 'email' || capturePlaceholder =='mobile') {
        if(capturePlaceholder === 'email') {
            // https://www.w3resource.com/javascript/form/email-validation.php
            let lower_Cased_Val = trimVal.toLowerCase();
            console.log(lower_Cased_Val)
            let strValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(lower_Cased_Val);
            if(!strValid|| trimVal===""|| trimVal===undefined) {
                document.getElementById(capturePlaceholder).style.display = "block"
                ref_of_Blurred_Event.style.border = "1px solid tomato"
            } else {
                document.getElementById(capturePlaceholder).style.display = "none"
                ref_of_Blurred_Event.style.border = "1px solid black"
            }
        } else {
            let mobValidate = /^\d{10}$/;
            if(!trimVal.match(mobValidate)|| trimVal === "" || trimVal === undefined) {
                document.getElementById(capturePlaceholder).style.display = "block"
                ref_of_Blurred_Event.style.border = "1px solid tomato"
            }else {
                document.getElementById(capturePlaceholder).style.display = "none"
                ref_of_Blurred_Event.style.border = "1px solid black"
            }
        }
    } else {
        if(trimVal==="" || trimVal === undefined) {
            document.getElementById(capturePlaceholder).style.display = "block"
            ref_of_Blurred_Event.style.border = "1px solid tomato"
        } else {
            document.getElementById(capturePlaceholder).style.display = "none"
            ref_of_Blurred_Event.style.border = "1px solid black"
        }
    }
}

