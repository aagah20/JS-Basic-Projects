document.querySelector(".btn").addEventListener("click", calculate);

function calculate(){
    let amount = Number(document.querySelector("#amount").value )
    let tip = Number(document.querySelector("#tipPercent").value )

    let tipamount = amount * (tip/100);
    let total = amount + tipamount

    document.querySelector("#tip").innerText = tipamount
    document.querySelector("#total").innerText = total 
}
