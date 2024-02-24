//console script
console.log("xhr_script.js loaded");

// an element with the id "xhrJoke", when clicked, an XHR request is sent.
document.getElementById("xhrJoke").addEventListener("click", function() {
    // Generating a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Setting up an URL.
    var url = "https://icanhazdadjoke.com/";
    //  Setting up the request by ("GET").
    xhr.open("GET", url);
   
    xhr.setRequestHeader("Accept", "application/json");
    
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            
            var response = JSON.parse(xhr.responseText);
            // joke to the console
            console.log(response.joke);
        
            document.getElementById("output").innerText = response.joke;
        }
    };
    // Send the request
    xhr.send();
});
