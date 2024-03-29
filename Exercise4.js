function customSubstring(string, n) {
    if (string.length <= n) {
        return string;
    }

    var shortenedString = string.substring(0, n);
    var lastSpaceIndex = shortenedString.lastIndexOf(' ');

    if (lastSpaceIndex !== -1) {
        shortenedString = shortenedString.substring(0, lastSpaceIndex);
    }

    return shortenedString;
}

function processInput() {
    var inputString = document.getElementById("inputString").value;
    var n = parseInt(document.getElementById("n").value);

    var result = customSubstring(inputString, n);
    document.getElementById("output").innerHTML = "Результат: " + result;
}