function triangleValidator(){
    let a = parseInt(document.getElementById("aoldal").value);
    let b = parseInt(document.getElementById("boldal").value);
    let c = parseInt(document.getElementById("coldal").value);

    let isValid = false;
    let isDerek = false;

    let Ans = document.getElementById("ans");

    if (a < b+c && b < a+c && c < a+b){
        isValid = true;

        if (a*a + b*b == c*c){isDerek = true}
    }

    if (isValid && isDerek){
        Ans.innerHTML = "Háromszög és derékszögű";
    }
    else if (isValid){
        Ans.innerHTML = "Háromszög de nem derékszögű";
    }
    else {
        Ans.innerHTML = "Nem Háromszög";
    }
}