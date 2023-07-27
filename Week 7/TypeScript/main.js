var x = 10;
function calculateSum(first, second) {
    return first + second;
}
function calculator(first, second, type) {
    if (type === "add") {
        return first + second;
    }
    else if (type === "subtract") {
        return first - second;
    }
    else if (type === "division") {
        return first / second;
    }
    else if (type === "multiply") {
        return first * second;
    }
    return -1;
}
