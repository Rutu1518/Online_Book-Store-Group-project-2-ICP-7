function changeText(btnnum) {
    if (btnnum == 'radio1') {
        const inptheader = document.getElementById('input_header');
        inptheader.innerText = "AWB Number";
    }
    if (btnnum == 'radio2') {
        const inptheader = document.getElementById('input_header');
        inptheader.innerText = "Order id";
    }
    
}

function checkSubmitt() {
    const element = document.getElementById('myInput');
    if (element.value == 101) {
        
        alert(element.value+ ' is  correct procees to next page' );
    }
    else {
        alert(element.value+ ' is not correct' );
    }
}