var form = document.getElementById("paymentForm");
form.addEventListener("submit",function(event){ 
    event.preventDefault();
    var carholderName = document.getElementById("name").value;
    var cardNumber = document.getElementById("number").value;
    var expiryDate = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    var cardNumberRegex = /^\d{10}$/;
    var cvvRegex = /^\d{3}$/;
    var carholderNameRegex = /^[A-Za-z ]+$/;
    if(carholderName === "" || !carholderNameRegex.test(carholderName))
    {
        alert("Invalid Name! Please enter a valid name");
        document.getElementById("name").value="";
        return;
    }
    if(cardNumber==="" || !cardNumberRegex.test(cardNumber))
    {
        alert("Invalid Card Number! Please enter a valid card number");
        document.getElementById("number").value="";
        return;
    }
    if(cvv === "" || !cvvRegex.test(cvv))
    {
        alert("Invalid CVV! Please enter a valid CVV");
        document.getElementById("cvv").value="";
        return;
    }
    if(expiryDate==="")
    {
        alert("Invalid Expiry Date! Please enter a valid expiry date");
        document.getElementById("expiry").value="";
        return;
    }
    localStorage.setItem("carholderName",carholderName);
    localStorage.setItem("cardNumber",cardNumber);
    localStorage.setItem("expiryDate",expiryDate);
    localStorage.setItem("cvv",cvv);
    console.log("carholderName:",localStorage.getItem("carholderName"));
    console.log("cardNumber:",localStorage.getItem("cardNumber"));
    console.log("expiryDate:",localStorage.getItem("expiryDate"));
    console.log("cvv:",localStorage.getItem("cvv"));
    alert("Paymet Details Succesfully Saved!");
    document.getElementById("name").value="";
    document.getElementById("number").value="";
    document.getElementById("expiry").value="";
    document.getElementById("cvv").value="";




});



