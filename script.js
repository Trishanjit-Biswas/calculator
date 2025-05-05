function calculate(op) {
    var xVal = document.getElementById("a").value.trim();
    var yVal = document.getElementById("b").value.trim();

    if (xVal === "" || yVal === "") {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    var x = Number(xVal);
    var y = Number(yVal);
    var res;
    var operation;

    if (op == '+') {
        res = x + y;
        operation = "Addition";
    } else if (op == '-') {
        res = x - y;
        operation = "Subtraction";
    } else if (op == '*') {
        res = x * y;
        operation = "Multiplication";
    } else if (op == '/') {
        if (y === 0) {
            document.getElementById("result").innerText = "Cannot divide by 0!";
            return;
        }
        res = x / y;
        operation = "Division";
    }

    res = Math.round(res * 100) / 100; // Round to 2 decimal places
    document.getElementById("result").innerText = operation + " Result: " + res;
}
