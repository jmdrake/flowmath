function loadDoc(fname, tag, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById(tag).innerHTML = this.responseText;
    if(callback)
        callback();
    }
  xhttp.open("GET", fname, true);
  xhttp.send();
}

function populateHTML(node, data) {
    for(key in data) {
        tag = node.querySelector("." + key);
        if(tag!=null) {
            if(tag.tagName == "A") {
                tag.setAttribute("href", data[key]);
            } else {
                tag.innerHTML = data[key];
            }
        }
    }
}