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


function message(){
    const element = document.getElementById('myInput');
    const messageElement = document.getElementById("orderID-message");

  messageElement.textContent = ""; // Clear any previous message

  if (element.value == 101) {
    messageElement.textContent = "Order ID is valid!";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Order ID is invalid.";
    messageElement.style.color = "red";
  }
}