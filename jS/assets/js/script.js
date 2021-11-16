let elementinarray = (value) => {

    const arr = [44, 55, "Nurxan", 89, 27,"Masimzade",78,123,56,12, 24, 33, 48, 55, 78, 93, 104, 113, 122];

    for (let i = 0; i < arr.length; i++) 
    {
        if (value == arr[i]) {
            return true;
        }
    }
    return false;
}

console.log(elementinarray("Nurxan"));


function elementisdouble() {
    
    const double = [44, 55, "Nurxan", 89, 27,"Masimzade",78,123,56,12, 24, 33, 48, 55, 78, 93, 104, 113, 122];

    let newarr = [];
    console.log("double");
    for (let i = 0; i < double.length; i++) 
    {
        if (double[i] % 2 == 0) {
            newarr.push(double[i]);
        }
    }
    
    console.log(newarr);
}

elementisdouble();

function Calc(num1, num2, opr) {
    if (opr == "+") {
        return num1 + num2;
    } else if (opr == "-") {
        return num1 - num2;
    } else if (opr == "/") {
        return num1 / num2;
    } else if (opr == "*") {
        return num1 * num2;
    } else {
        return "Düzgün hesablama daxil edin"
    }
}
console.log(Calc(12, 45, "*"));