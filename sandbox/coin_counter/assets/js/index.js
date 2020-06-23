window.addEventListener("keydown", function () {
    calcTotal();
})

window.addEventListener("click", function () {
    calcTotal();
})

window.addEventListener("keyup", function () {
    calcTotal();
})

function calcTotal() {
    var euros;
    var cents;

    var twoEuros = document.getElementById("twoEuros").value * 2;
    var oneEuro = document.getElementById("oneEuro").value * 1;
    var fiftyCents = document.getElementById("fiftyCents").value * 0.50;
    var twentyCents = document.getElementById("twentyCents").value * 0.20;

    var tenCents = document.getElementById("tenCents").value * 0.10;
    var fiveCents = document.getElementById("fiveCents").value * 0.05;
    var twoCents = document.getElementById("twoCents").value * 0.02;
    var oneCent = document.getElementById("oneCent").value * 0.01;

    total = (twoEuros + oneEuro + fiftyCents + twentyCents + tenCents + fiveCents + twoCents + oneCent);

    total = total.toFixed(2);

    // console.log(`total ${total}`)

    totalString = total.toString();

    // console.log(`totalString ${totalString}`)

    totalSplit = totalString.split(".")

    // console.log(`totalSplit ${totalSplit}`)

    euros = totalSplit[0]
    cents = totalSplit[1]

    if (cents === undefined) {
        cents = "0";
    }

    try {
        if (cents.charAt(0) == "0") {
            cents = cents.substring(1)
        }
    } catch (error) {
        console.log(error)
    }

    // console.log(`euros ${euros} | cents ${cents}`)

    /*
    console.log(`twoEuros ${twoEuros}`)
    console.log(`oneEuro ${oneEuro}`)
    console.log(`fiftyCents ${fiftyCents}`)
    console.log(`twentyCents ${twentyCents}`)
    console.log(`tenCents ${tenCents}`)
    console.log(`fiveCents ${fiveCents}`)
    console.log(`twoCents ${twoCents}`)
    console.log(`oneCent ${oneCent}`)
    */

    document.getElementById("total").innerHTML = `You have ${euros} euros and ${cents} cents`
}