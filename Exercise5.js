function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var text = event.target.result;
        var lines = text.split('\n');
        var randomIndex = Math.floor(Math.random() * lines.length);
        var randomLine = lines[randomIndex];
        document.getElementById('randomLine').textContent = randomLine;
    };

    reader.readAsText(file);
}

function saveToFile() {
    var randomLine = document.getElementById('randomLine').textContent;
    var blob = new Blob([randomLine], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'random_line.txt';
    link.click();
}