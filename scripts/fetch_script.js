// console script
console.log("fetch_script.js loaded");

// an element with the id "fetchJoke" is clicked.
document.getElementById("fetchJoke").addEventListener("click", function() {
    // Setting up an URL
    var url = "https://icanhazdadjoke.com/";
    
    // Creating a fetch request.
    fetch(url, {
       
        headers: {
            "Accept": "application/json"
        }
    })
    
    .then(response => response.json())
  
    .then(data => {
        // joke to the console
        console.log(data.joke);
       // output element should be displayed
        document.getElementById("output").innerText = data.joke;
    });
});
