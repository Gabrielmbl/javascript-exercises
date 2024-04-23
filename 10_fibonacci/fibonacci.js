const fibonacci = function(num) {
    n = parseInt(num)

    switch(true) {
        case (n < 0):
            return "OOPS";
        case (n === 0):
            return 0;
        case (n === 1):
            return 1;
        default:
            // Handle other cases
            break;
    }
    
    let prev = 0
    let current = 1

    for (let i=2; i <= n; i++) {
        let next = prev + current
        prev = current
        current = next
    }

    return current
};

// Do not edit below this line
module.exports = fibonacci;
