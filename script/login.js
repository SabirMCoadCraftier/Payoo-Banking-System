console.log("login Functionallly comming");
document.getElementById("login-btn").addEventListener("click", function () {
    // get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log("contactNumber");

    //get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log("pin");


    //3 match pin & mobile number

    if (contactNumber == "01234567890" && pin == "1234") {
        alert("login Successful");

        //window.location.replace("/home.html");
        window.location.assign("/home.html");

    } else {
        alert("login Failed");
        return;
    }
})