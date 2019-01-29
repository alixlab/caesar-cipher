document.getElementById("clickEncode").addEventListener("click", encode);
document.getElementById("clickDecode").addEventListener("click", decode);

function encode() {
    const message = document.getElementById("string").value;
    const shift = parseInt(document.getElementById("offset").value);
    const newMessage = cypher(shift, message);

    document.getElementById("output").innerHTML = newMessage;
}

function decode() {
    const message = document.getElementById("string").value;
    const shift = 26 - parseInt(document.getElementById("offset").value);
    const newMessage = cypher(shift, message);

    document.getElementById("output").innerHTML = newMessage;
}

function cypher(offset, string) {
    let start;
    let newMessage = "";
    for (let i = 0; i < string.length; i++) {
        let code = string[i].charCodeAt();
        if (code >= 65 && code <= 90) {
            start = 65;
        } else if (code >= 97 && code <= 122) {
            start = 97;
        } else {
            newMessage = newMessage.concat(string[i]);
            continue;
        }
        newMessage = newMessage.concat(String.fromCharCode(((code - start + offset) % 26) + start));
    }
    return newMessage;
}