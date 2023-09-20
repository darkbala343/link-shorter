
// A function to generate a random string of length n
function randomString(n) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var result = "";
  for (var i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// A function to shorten a long URL
function shorten() {
  // Get the input value
  var input = document.getElementById("input").value;

  // Validate the input value
  if (input == "") {
    alert("Please enter a URL");
    return;
  }
  
  if (!input.startsWith("http://") && !input.startsWith("https://")) {
    alert("Please enter a valid URL");
    return;
  }

  // Generate a random string of length 6
  var code = randomString(6);

  // Create a short URL using the current domain and the random string
  var shortURL = window.location.origin + "/" + code;

  // Display the short URL in the output element
  var output = document.getElementById("output");
  output.innerHTML = "Your short URL is: <a href='" + shortURL + "' target='_blank'>" + shortURL + "</a>";
  
}
