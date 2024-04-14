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
