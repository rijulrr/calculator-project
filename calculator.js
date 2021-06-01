function calculator() {
    var no1 = parseInt(document.querySelector("#number1").value);
    var no2 = parseInt(document.querySelector("#number2").value);
    var op = document.querySelector("#operation").value;
    var calculate;

    if (op == "add") {
        calculate = no1 + no2;
    } else if (op == "subtract") {
        calculate = no1 - no2;
    } else if (op == "multiply") {
        calculate = no1 * no2;
    } else if (op == "divide") {
        calculate = no1 / no2;
    }

    console.log(calculate)
}