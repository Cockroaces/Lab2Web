function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateString() {
    var length = parseInt(document.getElementById("length").value);
    if (length > 0) {
        var randomString = generateRandomString(length);
        document.getElementById("randomString").innerText = randomString;
    } else {
        alert("Будь ласка, введіть додатню довжину стрічки.");
    }
}