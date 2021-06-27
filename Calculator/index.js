// sip calculator
 function sip() {
    var sipAmount=document.getElementById("sip-amount").value;
    // console.log(sipAmount);
    var sipTime=document.getElementById("sip-time").value;
    // console.log(sipTime);
    var sipRate=document.getElementById("sip-rate").value;
    // console.log(sipRate);
    var totalInvestment= " ₹ " + sipAmount*sipTime*12;

    var  i = sipRate/100/12;

    var futureValue = " ₹ " + Math.round(sipAmount * [((1+i)**(12*sipTime)) - 1] * (1+i)/i);

    document.getElementById("sipInvestedAmount").textContent=totalInvestment;
    document.getElementById("sipTotalReturn").textContent=futureValue;
    //console.log(totalInvestment);
    //console.log(futureValue);
}

// lumpsome calculator

function lumpsome() {
    var lumpAmount=document.getElementById("lump-amount").value;
    // console.log(sipAmount);
    var lumpTime=document.getElementById("lump-time").value;
    // console.log(sipTime);
    var lumpRate=document.getElementById("lump-rate").value;
    // console.log(sipRate);
    var totalInvestment= " ₹ " + lumpAmount;


    var futureValue =  " ₹ " + Math.round(lumpAmount * ((1+lumpRate/100)**lumpTime));

    document.getElementById("lumpInvestedAmount").textContent=totalInvestment;
    document.getElementById("lumpTotalReturn").textContent=futureValue;
    //console.log(totalInvestment);
    //console.log(futureValue);
}

