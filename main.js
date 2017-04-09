(function() {
  var httpRequest;
  document.getElementById("button").onclick = function() { makeRequest('index.html'); };


  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        document.getElementById("words").innerHTML = httpRequest.responseText;

      }
    }
  }
})();
