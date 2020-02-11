const API_KEY = "8a2d5f49-7149-4695-aec7-fe38ad8aa8ab";

//밑의 내용은 그냥 복붙한 것들
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.thecatapi.com/v1/images/search");
xhr.setRequestHeader("x-api-key", "8a2d5f49-7149-4695-aec7-fe38ad8aa8ab");

xhr.send(data);
