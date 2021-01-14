function compute()
{
    var p = document.getElementById("principal").value;
    if(p <= 0 ) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
    
        var interest = p * (rate/100) * years;
        var d = new Date().getFullYear() + parseInt(years);
        var res = document.getElementById("result");
        res.innerHTML = `
        <p>If you deposit <mark>${p}</mark>,</p>
        <p>at an interest rate of <mark>${rate}%</mark></p>
        <p>You will receive an amount of <mark>${interest}</mark></p>
        <p>in the year <mark>${d}</mark></p>
        `
    }
}
        

function input() {
    var rate = document.getElementById("rate");
    var output = document.getElementById("percentVal");
    output.innerHTML = rate.value + "%";

    rate.oninput = function() {
        output.innerHTML = this.value+ "%";
    }
}