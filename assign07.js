function paymentCalculator() {
    var apr = (document.getElementById("apr").value);
    var term = (document.getElementById("term").value);
    var amount = (document.getElementById("amount").value);
    var payment = amount * (apr / 100 / 12) * (Math.pow(1 + (apr / 100 / 12), (term * 12))) / (Math.pow(1 + (apr / 100 / 12), (term * 12)) - 1);
    var a = "";
    var b = "";
    var c = "";

    if (apr === "" || apr < 0 || apr > 25){
        document.getElementById("apr_requirments").style.display = "block";
    } else if ( apr > 0 || apr < 25){
        document.getElementById("apr_requirments").style.display = "none";
        a = "valid";
    }
    if (term === "" || term <= 0 || term >= 40){
        document.getElementById("term_requirments").style.display = "block";
    }else if (term >= 0 || term <= 40){
        document.getElementById("term_requirments").style.display = "none";
        b = "valid";
    }
    if (amount === "" || amount <= 0){
        document.getElementById("amount_requirments").style.display = "block";
    }else if (amount >= 0){
        document.getElementById("amount_requirments").style.display = "none";
        c = "valid";
    }

    if (a == "valid" && b == "valid" && c == "valid"){
        document.getElementById("payment").value =('$' + payment.toFixed(2)); 
    }
}


