module.exports = function toReadable(num) {
    let result = "";

    const ones = [
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    const tens = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];

    const hundreds = " hundred";

    const numToString = num.toString();

    if (num === 0) {
        return (result = "zero");
    }

    if (num >= 1 && num < 20) {
        result = ones[num];
    } else if (num >= 20 && num <= 99) {
        if (numToString.length == 2) {
            result += tens[parseInt(numToString.charAt(0))];
            result += ones[parseInt(numToString.charAt(1))];
        }
    } else if (numToString.length == 3) {
        result = ones[parseInt(numToString.charAt(0))] + hundreds;
        if (parseInt(numToString.charAt(1)) < 2) {
            result +=
                ones[parseInt(numToString.charAt(1) + numToString.charAt(2))];
        } else {
            result += tens[parseInt(numToString.charAt(1))];
            result += ones[parseInt(numToString.charAt(2))];
        }
    }

    return result.slice(1);
};
