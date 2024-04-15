const now = new Date();
const formattedDateTime = now.toLocaleString();

window.onload = function calculateTrackingDetails() {
    const orderPlaced = document.getElementById('order-placed');
    const orderAprooved = document.getElementById('order-approved');
    const orderDispatched = document.getElementById('order-dispatched');
    const orderDelivered = document.getElementById('order-delivered');
        orderPlaced.innerText = "";
    orderPlaced.innerText = formattedDateTime;
    orderAprooved.innerText = addDays();
    orderDispatched.innerText = addDays();
    orderDelivered.innerText = addDays();


}

function addDays() {
    const numberOfDaysToAdd = 2;
    now.setDate(now.getDate() + numberOfDaysToAdd);
    const formattedDateTime = now.toLocaleString();
    return formattedDateTime
}